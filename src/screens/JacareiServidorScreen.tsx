import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Linking, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface LinkItem {
  id: string;
  title: string;
  icon: string;
  color: string;
  url?: string;
  route?: string;
}

const LINKS: LinkItem[] = [
  {
    id: '1',
    title: 'Site/Jacareí',
    icon: '🏛️',
    color: '#0ea5e9',
    url: 'https://www.jacarei.sp.gov.br/'
  },
  {
    id: '2',
    title: 'Servidores / RH Online',
    icon: '👥',
    color: '#8b5cf6',
    url: 'https://egov.jacarei.sp.gov.br/pmjacarei/websis/siapegov/recursos_humanos/grh/grh_rh_online.php'
  },
  {
    id: '3',
    title: 'Boletim Oficial',
    icon: '📰',
    color: '#f59e0b',
    url: 'https://boletinsoficiais.geosiap.net/pmjacarei/public/publicacoes'
  },
  {
    id: '4',
    title: 'Validade de Documentos',
    icon: '📄',
    color: '#10b981',
    url: 'https://siap.jacarei.sp.gov.br/pmjacarei/websis/siapegov/administrativo/gpro/gpro_index.php'
  },
  {
    id: '5',
    title: 'Transparência Prefeitura',
    icon: '🔍',
    color: '#6366f1',
    url: 'https://www.jacarei.sp.gov.br/transparencia-prefeitura/'
  },
  {
    id: '6',
    title: 'Transparência Servidores',
    icon: '📊',
    color: '#ec4899',
    route: 'Servidores'
  }
];

export default function JacareiServidorScreen() {
  const navigation = useNavigation<any>();

  const handlePress = async (item: LinkItem) => {
    if (item.route) {
      navigation.navigate(item.route);
    } else if (item.url) {
      try {
        await Linking.openURL(item.url);
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível abrir o link externo.');
      }
    }
  };

  const renderItem = ({ item }: { item: LinkItem }) => (
    <TouchableOpacity 
      style={[styles.card, { borderTopColor: item.color }]} 
      onPress={() => handlePress(item)}
      activeOpacity={0.7}
    >
      <View style={[styles.iconContainer, { backgroundColor: item.color + '20' }]}>
        <Text style={styles.icon}>{item.icon}</Text>
      </View>
      <Text style={styles.cardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backBtnText}>⬅️ Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Jacareí / Servidor</Text>
        <View style={{ width: 70 }} />
      </View>

      <FlatList
        data={LINKS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.gridContainer}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
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
    backgroundColor: '#334155',
    borderRadius: 8,
  },
  backBtnText: {
    color: '#f8fafc',
    fontWeight: 'bold',
  },
  headerTitle: {
    color: '#f8fafc',
    fontSize: 20,
    fontWeight: 'bold',
  },
  gridContainer: {
    padding: 12,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#1e293b',
    width: '48%',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 4,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  icon: {
    fontSize: 28,
  },
  cardTitle: {
    color: '#f8fafc',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  }
});
