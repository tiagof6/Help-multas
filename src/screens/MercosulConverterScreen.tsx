import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MercosulConverterScreen() {
  const navigation = useNavigation();
  const [oldPlate, setOldPlate] = useState('');
  const [newPlate, setNewPlate] = useState('');

  const convertPlate = (text: string) => {
    let formattedText = text.toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (formattedText.length > 7) {
      formattedText = formattedText.substring(0, 7);
    }
    setOldPlate(formattedText);

    // Formato Antigo: LLLNNNN (ex: ABC1234)
    // Formato Mercosul: LLLNLNN (ex: ABC1C34) -> O segundo número é convertido para letra.
    // Conversão: 0=A, 1=B, 2=C, 3=D, 4=E, 5=F, 6=G, 7=H, 8=I, 9=J
    
    if (formattedText.length === 7) {
      const letters = formattedText.substring(0, 3);
      const numbers = formattedText.substring(3, 7);
      
      // Verifica se é placa antiga válida (3 letras e 4 números)
      if (/^[A-Z]{3}[0-9]{4}$/.test(formattedText)) {
        const conversionMap: { [key: string]: string } = {
          '0': 'A', '1': 'B', '2': 'C', '3': 'D', '4': 'E',
          '5': 'F', '6': 'G', '7': 'H', '8': 'I', '9': 'J'
        };
        const secondNum = numbers[1];
        const mercosulPlate = letters + numbers[0] + conversionMap[secondNum] + numbers.substring(2);
        setNewPlate(mercosulPlate);
      } 
      // Verifica se já é Mercosul (3 letras, 1 numero, 1 letra, 2 numeros)
      else if (/^[A-Z]{3}[0-9][A-Z][0-9]{2}$/.test(formattedText)) {
        setNewPlate(formattedText); // Já está no formato
      } else {
        setNewPlate(''); // Inválida
      }
    } else {
      setNewPlate('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>🔠 Conversor Mercosul</Text>
        <View style={{ width: 60 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Digite a placa antiga (ex: ABC1234):</Text>
        <TextInput
          style={styles.input}
          value={oldPlate}
          onChangeText={convertPlate}
          placeholder="ABC1234"
          placeholderTextColor="#64748b"
          autoCapitalize="characters"
          maxLength={7}
        />

        <View style={styles.resultBox}>
          <Text style={styles.resultLabel}>Placa Padrão Mercosul:</Text>
          <Text style={styles.resultPlate}>
            {newPlate ? newPlate : "---"}
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Como funciona a conversão?</Text>
          <Text style={styles.infoText}>O segundo número da placa antiga é substituído por uma letra correspondente:</Text>
          <View style={styles.table}>
            <View style={styles.col}><Text style={styles.tableText}>0 ➔ A</Text></View>
            <View style={styles.col}><Text style={styles.tableText}>1 ➔ B</Text></View>
            <View style={styles.col}><Text style={styles.tableText}>2 ➔ C</Text></View>
            <View style={styles.col}><Text style={styles.tableText}>3 ➔ D</Text></View>
            <View style={styles.col}><Text style={styles.tableText}>4 ➔ E</Text></View>
            <View style={styles.col}><Text style={styles.tableText}>5 ➔ F</Text></View>
            <View style={styles.col}><Text style={styles.tableText}>6 ➔ G</Text></View>
            <View style={styles.col}><Text style={styles.tableText}>7 ➔ H</Text></View>
            <View style={styles.col}><Text style={styles.tableText}>8 ➔ I</Text></View>
            <View style={styles.col}><Text style={styles.tableText}>9 ➔ J</Text></View>
          </View>
        </View>
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
  headerTitle: { color: '#f8fafc', fontSize: 18, fontWeight: 'bold' },
  content: { padding: 20 },
  label: { color: '#cbd5e1', fontSize: 16, marginBottom: 8 },
  input: {
    backgroundColor: '#1e293b', color: '#f8fafc', fontSize: 24, padding: 16, 
    borderRadius: 8, borderWidth: 2, borderColor: '#3b82f6', textAlign: 'center',
    fontWeight: 'bold', letterSpacing: 2
  },
  resultBox: {
    backgroundColor: '#f8fafc', padding: 20, borderRadius: 12, marginTop: 30, alignItems: 'center',
    borderTopWidth: 15, borderTopColor: '#2563eb' // Estilo placa mercosul (azul em cima)
  },
  resultLabel: { color: '#64748b', fontSize: 14, marginBottom: 8 },
  resultPlate: { color: '#0f172a', fontSize: 40, fontWeight: 'bold', letterSpacing: 4 },
  infoBox: { marginTop: 40, backgroundColor: '#1e293b', padding: 16, borderRadius: 8 },
  infoTitle: { color: '#f8fafc', fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  infoText: { color: '#94a3b8', fontSize: 14, marginBottom: 16 },
  table: { flexDirection: 'row', flexWrap: 'wrap' },
  col: { width: '20%', padding: 4, alignItems: 'center' },
  tableText: { color: '#38bdf8', fontSize: 16, fontWeight: 'bold' }
});
