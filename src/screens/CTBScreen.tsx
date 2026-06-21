import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

const CTB_CHAPTERS = [
  { roman: 'I', title: 'DISPOSIÇÕES PRELIMINARES', articles: 'Arts. 1º a 4º' },
  { roman: 'II', title: 'DO SISTEMA NACIONAL DE TRÂNSITO', articles: 'Arts. 5º a 25' },
  { roman: 'III', title: 'DAS NORMAS GERAIS DE CIRCULAÇÃO E CONDUTA', articles: 'Arts. 26 a 67' },
  { roman: 'IV', title: 'DOS PEDESTRES E CONDUTORES DE VEÍCULOS NÃO MOTORIZADOS', articles: 'Arts. 68 a 71' },
  { roman: 'V', title: 'DO CIDADÃO', articles: 'Arts. 72 a 73' },
  { roman: 'VI', title: 'DA EDUCAÇÃO PARA O TRÂNSITO', articles: 'Arts. 74 a 79' },
  { roman: 'VII', title: 'DA SINALIZAÇÃO DE TRÂNSITO', articles: 'Arts. 80 a 90' },
  { roman: 'VIII', title: 'DA ENGENHARIA DE TRÁFEGO, DA OPERAÇÃO, DA FISCALIZAÇÃO E DO POLICIAMENTO OSTENSIVO DE TRÂNSITO', articles: 'Arts. 91 a 95' },
  { roman: 'IX', title: 'DOS VEÍCULOS', articles: 'Arts. 96 a 119' },
  { roman: 'X', title: 'VEÍCULOS EM CIRCULAÇÃO INTERNACIONAL', articles: 'Arts. 120 a 121' },
  { roman: 'XI', title: 'DO REGISTRO DE VEÍCULOS', articles: 'Arts. 122 a 129' },
  { roman: 'XII', title: 'DO LICENCIAMENTO', articles: 'Arts. 130 a 135' },
  { roman: 'XIII', title: 'DA CONDUÇÃO DE ESCOLARES', articles: 'Arts. 136 a 139' },
  { roman: 'XIV', title: 'DA HABILITAÇÃO', articles: 'Arts. 140 a 160' },
  { roman: 'XV', title: 'DAS INFRAÇÕES', articles: 'Arts. 161 a 255' },
  { roman: 'XVI', title: 'DAS PENALIDADES', articles: 'Arts. 256 a 268' },
  { roman: 'XVII', title: 'DAS MEDIDAS ADMINISTRATIVAS', articles: 'Arts. 269 a 279' },
  { roman: 'XVIII', title: 'DO PROCESSO ADMINISTRATIVO', articles: 'Arts. 280 a 290' },
  { roman: 'XIX', title: 'DOS CRIMES DE TRÂNSITO', articles: 'Arts. 291 a 312' },
  { roman: 'XX', title: 'DAS DISPOSIÇÕES FINAIS E TRANSITÓRIAS', articles: 'Arts. 313 a 341' }
];

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'CTB'>;

export default function CTBScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>📖 Código de Trânsito</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Abaixo estão os Capítulos do Código de Trânsito Brasileiro (CTB - Lei nº 9.503/1997).
          </Text>
        </View>

        {CTB_CHAPTERS.map((cap, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.chapterCard}
            onPress={() => navigation.navigate('CTBDetail', { chapter: cap })}
          >
            <View style={styles.romanBox}>
              <Text style={styles.romanText}>{cap.roman}</Text>
            </View>
            <View style={styles.chapterInfo}>
              <Text style={styles.chapterTitle}>CAPÍTULO {cap.roman}</Text>
              <Text style={styles.chapterSubtitle}>{cap.title}</Text>
              <Text style={styles.chapterArticles}>{cap.articles}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  scrollContainer: { padding: 16 },
  infoBox: {
    backgroundColor: '#3b82f620', padding: 16, borderRadius: 8, marginBottom: 16,
    borderLeftWidth: 4, borderLeftColor: '#3b82f6'
  },
  infoText: { color: '#93c5fd', fontSize: 14, lineHeight: 20 },
  chapterCard: {
    backgroundColor: '#1e293b', borderRadius: 8, padding: 16, marginBottom: 12,
    flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#334155'
  },
  romanBox: {
    width: 50, height: 50, borderRadius: 25, backgroundColor: '#ef444420',
    alignItems: 'center', justifyContent: 'center', marginRight: 16, borderWidth: 1, borderColor: '#ef444450'
  },
  romanText: { color: '#ef4444', fontSize: 18, fontWeight: 'bold' },
  chapterInfo: { flex: 1 },
  chapterTitle: { color: '#94a3b8', fontSize: 12, fontWeight: 'bold', marginBottom: 2 },
  chapterSubtitle: { color: '#f8fafc', fontSize: 14, fontWeight: 'bold', marginBottom: 6 },
  chapterArticles: { color: '#60a5fa', fontSize: 12 }
});
