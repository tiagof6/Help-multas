import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, Keyboard } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { leisGCM } from '../data/lawsGCM';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'GCMLaws'>;

const removeAccents = (str: string) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const getSearchTerms = (query: string): string[] => {
  const norm = removeAccents(query).toLowerCase().trim();
  if (!norm) return [];
  const terms = [norm];
  if (norm === 'gcm') terms.push('guarda civil municipal', 'guarda civil');
  if (norm === 'arma' || norm === 'armas') terms.push('armamento', 'porte de arma');
  if (norm === 'salario') terms.push('vencimento', 'remuneracao', 'subsídio', 'subsidio');
  if (norm === 'licenca') terms.push('afastamento');
  if (norm === 'ferias') terms.push('descanso');
  return terms;
};

export default function GCMLawsScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp>();
  const [searchText, setSearchText] = useState('');
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const searchTerms = getSearchTerms(searchText);
  
  let searchResults: { lawTitle: string; text: string }[] = [];
  if (searchTerms.length > 0) {
    leisGCM.forEach(lei => {
      const paragraphs = lei.text.split('\n\n').filter(p => p.trim() !== '');
      paragraphs.forEach(p => {
        const normalizedP = removeAccents(p).toLowerCase();
        if (searchTerms.some(term => normalizedP.includes(term))) {
          searchResults.push({ lawTitle: lei.title, text: p });
        }
      });
    });
  }

  // Reset index when search changes
  useEffect(() => {
    setCurrentMatchIndex(0);
  }, [searchText]);

  const scrollToNext = () => {
    if (searchResults.length > 0) {
      Keyboard.dismiss();
      const nextIndex = currentMatchIndex < searchResults.length - 1 ? currentMatchIndex + 1 : 0;
      setCurrentMatchIndex(nextIndex);
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true, viewPosition: 0.1 });
    }
  };

  const scrollToPrev = () => {
    if (searchResults.length > 0) {
      Keyboard.dismiss();
      const prevIndex = currentMatchIndex > 0 ? currentMatchIndex - 1 : searchResults.length - 1;
      setCurrentMatchIndex(prevIndex);
      flatListRef.current?.scrollToIndex({ index: prevIndex, animated: true, viewPosition: 0.1 });
    }
  };

  const renderHighlightedText = (text: string, isCurrentFocus: boolean) => {
    if (searchTerms.length === 0) return <Text style={styles.resultText}>{text}</Text>;
    
    const normalizedText = removeAccents(text).toLowerCase();
    const matches: { start: number, end: number }[] = [];
    
    searchTerms.forEach(term => {
      let currentIndex = 0;
      let matchIndex = normalizedText.indexOf(term, currentIndex);
      while (matchIndex !== -1) {
        matches.push({ start: matchIndex, end: matchIndex + term.length });
        currentIndex = matchIndex + term.length;
        matchIndex = normalizedText.indexOf(term, currentIndex);
      }
    });

    if (matches.length === 0) return <Text style={styles.resultText}>{text}</Text>;

    matches.sort((a, b) => a.start - b.start);
    const mergedMatches: { start: number, end: number }[] = [matches[0]];
    for (let i = 1; i < matches.length; i++) {
      const last = mergedMatches[mergedMatches.length - 1];
      const current = matches[i];
      if (current.start <= last.end) {
        last.end = Math.max(last.end, current.end);
      } else {
        mergedMatches.push(current);
      }
    }

    const parts = [];
    let currentIndex = 0;
    mergedMatches.forEach((match, index) => {
      if (match.start > currentIndex) {
        parts.push(<Text key={`text_${index}`}>{text.substring(currentIndex, match.start)}</Text>);
      }
      parts.push(
        <Text key={`match_${index}`} style={[styles.highlightedText, isCurrentFocus && styles.focusedHighlight]}>
          {text.substring(match.start, match.end)}
        </Text>
      );
      currentIndex = match.end;
    });

    if (currentIndex < text.length) {
      parts.push(<Text key={`text_last`}>{text.substring(currentIndex)}</Text>);
    }

    return <Text style={styles.resultText}>{parts}</Text>;
  };

  const renderLawItem = ({ item }: { item: typeof leisGCM[0] }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate('GCMLawDetail' as any, { title: item.title, text: item.text })}
    >
      <View style={styles.cardIcon}>
        <Text style={{ fontSize: 24 }}>🏛️</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDesc}>{item.description}</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  const renderResultItem = ({ item, index }: { item: { lawTitle: string; text: string }, index: number }) => {
    const isCurrentFocus = index === currentMatchIndex;
    return (
      <View style={[styles.resultCard, isCurrentFocus && styles.resultCardFocused]}>
        <Text style={styles.resultLawTitle}>{item.lawTitle}</Text>
        {renderHighlightedText(item.text, isCurrentFocus)}
      </View>
    );
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Leis Servidor/GCM</Text>
        <View style={{ width: 60 }} />
      </View>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar palavra (ex: férias, arma, gcm)..."
          placeholderTextColor="#64748b"
          value={searchText}
          onChangeText={setSearchText}
        />
        {searchResults.length > 0 && (
          <View style={styles.searchBarControls}>
            <Text style={styles.searchCountText}>
              {currentMatchIndex + 1} de {searchResults.length}
            </Text>
            <View style={styles.arrowsContainer}>
              <TouchableOpacity onPress={scrollToPrev} style={styles.arrowBtn}>
                <Text style={styles.arrowBtnText}>▲</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={scrollToNext} style={styles.arrowBtn}>
                <Text style={styles.arrowBtnText}>▼</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>

      {searchText.trim() === '' ? (
        <FlatList
          data={leisGCM}
          keyExtractor={item => item.id}
          renderItem={renderLawItem}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <FlatList
          ref={flatListRef}
          data={searchResults}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderResultItem}
          contentContainerStyle={styles.listContainer}
          onScrollToIndexFailed={(info) => {
            const wait = new Promise(resolve => setTimeout(resolve, 500));
            wait.then(() => {
              flatListRef.current?.scrollToIndex({ index: info.index, animated: true });
            });
          }}
          ListEmptyComponent={
            <Text style={styles.noResultsText}>Nenhum resultado encontrado para "{searchText}"</Text>
          }
        />
      )}
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f8fafc',
    textAlign: 'center',
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
  listContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#334155',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    color: '#f8fafc',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardDesc: {
    color: '#94a3b8',
    fontSize: 13,
  },
  arrow: {
    color: '#64748b',
    fontSize: 24,
    marginLeft: 10,
  },
  resultCard: {
    backgroundColor: '#1e293b',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#10b981',
  },
  resultLawTitle: {
    color: '#10b981',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  resultText: {
    color: '#cbd5e1',
    fontSize: 15,
    lineHeight: 22,
  },
  noResultsText: {
    color: '#94a3b8',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    fontStyle: 'italic',
  },
  highlightedText: {
    color: '#0f172a',
    backgroundColor: '#fcd34d',
    fontWeight: 'bold',
  },
  focusedHighlight: {
    backgroundColor: '#fb923c', // Laranja mais forte para o item focado
    color: '#ffffff',
  },
  resultCardFocused: {
    borderLeftColor: '#fb923c',
    backgroundColor: '#334155',
  },
  searchBarControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 5,
  },
  searchCountText: {
    color: '#94a3b8',
    fontSize: 14,
    fontWeight: 'bold',
  },
  arrowsContainer: {
    flexDirection: 'row',
  },
  arrowBtn: {
    backgroundColor: '#334155',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    marginLeft: 10,
  },
  arrowBtnText: {
    color: '#f8fafc',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
