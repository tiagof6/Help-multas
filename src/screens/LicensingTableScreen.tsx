import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Exemplo genérico, já que o licenciamento varia por estado. 
// Normalmente o calendário é divulgado pelos DETRANs. 
// Faremos um calendário base comum (Ex: SP).
const CALENDARIO_LICENCIAMENTO = [
  { final: '1 e 2', mes: 'Julho', caminho: 'Caminhões: Setembro' },
  { final: '3 e 4', mes: 'Agosto', caminho: 'Caminhões: Outubro' },
  { final: '5 e 6', mes: 'Setembro', caminho: 'Caminhões: Novembro' },
  { final: '7 e 8', mes: 'Outubro', caminho: 'Caminhões: Dezembro' },
  { final: '9', mes: 'Novembro', caminho: 'Caminhões: Dezembro' },
  { final: '0', mes: 'Dezembro', caminho: 'Caminhões: Dezembro' }
];

export default function LicensingTableScreen() {
  const navigation = useNavigation();
  const [estado, setEstado] = useState('SP'); // Mock de seletor de estado

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>📅 Licenciamento Nacional</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Lembre-se: O calendário oficial de licenciamento é definido pelo DETRAN de cada estado. 
            Abaixo exibimos a tabela base (padrão São Paulo).
          </Text>
        </View>

        <View style={styles.tableHeader}>
          <Text style={[styles.cellHeader, { flex: 1 }]}>Final Placa</Text>
          <Text style={[styles.cellHeader, { flex: 2 }]}>Mês de Vencimento</Text>
        </View>

        {CALENDARIO_LICENCIAMENTO.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <View style={[styles.cell, { flex: 1, borderRightWidth: 1, borderColor: '#334155' }]}>
              <View style={styles.plateBox}>
                <Text style={styles.plateNumber}>{item.final}</Text>
              </View>
            </View>
            <View style={[styles.cell, { flex: 2, alignItems: 'flex-start', paddingLeft: 16 }]}>
              <Text style={styles.monthText}>{item.mes}</Text>
              <Text style={styles.subText}>{item.caminho}</Text>
            </View>
          </View>
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
  headerTitle: { color: '#f8fafc', fontSize: 16, fontWeight: 'bold' },
  content: { padding: 16 },
  infoBox: {
    backgroundColor: '#334155', padding: 12, borderRadius: 8, marginBottom: 20,
    borderLeftWidth: 4, borderLeftColor: '#f59e0b'
  },
  infoText: { color: '#cbd5e1', fontSize: 13, lineHeight: 18 },
  tableHeader: {
    flexDirection: 'row', backgroundColor: '#1e293b', paddingVertical: 12,
    borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomWidth: 2, borderBottomColor: '#3b82f6'
  },
  cellHeader: { color: '#f8fafc', fontWeight: 'bold', fontSize: 14, textAlign: 'center' },
  tableRow: {
    flexDirection: 'row', backgroundColor: '#1e293b', borderBottomWidth: 1, borderBottomColor: '#334155'
  },
  cell: { paddingVertical: 16, justifyContent: 'center', alignItems: 'center' },
  plateBox: {
    backgroundColor: '#0f172a', paddingHorizontal: 12, paddingVertical: 6,
    borderRadius: 4, borderWidth: 1, borderColor: '#475569'
  },
  plateNumber: { color: '#38bdf8', fontSize: 18, fontWeight: 'bold' },
  monthText: { color: '#f8fafc', fontSize: 16, fontWeight: 'bold' },
  subText: { color: '#94a3b8', fontSize: 12, marginTop: 4 }
});
