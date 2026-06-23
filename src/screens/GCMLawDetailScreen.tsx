import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Keyboard } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

type ParamList = {
  GCMLawDetail: { title: string; text: string };
};

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

export default function GCMLawDetailScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'GCMLawDetail'>>();
  const { title, text } = route.params;
  const [searchText, setSearchText] = useState('');
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const paragraphs = text.split('\n\n').filter(p => p.trim() !== '');
  const searchTerms = getSearchTerms(searchText);

  const filteredParagraphs = searchTerms.length === 0 
    ? paragraphs 
    : paragraphs.filter(p => {
        const normalizedP = removeAccents(p).toLowerCase();
        return searchTerms.some(term => normalizedP.includes(term));
      });

  useEffect(() => {
    setCurrentMatchIndex(0);
  }, [searchText]);

  const scrollToNext = () => {
    if (filteredParagraphs.length > 0) {
      Keyboard.dismiss();
      const nextIndex = currentMatchIndex < filteredParagraphs.length - 1 ? currentMatchIndex + 1 : 0;
      setCurrentMatchIndex(nextIndex);
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true, viewPosition: 0.1 });
    }
  };

  const scrollToPrev = () => {
    if (filteredParagraphs.length > 0) {
      Keyboard.dismiss();
      const prevIndex = currentMatchIndex > 0 ? currentMatchIndex - 1 : filteredParagraphs.length - 1;
      setCurrentMatchIndex(prevIndex);
      flatListRef.current?.scrollToIndex({ index: prevIndex, animated: true, viewPosition: 0.1 });
    }
  };

  const renderHighlightedText = (textStr: string, isCurrentFocus: boolean) => {
    if (searchTerms.length === 0) return <Text style={styles.text}>{textStr}</Text>;
    
    const normalizedText = removeAccents(textStr).toLowerCase();
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

    if (matches.length === 0) return <Text style={styles.text}>{textStr}</Text>;

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
        parts.push(<Text key={`text_${index}`}>{textStr.substring(currentIndex, match.start)}</Text>);
      }
      parts.push(
        <Text key={`match_${index}`} style={[styles.highlightedText, isCurrentFocus && styles.focusedHighlight]}>
          {textStr.substring(match.start, match.end)}
        </Text>
      );
      currentIndex = match.end;
    });

    if (currentIndex < textStr.length) {
      parts.push(<Text key={`text_last`}>{textStr.substring(currentIndex)}</Text>);
    }

    return <Text style={styles.text}>{parts}</Text>;
  };

  const renderItem = ({ item, index }: { item: string, index: number }) => {
    const isCurrentFocus = searchTerms.length > 0 && index === currentMatchIndex;
    return (
      <View style={[styles.paragraphContainer, isCurrentFocus && styles.paragraphContainerFocused]}>
        {renderHighlightedText(item, isCurrentFocus)}
      </View>
    );
  };

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
          placeholder="Buscar palavra (ex: férias, arma, gcm)..."
          placeholderTextColor="#64748b"
          value={searchText}
          onChangeText={setSearchText}
        />
        {searchTerms.length > 0 && filteredParagraphs.length > 0 && (
          <View style={styles.searchBarControls}>
            <Text style={styles.searchCountText}>
              {currentMatchIndex + 1} de {filteredParagraphs.length}
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

      <FlatList
        ref={flatListRef}
        data={filteredParagraphs}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        onScrollToIndexFailed={(info) => {
          const wait = new Promise(resolve => setTimeout(resolve, 500));
          wait.then(() => {
            flatListRef.current?.scrollToIndex({ index: info.index, animated: true });
          });
        }}
        ListEmptyComponent={
          <Text style={styles.noResultsText}>Nenhum trecho encontrado com "{searchText}"</Text>
        }
      />
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
  listContent: {
    padding: 20,
    paddingBottom: 40,
  },
  paragraphContainer: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
  },
  paragraphContainerFocused: {
    backgroundColor: '#1e293b',
    borderLeftWidth: 4,
    borderLeftColor: '#fb923c',
  },
  text: {
    fontSize: 15,
    color: '#cbd5e1',
    lineHeight: 24,
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
    backgroundColor: '#fb923c',
    color: '#ffffff',
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
