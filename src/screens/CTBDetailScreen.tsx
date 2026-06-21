import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { WebView } from 'react-native-webview';

type CTBDetailRouteProp = RouteProp<RootStackParamList, 'CTBDetail'>;

export default function CTBDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute<CTBDetailRouteProp>();
  const { chapter } = route.params;
  const [loading, setLoading] = useState(true);

  // Link oficial do CTB (Planalto)
  const CTB_URL = 'https://www.planalto.gov.br/ccivil_03/leis/l9503compilado.htm';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>Cap. {chapter.roman}</Text>
        <View style={{ width: 60 }} />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>CAPÍTULO {chapter.roman}</Text>
        <Text style={styles.subtitle}>{chapter.title}</Text>
        <Text style={styles.articles}>{chapter.articles}</Text>
      </View>

      <View style={styles.webviewContainer}>
        {loading && (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#f59e0b" />
            <Text style={{color: '#94a3b8', marginTop: 10}}>Carregando CTB Oficial...</Text>
          </View>
        )}
        
        {Platform.OS === 'web' ? (
          <iframe 
            src={CTB_URL} 
            style={{ width: '100%', height: '100%', border: 'none', backgroundColor: '#fff' }} 
            onLoad={() => setLoading(false)}
          />
        ) : (
          <WebView 
            source={{ uri: CTB_URL }} 
            style={{ flex: 1, backgroundColor: '#fff' }}
            onLoadEnd={() => setLoading(false)}
            startInLoadingState={false}
          />
        )}
      </View>
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
  headerTitle: { color: '#f8fafc', fontSize: 16, fontWeight: 'bold', flex: 1, textAlign: 'center' },
  titleContainer: { padding: 16, alignItems: 'center', backgroundColor: '#1e293b' },
  title: { color: '#94a3b8', fontSize: 14, fontWeight: 'bold', marginBottom: 2 },
  subtitle: { color: '#f8fafc', fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginBottom: 4 },
  articles: { color: '#60a5fa', fontSize: 12 },
  webviewContainer: { flex: 1, backgroundColor: '#fff', position: 'relative' },
  loader: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1e293b', zIndex: 10 }
});
