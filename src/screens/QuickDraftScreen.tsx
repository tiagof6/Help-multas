import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ScrollView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';

export default function QuickDraftScreen() {
  const navigation = useNavigation();
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [address, setAddress] = useState('Buscando endereço...');
  const [placa, setPlaca] = useState('');
  const [observacao, setObservacao] = useState('');
  const [loading, setLoading] = useState(true);
  
  // New States
  const [isSaved, setIsSaved] = useState(false);
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [audioUri, setAudioUri] = useState<string | null>(null);

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

  const openMasterPlaca = () => {
    Linking.openURL('https://play.google.com/store/apps/details?id=com.devplank.masterplaca');
  };

  const startRecording = async () => {
    try {
      const permission = await Audio.requestPermissionsAsync();
      if (permission.status !== 'granted') {
        alert("Precisamos de acesso ao microfone para gravar.");
        return;
      }
      await Audio.setAudioModeAsync({ allowsRecordingIOS: true, playsInSilentModeIOS: true });
      const { recording: rec } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
      setRecording(rec);
    } catch (err) {
      console.error('Falha ao iniciar gravação', err);
    }
  };

  const stopRecording = async () => {
    if (!recording) return;
    setRecording(null);
    await recording.stopAndUnloadAsync();
    setAudioUri(recording.getURI());
  };

  const saveDraft = async () => {
    if (!placa.trim() && !audioUri) {
      alert("Aviso: Digite a Placa ou grave um áudio antes de salvar.");
      return;
    }

    const currentData = new Date().toLocaleString('pt-BR');
    
    let mapsLink = '';
    if (location) {
      mapsLink = `\nMAPA: https://www.google.com/maps/search/?api=1&query=${location.coords.latitude},${location.coords.longitude}`;
    }

    const textFormat = `PLACA: ${placa.toUpperCase()}
LOCAL EXATO: ${address}${mapsLink}
HORÁRIO: ${currentData}
OBSERVAÇÃO: ${observacao || 'Nenhuma'}`;

    const newNote = {
      id: Date.now().toString(),
      text: textFormat,
      audioUri: audioUri,
      createdAt: currentData
    };

    try {
      const savedNotes = await AsyncStorage.getItem('@agent_notes');
      let notesArray = [];
      if (savedNotes) notesArray = JSON.parse(savedNotes);
      notesArray.unshift(newNote);
      await AsyncStorage.setItem('@agent_notes', JSON.stringify(notesArray));
      
      // Visual Feedback
      setIsSaved(true);
      setTimeout(() => {
        navigation.goBack();
      }, 2000);

    } catch (e) {
      alert("Erro: Falha ao salvar rascunho.");
    }
  };

  if (isSaved) {
    return (
      <View style={styles.successContainer}>
        <Text style={styles.successIcon}>✅</Text>
        <Text style={styles.successText}>Salvo com Sucesso!</Text>
        <Text style={styles.successSubtext}>Enviado para o seu Bloco de Notas</Text>
      </View>
    );
  }

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

        <View style={styles.placaHeader}>
          <Text style={styles.label}>🚘 Placa do Veículo</Text>
          <TouchableOpacity onPress={openMasterPlaca}>
            <Text style={styles.verifyText}>🔍 Verificar Viatura</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.inputPlaca}
          placeholder="Ex: ABC1D23"
          placeholderTextColor="#64748b"
          value={placa}
          onChangeText={setPlaca}
          autoCapitalize="characters"
        />

        <Text style={styles.label}>📝 Observação ou Áudio</Text>
        
        {audioUri ? (
          <View style={styles.audioRecorded}>
            <Text style={styles.audioReadyText}>✅ Áudio Anexado</Text>
            <TouchableOpacity onPress={() => setAudioUri(null)}>
              <Text style={styles.removeAudioText}>Excluir Áudio</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity 
            style={[styles.recordBtn, recording ? styles.recordingActive : null]}
            onPress={recording ? stopRecording : startRecording}
          >
            <Text style={styles.recordBtnText}>
              {recording ? "⏹️ Parar Gravação" : "🎤 Gravar Relatório em Áudio"}
            </Text>
          </TouchableOpacity>
        )}

        <TextInput
          style={styles.inputObs}
          placeholder="Dite ou digite os detalhes da abordagem..."
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
  placaHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  label: { color: '#f8fafc', fontSize: 16, fontWeight: 'bold' },
  verifyText: { color: '#f59e0b', fontSize: 14, fontWeight: 'bold' },
  inputPlaca: { backgroundColor: '#1e293b', color: '#f8fafc', padding: 15, borderRadius: 8, fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, borderWidth: 1, borderColor: '#334155' },
  inputObs: { backgroundColor: '#1e293b', color: '#f8fafc', padding: 15, borderRadius: 8, fontSize: 16, minHeight: 100, textAlignVertical: 'top', marginBottom: 30, borderWidth: 1, borderColor: '#334155' },
  saveBtn: { backgroundColor: '#10b981', padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 40 },
  saveBtnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  
  recordBtn: { backgroundColor: '#334155', padding: 16, borderRadius: 8, alignItems: 'center', borderWidth: 1, borderColor: '#475569', marginBottom: 10 },
  recordingActive: { backgroundColor: '#ef4444', borderColor: '#b91c1c' },
  recordBtnText: { color: '#f8fafc', fontWeight: 'bold', fontSize: 16 },
  audioRecorded: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#166534', padding: 16, borderRadius: 8, marginBottom: 10 },
  audioReadyText: { color: '#fff', fontWeight: 'bold' },
  removeAudioText: { color: '#fca5a5', fontWeight: 'bold' },
  
  successContainer: { flex: 1, backgroundColor: '#064e3b', justifyContent: 'center', alignItems: 'center' },
  successIcon: { fontSize: 80, marginBottom: 20 },
  successText: { color: '#fff', fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  successSubtext: { color: '#a7f3d0', fontSize: 16 }
});
