import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ScrollView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import * as Clipboard from 'expo-clipboard';

export default function QuickDraftScreen() {
  const navigation = useNavigation();
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [address, setAddress] = useState('Buscando endereço...');
  const [placa, setPlaca] = useState('');
  const [observacao, setObservacao] = useState('');
  const [numeroResidencia, setNumeroResidencia] = useState('');
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

        let addressStr = '';

        try {
          const geocode = await Location.reverseGeocodeAsync({
            latitude: loc.coords.latitude,
            longitude: loc.coords.longitude
          });

          if (geocode && geocode.length > 0) {
            const { street, streetNumber, district, city } = geocode[0];
            if (street) {
              const numero = streetNumber ? `, ${streetNumber}` : '';
              const bairro = district ? ` - ${district}` : '';
              const cidade = city ? ` (${city})` : '';
              addressStr = `${street}${numero}${bairro}${cidade}`;
            }
          }
        } catch (e) {
          console.log('Expo Geocode failed, using fallback.');
        }

        // Se o Expo falhou (comum no Web), faz um fallback para o OpenStreetMap
        if (!addressStr) {
          try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${loc.coords.latitude}&lon=${loc.coords.longitude}&addressdetails=1`);
            const data = await response.json();
            if (data && data.address) {
              const rua = data.address.road || 'Rua desconhecida';
              const numero = data.address.house_number ? `, ${data.address.house_number}` : '';
              const bairro = data.address.suburb || data.address.neighbourhood ? ` - ${data.address.suburb || data.address.neighbourhood}` : '';
              const cidade = data.address.city || data.address.town || data.address.village ? ` (${data.address.city || data.address.town || data.address.village})` : '';
              addressStr = `${rua}${numero}${bairro}${cidade}`;
            }
          } catch (e) {
            console.log('OSM Geocode failed', e);
          }
        }

        if (addressStr) {
          setAddress(addressStr);
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

  const openPlateSearch = () => {
    navigation.navigate('PlateSearch' as never);
  };

  const copyPlate = async () => {
    if (placa) {
      await Clipboard.setStringAsync(placa);
      alert('Placa copiada para a área de transferência!');
    }
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

  const handlePlacaChange = (text: string) => {
    let raw = text.toUpperCase().replace(/[^A-Z0-9]/g, '');
    let formatted = '';

    // Aplica a máscara estrita enquanto o usuário digita
    for (let i = 0; i < raw.length; i++) {
      const char = raw[i];
      if (i < 3) {
        // Posição 1, 2, 3: Apenas Letras
        if (/[A-Z]/.test(char)) formatted += char;
        else break;
      } else if (i === 3) {
        // Posição 4: Apenas Números
        if (/[0-9]/.test(char)) formatted += char;
        else break;
      } else if (i === 4) {
        // Posição 5: Letra (Mercosul) ou Número (Antiga)
        if (/[A-Z0-9]/.test(char)) formatted += char;
        else break;
      } else if (i === 5 || i === 6) {
        // Posição 6, 7: Apenas Números
        if (/[0-9]/.test(char)) formatted += char;
        else break;
      }
    }
    
    setPlaca(formatted);
  };

  const saveDraft = async () => {
    if (!placa.trim() && !audioUri) {
      alert("Aviso: Digite a Placa ou grave um áudio antes de salvar.");
      return;
    }
    
    if (!observacao.trim() && !audioUri) {
      alert("Aviso: O campo de Observação é obrigatório para registrar a infração. Descreva a situação ou grave um áudio.");
      return;
    }

    if (placa.trim()) {
      // Regex para validar placa Antiga (ABC1234) ou Mercosul (ABC1D23)
      const placaRegex = /^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/;
      if (!placaRegex.test(placa)) {
        alert("A placa digitada é inválida. O padrão aceito é 3 letras e 4 números/letras (ex: ABC1234 ou ABC1D23).");
        return;
      }
    }

    const currentData = new Date().toLocaleString('pt-BR');
    
    let mapsLink = '';
    if (location) {
      mapsLink = `\nMAPA: https://www.google.com/maps/search/?api=1&query=${location.coords.latitude},${location.coords.longitude}`;
    }

    const textFormat = `PLACA: ${placa.toUpperCase()}
LOCAL EXATO: ${address}, N° ${numeroResidencia.trim() ? numeroResidencia : 'S/N'}${mapsLink}
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
          <Text style={styles.gpsSubTitle}>Pode tocar e digitar o número da rua se faltar</Text>
          <TextInput
             style={styles.gpsInput}
             value={loading ? 'Sincronizando GPS...' : address}
             onChangeText={setAddress}
             multiline
             editable={!loading}
          />
          <Text style={styles.labelSmall}>Nº da Residência / Ponto de Referência</Text>
          <TextInput
             style={styles.gpsInput}
             value={numeroResidencia}
             onChangeText={(text) => setNumeroResidencia(text.replace(/[^0-9]/g, ''))}
             placeholder="S/N"
             placeholderTextColor="#64748b"
             keyboardType="numeric"
          />
          <TouchableOpacity style={styles.mapBtn} onPress={openMap} disabled={loading || !location}>
            <Text style={styles.mapBtnText}>📍 Abrir no Mapa</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.placaHeader}>
          <Text style={styles.label}>🚘 Placa do Veículo</Text>
          <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
            {placa.length > 0 && (
              <TouchableOpacity onPress={copyPlate}>
                <Text style={styles.copyText}>📋 Copiar</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={openPlateSearch}>
              <Text style={styles.verifyText}>🔍 Verificar Viatura</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TextInput
          style={styles.inputPlaca}
          placeholder="Ex: ABC1D23"
          placeholderTextColor="#64748b"
          value={placa}
          onChangeText={handlePlacaChange}
          autoCapitalize="characters"
          maxLength={7}
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
  gpsTitle: { color: '#f8fafc', fontSize: 16, fontWeight: 'bold', marginBottom: 2 },
  gpsSubTitle: { color: '#64748b', fontSize: 12, marginBottom: 10 },
  labelSmall: { color: '#e2e8f0', fontSize: 14, fontWeight: 'bold', marginBottom: 6 },
  gpsText: { color: '#94a3b8', fontSize: 14, marginBottom: 15 },
  gpsInput: { color: '#e2e8f0', fontSize: 14, marginBottom: 15, backgroundColor: '#0f172a', padding: 10, borderRadius: 6, minHeight: 45, textAlignVertical: 'center', borderWidth: 1, borderColor: '#334155' },
  mapBtn: { backgroundColor: '#3b82f6', padding: 10, borderRadius: 8, alignItems: 'center' },
  mapBtnText: { color: '#fff', fontWeight: 'bold' },
  placaHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  label: { color: '#f8fafc', fontSize: 16, fontWeight: 'bold' },
  copyText: { color: '#10b981', fontSize: 14, fontWeight: 'bold' },
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
