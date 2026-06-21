import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, SafeAreaView, Image, Alert, ActivityIndicator } from 'react-native';
import { infractionsData as localFallbackData, Infraction } from '../data/infractions';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { signOut } from 'firebase/auth';
import { auth, db } from '../services/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'InfractionSearch'>;

export default function InfractionSearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [infractionsData, setInfractionsData] = useState<Infraction[]>(localFallbackData);
  const [isSyncing, setIsSyncing] = useState(false);
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    // 1. Tentar carregar do cache offline primeiro
    const loadCache = async () => {
      try {
        const cached = await AsyncStorage.getItem('@infractions_cache');
        if (cached) {
          setInfractionsData(JSON.parse(cached));
        }
      } catch (e) {
        console.error("Erro ao ler cache offline:", e);
      }
    };
    loadCache();

    // 2. Conectar na nuvem para manter atualizado (Sincronização)
    setIsSyncing(true);
    const unsubscribe = onSnapshot(collection(db, 'infractions'), async (snapshot) => {
      if (!snapshot.empty) {
        const cloudData: Infraction[] = [];
        snapshot.forEach((doc) => {
          cloudData.push(doc.data() as Infraction);
        });
        
        // Atualiza a tela
        setInfractionsData(cloudData);
        setIsSyncing(false);

        // Salva no cofre offline para uso sem internet
        try {
          await AsyncStorage.setItem('@infractions_cache', JSON.stringify(cloudData));
        } catch (e) {
          console.error("Erro ao salvar cache:", e);
        }
      } else {
        setIsSyncing(false);
      }
    }, (error) => {
      console.log("Usuário está offline ou sem permissão. Usando cache local.");
      setIsSyncing(false);
    });

    return () => unsubscribe();
  }, []);

  const normalizeText = (text: string) => {
    return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/-/g, "");
  };

  const mapSynonyms = (query: string) => {
    let q = query;
    q = q.replace(/empina[a-z]*/g, 'malabaris');
    q = q.replace(/careca/g, 'estado');
    q = q.replace(/bafometro/g, 'alcoo');
    q = q.replace(/fura sinal/g, 'vermelho');
    q = q.replace(/escapamento/g, 'descarga');
    q = q.replace(/radar/g, 'velocidade');
    q = q.replace(/insulfilm/g, 'pelicula');
    return q;
  };

  const filteredData = infractionsData.filter(item => {
    if (!searchQuery) return true;
    
    const rawQuery = normalizeText(searchQuery);
    const codeNormalized = normalizeText(item.codigo);
    
    // Se digitou código exato (ex 70561) acha 705-61
    if (codeNormalized.includes(rawQuery)) return true;

    const mappedQuery = mapSynonyms(rawQuery);
    const descNormalized = normalizeText(item.descricao);
    const artNormalized = normalizeText(item.artigo);

    // Dividimos a pesquisa em palavras. TODAS as palavras devem estar na descrição/artigo
    const searchWords = mappedQuery.split(' ').filter(w => w.trim().length > 0);
    
    const matchesAllWords = searchWords.every(word => 
      descNormalized.includes(word) || artNormalized.includes(word)
    );

    return matchesAllWords;
  });

  const renderItem = ({ item }: { item: Infraction }) => (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate('Detail', { infraction: item })}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.codeText}>{item.codigo}</Text>
        <Text style={styles.articleText}>Art. {item.artigo}</Text>
      </View>
      <Text style={styles.descriptionText} numberOfLines={2}>
        {item.descricao}
      </Text>
      <View style={styles.cardFooter}>
        <Text style={[styles.badge, item.gravidade.includes('Gravíssima') ? styles.badgeRed : styles.badgeOrange]}>
          {item.gravidade.split(' ')[0]}
        </Text>
        <Text style={styles.pointsText}>{item.pontos} pontos</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Voltar</Text>
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <View>
            <Text style={styles.title}>Código Infração</Text>
            <Text style={styles.subtitle}>Pesquise pelo artigo ou descrição</Text>
          </View>
        </View>
        <View style={{ width: 60 }} />
      </View>
      
      {isSyncing && (
        <View style={styles.syncBanner}>
          <ActivityIndicator size="small" color="#3b82f6" />
          <Text style={styles.syncText}>Sincronizando infrações com a nuvem...</Text>
        </View>
      )}

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por código, artigo ou descrição..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma infração encontrada.</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a', // Dark blue (Police style)
  },
  header: {
    padding: 20,
    backgroundColor: '#1e293b',
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backBtn: {
    padding: 8,
  },
  backBtnText: {
    color: '#60a5fa',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  syncBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e3a8a',
    padding: 8,
    justifyContent: 'center',
  },
  syncText: {
    color: '#93c5fd',
    fontSize: 12,
    marginLeft: 8,
  },
  logoutBtn: {
    padding: 8,
    backgroundColor: '#334155',
    borderRadius: 8,
  },
  logoutText: {
    color: '#f8fafc',
    fontWeight: 'bold',
    fontSize: 14,
  },
  logo: {
    width: 48,
    height: 48,
    marginRight: 12,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f8fafc',
  },
  subtitle: {
    fontSize: 14,
    color: '#94a3b8',
    marginTop: 4,
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#0f172a',
  },
  searchInput: {
    backgroundColor: '#1e293b',
    color: '#f8fafc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#334155',
  },
  listContainer: {
    padding: 16,
    paddingTop: 0,
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  codeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#60a5fa',
  },
  articleText: {
    fontSize: 14,
    color: '#94a3b8',
    fontWeight: '600',
  },
  descriptionText: {
    fontSize: 15,
    color: '#cbd5e1',
    lineHeight: 20,
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    overflow: 'hidden',
  },
  badgeRed: {
    backgroundColor: '#ef4444',
  },
  badgeOrange: {
    backgroundColor: '#f59e0b',
  },
  pointsText: {
    fontSize: 14,
    color: '#94a3b8',
  },
  emptyText: {
    color: '#94a3b8',
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
  }
});
