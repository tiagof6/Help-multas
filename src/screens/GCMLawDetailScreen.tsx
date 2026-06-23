import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

type ParamList = {
  GCMLawDetail: { title: string; text: string };
};

export default function GCMLawDetailScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'GCMLawDetail'>>();
  const { title, text } = route.params;
  const [searchText, setSearchText] = useState('');

  // Dividir o texto em parágrafos para facilitar o filtro
  const paragraphs = text.split('\n\n').filter(p => p.trim() !== '');

  // Filtrar os parágrafos que contêm a palavra digitada
  const filteredParagraphs = searchText.trim() === '' 
    ? paragraphs 
    : paragraphs.filter(p => p.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
        <View style={{ width: 60 }} />
      </View>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar palavra neste texto..."
          placeholderTextColor="#64748b"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        {filteredParagraphs.length > 0 ? (
          filteredParagraphs.map((paragraph, index) => (
            <Text key={index} style={styles.text}>
              {paragraph}
            </Text>
          ))
        ) : (
          <Text style={styles.noResultsText}>Nenhum trecho encontrado com "{searchText}"</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
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
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f8fafc',
    textAlign: 'center',
    marginHorizontal: 10,
  },
  searchContainer: {
    padding: 15,
    backgroundColor: '#1e293b',
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  searchInput: {
    backgroundColor: '#0f172a',
    color: '#f8fafc',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#334155',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  text: {
    fontSize: 15,
    color: '#cbd5e1',
    lineHeight: 24,
    marginBottom: 15,
  },
  noResultsText: {
    color: '#94a3b8',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    fontStyle: 'italic',
  }
});
