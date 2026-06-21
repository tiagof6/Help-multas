import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Clipboard from 'expo-clipboard';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export default function DetailScreen() {
  const route = useRoute<Props['route']>();
  const navigation = useNavigation<Props['navigation']>();
  const { infraction } = route.params;
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    await Clipboard.setStringAsync(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detalhes da Infração</Text>
        <View style={styles.backButton} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.mainCard}>
          <View style={styles.rowBetween}>
            <Text style={styles.codeText}>{infraction.codigo}</Text>
            <View style={[styles.badge, infraction.gravidade.includes('Gravíssima') ? styles.badgeRed : styles.badgeOrange]}>
              <Text style={styles.badgeText}>{infraction.gravidade}</Text>
            </View>
          </View>
          <Text style={styles.description}>{infraction.descricao}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Amparo Legal</Text>
          <Text style={styles.sectionContent}>Art. {infraction.artigo} do CTB</Text>
        </View>

        <View style={styles.rowSection}>
          <View style={styles.halfSection}>
            <Text style={styles.sectionTitle}>Valor da Multa</Text>
            <Text style={styles.highlightText}>{infraction.valor}</Text>
          </View>
          <View style={styles.halfSection}>
            <Text style={styles.sectionTitle}>Pontuação</Text>
            <Text style={styles.highlightText}>{infraction.pontos} pontos</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Penalidade</Text>
          <Text style={styles.sectionContent}>{infraction.penalidade}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Medida Administrativa</Text>
          <Text style={styles.sectionContent}>{infraction.medidaAdministrativa}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Infrator</Text>
          <Text style={styles.sectionContent}>{infraction.infrator}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Competência</Text>
          <Text style={styles.sectionContent}>{infraction.competencia}</Text>
        </View>

        {infraction.exemplosObservacao && infraction.exemplosObservacao.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Exemplos de Observação (Toque para copiar)</Text>
            {infraction.exemplosObservacao.map((ex, index) => (
              <TouchableOpacity key={index} style={styles.exampleCard} onPress={() => copyToClipboard(ex)}>
                <Text style={styles.exampleText}>"{ex}"</Text>
                <Text style={styles.copyHint}>📋 Copiar</Text>
              </TouchableOpacity>
            ))}
            {copied && <Text style={styles.copiedFeedback}>✅ Copiado para a área de transferência!</Text>}
          </View>
        )}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#1e293b',
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  backButton: {
    width: 60,
  },
  backButtonText: {
    color: '#60a5fa',
    fontSize: 16,
  },
  headerTitle: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContent: {
    padding: 16,
  },
  mainCard: {
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#334155',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  codeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#60a5fa',
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  badgeRed: {
    backgroundColor: '#ef4444',
  },
  badgeOrange: {
    backgroundColor: '#f59e0b',
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  description: {
    fontSize: 18,
    color: '#f8fafc',
    lineHeight: 24,
  },
  section: {
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  rowSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  halfSection: {
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 8,
    width: '48%',
  },
  sectionTitle: {
    fontSize: 14,
    color: '#94a3b8',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  sectionContent: {
    fontSize: 16,
    color: '#f8fafc',
  },
  highlightText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#60a5fa',
  },
  obsSection: {
    backgroundColor: '#3b2f2f', // Fundo levemente vermelho para destacar
    borderLeftWidth: 4,
    borderLeftColor: '#f59e0b',
    marginTop: 8,
  },
  obsTitle: {
    fontSize: 16,
    color: '#fcd34d',
    marginBottom: 12,
    fontWeight: 'bold',
  },
  obsContent: {
    fontSize: 16,
    color: '#fef3c7',
    fontStyle: 'italic',
    marginBottom: 16,
    lineHeight: 22,
  },
  copyButton: {
    backgroundColor: '#f59e0b',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  copyButtonText: {
    color: '#451a03',
    fontWeight: 'bold',
    fontSize: 16,
  },
  exampleCard: {
    backgroundColor: '#0f172a',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#334155',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exampleText: {
    fontSize: 15,
    color: '#cbd5e1',
    flex: 1,
    fontStyle: 'italic',
    marginRight: 10,
  },
  copyHint: {
    fontSize: 12,
    color: '#10b981',
    fontWeight: 'bold',
  },
  copiedFeedback: {
    color: '#10b981',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  }
});
