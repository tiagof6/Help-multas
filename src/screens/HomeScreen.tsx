import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { infractionsData, Infraction } from '../data/infractions';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation<NavigationProp>();

  const filteredData = infractionsData.filter(item => {
    const query = searchQuery.toLowerCase();
    const matchSinonimos = item.sinonimos?.some(s => s.toLowerCase().includes(query));
    
    return (
      item.codigo.toLowerCase().includes(query) ||
      item.descricao.toLowerCase().includes(query) ||
      item.artigo.toLowerCase().includes(query) ||
      matchSinonimos
    );
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
        <View style={styles.headerTitleContainer}>
          <Image source={require('../../assets/icon.png')} style={styles.logo} />
          <View>
            <Text style={styles.title}>Help Multas</Text>
            <Text style={styles.subtitle}>Guia de Autuações CTB</Text>
          </View>
        </View>
      </View>
      
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
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
