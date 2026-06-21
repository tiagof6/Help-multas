import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Alert, ScrollView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function QuickDraftScreen() {
  const navigation = useNavigation();
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [address, setAddress] = useState('Buscando endereço...');
  const [placa, setPlaca] = useState('');
  const [observacao, setObservacao] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setAddress('Permissão de GPS negada.');
          setLoading(false);
          return;
        }

        const loc = await Location.getCurrentPositionAsync({});
        setLocation(loc);

        const geocode = await Location.reverseGeocodeAsync({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude
        });

        if (geocode.length > 0) {
          const { street, streetNumber, district, city } = geocode[0];
          const rua = street || 'Rua desconhecida';
          const numero = streetNumber ? `, ${streetNumber}` : '';
          const bairro = district ? ` - ${district}` : '';
          const cidade = city ? ` (${city})` : '';
          setAddress(`${rua}${numero}${bairro}${cidade}`);
        } else {
          setAddress(`Lat: ${loc.coords.latitude.toFixed(4)}, Lng: ${loc.coords.longitude.toFixed(4)}`);
        }
      } catch (error) {
        setAddress('Falha ao buscar endereço GPS. Tente novamente.');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const openMap = () => {
    if (location) {
      const url = `geo:${location.coords.latitude},${location.coords.longitude}?q=${location.coords.latitude},${location.coords.longitude}`;
      Linking.canOpenURL(url).then(supported => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${location.coords.latitude},${location.coords.longitude}`);
        }
      });
    }
  };

  const saveDraft = async () => {
    if (!placa.trim()) {
      Alert.alert("Aviso", "Digite a Placa antes de salvar.");
      return;
    }

    const currentData = new Date().toLocaleString('pt-BR');
    
    let mapsLink = '';
    if (location) {
      mapsLink = `\nMAPA: https://www.google.com/maps/search/?api=1&query=${location.coords.latitude},${location.coords.longitude}`;
    }

    // Formatting the string based on user's exact specification
    const textFormat = `PLACA: ${placa.toUpperCase()}
LOCAL EXATO: ${address}${mapsLink}
HORÁRIO: ${currentData}
OBSERVAÇÃO: ${observacao || 'Nenhuma'}
    `;

    const newNote = {
      id: Date.now().toString(),
      text: textFormat,
      audioUri: null,
      createdAt: currentData
    };

    try {
      const savedNotes = await AsyncStorage.getItem('@agent_notes');
      let notesArray = [];
      if (savedNotes) notesArray = JSON.parse(savedNotes);
      notesArray.unshift(newNote);
      await AsyncStorage.setItem('@agent_notes', JSON.stringify(notesArray));
      Alert.alert("Sucesso", "Rascunho salvo no Bloco de Notas!", [
        { text: "OK", onPress: () => navigation.goBack() }
      ]);
    } catch (e) {
      Alert.alert("Erro", "Falha ao salvar rascunho.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backBtnText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Rascunho Rápido</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.gpsCard}>
          <Text style={styles.gpsTitle}>🛰️ Localização Satélite</Text>
          <Text style={styles.gpsText}>{loading ? 'Sincronizando GPS...' : address}</Text>
          <TouchableOpacity style={styles.mapBtn} onPress={openMap} disabled={loading || !location}>
            <Text style={styles.mapBtnText}>📍 Abrir no Mapa</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>🚘 Placa do Veículo (Dite ou Digite)</Text>
        <TextInput
          style={styles.inputPlaca}
          placeholder="Ex: ABC1D23"
          placeholderTextColor="#64748b"
          value={placa}
          onChangeText={setPlaca}
          autoCapitalize="characters"
        />

        <Text style={styles.label}>📝 Observação da Infração</Text>
        <TextInput
          style={styles.inputObs}
          placeholder="Dite os detalhes da abordagem..."
          placeholderTextColor="#64748b"
          value={observacao}
          onChangeText={setObservacao}
          multiline
        />

        <TouchableOpacity style={styles.saveBtn} onPress={saveDraft}>
          <Text style={styles.saveBtnText}>💾 Salvar Rascunho</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, backgroundColor: '#1e293b' },
  backBtn: { padding: 8 },
  backBtnText: { color: '#38bdf8', fontSize: 16, fontWeight: 'bold' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#f8fafc' },
  content: { padding: 20 },
  gpsCard: { backgroundColor: '#1e293b', padding: 15, borderRadius: 10, marginBottom: 20, borderWidth: 1, borderColor: '#334155' },
  gpsTitle: { color: '#f8fafc', fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  gpsText: { color: '#94a3b8', fontSize: 14, marginBottom: 15 },
  mapBtn: { backgroundColor: '#3b82f6', padding: 10, borderRadius: 8, alignItems: 'center' },
  mapBtnText: { color: '#fff', fontWeight: 'bold' },
  label: { color: '#f8fafc', fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  inputPlaca: { backgroundColor: '#1e293b', color: '#f8fafc', padding: 15, borderRadius: 8, fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, borderWidth: 1, borderColor: '#334155' },
  inputObs: { backgroundColor: '#1e293b', color: '#f8fafc', padding: 15, borderRadius: 8, fontSize: 16, minHeight: 120, textAlignVertical: 'top', marginBottom: 30, borderWidth: 1, borderColor: '#334155' },
  saveBtn: { backgroundColor: '#10b981', padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 40 },
  saveBtnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});
