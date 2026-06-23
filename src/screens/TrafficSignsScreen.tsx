import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, TextInput, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import signsData from '../data/signs.json';
import { Image } from 'expo-image';
export default function TrafficSignsScreen() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'todos' | 'regulamentacao' | 'advertencia'>('todos');

  const filteredSigns = signsData.filter(sign => {
    const query = searchQuery.toLowerCase().replace(/-/g, "");
    const code = sign.code.toLowerCase().replace(/-/g, "");
    const desc = sign.description.toLowerCase().replace(/-/g, "");
    
    const matchesSearch = code.includes(query) || desc.includes(query);
    const matchesFilter = filter === 'todos' || sign.category === filter;
    return matchesSearch && matchesFilter;
  });

  const renderSign = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image 
          source={{ 
            uri: item.svgUrl,
            headers: { 'User-Agent': 'HelpMultas/1.0 (Mobile App)' }
          }} 
          style={{ width: '100%', height: '100%' }} 
          contentFit="contain"
          transition={200}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.codeText}>{item.code}</Text>
        <Text style={styles.descText} numberOfLines={2}>{item.categoryName}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Placas de Trânsito</Text>
        <View style={{ width: 60 }} />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por código (ex: R-1)"
          placeholderTextColor="#64748b"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity 
          style={[styles.filterBtn, filter === 'todos' && styles.filterBtnActive]} 
          onPress={() => setFilter('todos')}
        >
          <Text style={[styles.filterText, filter === 'todos' && styles.filterTextActive]}>Todas</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterBtn, filter === 'regulamentacao' && styles.filterBtnActive]} 
          onPress={() => setFilter('regulamentacao')}
        >
          <Text style={[styles.filterText, filter === 'regulamentacao' && styles.filterTextActive]}>Regulamentação</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterBtn, filter === 'advertencia' && styles.filterBtnActive]} 
          onPress={() => setFilter('advertencia')}
        >
          <Text style={[styles.filterText, filter === 'advertencia' && styles.filterTextActive]}>Advertência</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredSigns}
        keyExtractor={(item) => item.id}
        renderItem={renderSign}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.row}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  header: {
    padding: 20, backgroundColor: '#1e293b', borderBottomWidth: 1, borderBottomColor: '#334155',
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  },
  backBtn: { padding: 8 },
  backBtnText: { color: '#60a5fa', fontSize: 16, fontWeight: 'bold' },
  headerTitle: { color: '#f8fafc', fontSize: 18, fontWeight: 'bold' },
  searchContainer: { padding: 16, backgroundColor: '#0f172a' },
  searchInput: {
    backgroundColor: '#1e293b', color: '#f8fafc', padding: 12, borderRadius: 8,
    borderWidth: 1, borderColor: '#334155', fontSize: 16
  },
  filterContainer: {
    flexDirection: 'row', paddingHorizontal: 16, marginBottom: 10, gap: 8
  },
  filterBtn: {
    paddingVertical: 8, paddingHorizontal: 12, borderRadius: 20, backgroundColor: '#1e293b',
    borderWidth: 1, borderColor: '#334155'
  },
  filterBtnActive: { backgroundColor: '#3b82f6', borderColor: '#3b82f6' },
  filterText: { color: '#94a3b8', fontSize: 12, fontWeight: 'bold' },
  filterTextActive: { color: '#fff' },
  listContent: { padding: 10 },
  row: { justifyContent: 'space-between' },
  card: {
    width: '48%', backgroundColor: '#1e293b', borderRadius: 10, marginBottom: 15,
    borderWidth: 1, borderColor: '#334155', overflow: 'hidden', alignItems: 'center'
  },
  imageContainer: {
    width: 100, height: 100, padding: 10, marginTop: 10, backgroundColor: 'transparent'
  },
  infoContainer: {
    width: '100%', padding: 10, alignItems: 'center', borderTopWidth: 1, borderTopColor: '#334155', marginTop: 10, backgroundColor: '#0f172a'
  },
  codeText: { color: '#f8fafc', fontSize: 16, fontWeight: 'bold' },
  descText: { color: '#94a3b8', fontSize: 10, textAlign: 'center' }
});
