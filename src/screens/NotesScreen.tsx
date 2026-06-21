import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, Alert, Modal, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

interface Note {
  id: string;
  text: string;
  audioUri: string | null;
  createdAt: string;
}

export default function NotesScreen() {
  const navigation = useNavigation();
  const [notes, setNotes] = useState<Note[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  
  // Audio state
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [audioUri, setAudioUri] = useState<string | null>(null);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    loadNotes();
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const loadNotes = async () => {
    try {
      const stored = await AsyncStorage.getItem('@agent_notes');
      if (stored) setNotes(JSON.parse(stored));
    } catch (e) {
      console.error(e);
    }
  };

  const saveNotes = async (newNotes: Note[]) => {
    try {
      await AsyncStorage.setItem('@agent_notes', JSON.stringify(newNotes));
      setNotes(newNotes);
    } catch (e) {
      Alert.alert("Erro", "Não foi possível salvar a anotação.");
    }
  };

  const openEditModal = (note: Note) => {
    setEditingNoteId(note.id);
    setCurrentText(note.text);
    setAudioUri(note.audioUri);
    setModalVisible(true);
  };

  const openNewModal = () => {
    setEditingNoteId(null);
    setCurrentText('');
    setAudioUri(null);
    setModalVisible(true);
  };

  const handleSaveNote = () => {
    if (!currentText.trim() && !audioUri) {
      Alert.alert("Aviso", "A anotação não pode estar vazia.");
      return;
    }

    let updatedNotes;

    if (editingNoteId) {
      updatedNotes = notes.map(n => {
        if (n.id === editingNoteId) {
          return { ...n, text: currentText.trim(), audioUri: audioUri };
        }
        return n;
      });
    } else {
      const newNote: Note = {
        id: Date.now().toString(),
        text: currentText.trim(),
        audioUri: audioUri,
        createdAt: new Date().toLocaleString('pt-BR')
      };
      updatedNotes = [newNote, ...notes];
    }

    saveNotes(updatedNotes);
    
    // Reset state
    setCurrentText('');
    setAudioUri(null);
    setEditingNoteId(null);
    setModalVisible(false);
  };

  const handleDeleteNote = (id: string) => {
    if (Platform.OS === 'web') {
      if (window.confirm("Deseja realmente apagar esta anotação?")) {
        const updated = notes.filter(n => n.id !== id);
        saveNotes(updated);
      }
    } else {
      Alert.alert("Apagar", "Deseja realmente apagar esta anotação?", [
        { text: "Cancelar", style: "cancel" },
        { text: "Apagar", style: "destructive", onPress: () => {
            const updated = notes.filter(n => n.id !== id);
            saveNotes(updated);
        }}
      ]);
    }
  };

  // Áudio Functions
  const startRecording = async () => {
    try {
      const permission = await Audio.requestPermissionsAsync();
      if (permission.status !== 'granted') {
        Alert.alert("Permissão negada", "Precisamos de acesso ao microfone para gravar o áudio.");
        return;
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
    } catch (err) {
      console.error('Falha ao iniciar gravação', err);
    }
  };

  const stopRecording = async () => {
    if (!recording) return;
    setRecording(null);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    setAudioUri(uri);
  };

  const playSound = async (uri: string) => {
    try {
      if (sound) {
        await sound.unloadAsync();
      }
      const { sound: newSound } = await Audio.Sound.createAsync({ uri });
      setSound(newSound);
      setIsPlaying(true);
      await newSound.playAsync();
      
      newSound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.didJustFinish) {
          setIsPlaying(false);
        }
      });
    } catch (error) {
      console.log('Error playing sound', error);
      Alert.alert("Erro", "Não foi possível reproduzir este áudio.");
    }
  };

  const stopSound = async () => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
    }
  };

  const renderNote = ({ item }: { item: Note }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.dateText}>{item.createdAt}</Text>
        <View style={{ flexDirection: 'row', gap: 15 }}>
          <TouchableOpacity onPress={() => openEditModal(item)}>
            <Text style={styles.actionIcon}>✏️</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDeleteNote(item.id)}>
            <Text style={styles.actionIcon}>🗑️</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {item.text ? (
        <Text style={styles.noteText}>{item.text}</Text>
      ) : null}

      {item.audioUri ? (
        <TouchableOpacity 
          style={styles.playBtn}
          onPress={() => isPlaying ? stopSound() : playSound(item.audioUri as string)}
        >
          <Text style={styles.playBtnText}>{isPlaying ? "⏹️ Parar Áudio" : "▶️ Ouvir Áudio da Abordagem"}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>📝 Bloco de Notas</Text>
        <View style={{ width: 60 }} />
      </View>

      <FlatList
        data={notes}
        keyExtractor={item => item.id}
        renderItem={renderNote}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhuma anotação salva.</Text>}
      />

      <TouchableOpacity style={styles.fab} onPress={openNewModal}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{editingNoteId ? "Editar Anotação" : "Nova Anotação"}</Text>
              <TouchableOpacity onPress={() => {
                setModalVisible(false);
                setEditingNoteId(null);
              }}>
                <Text style={styles.closeIcon}>✖</Text>
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Digite aqui (ou use o microfone do teclado)..."
              placeholderTextColor="#64748b"
              multiline
              value={currentText}
              onChangeText={setCurrentText}
            />

            <View style={styles.audioSection}>
              {audioUri ? (
                <View style={styles.audioRecorded}>
                  <Text style={styles.audioReadyText}>✅ Áudio Anexado</Text>
                  <TouchableOpacity onPress={() => setAudioUri(null)}>
                    <Text style={styles.removeAudioText}>Remover</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity 
                  style={[styles.recordBtn, recording ? styles.recordingActive : null]}
                  onPress={recording ? stopRecording : startRecording}
                  onLongPress={startRecording}
                  delayLongPress={200}
                >
                  <Text style={styles.recordBtnText}>
                    {recording ? "⏹️ Parar Gravação" : "🎤 Gravar Áudio (Opcional)"}
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            <TouchableOpacity style={styles.saveBtn} onPress={handleSaveNote}>
              <Text style={styles.saveBtnText}>Salvar Anotação</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  list: { padding: 16 },
  card: { backgroundColor: '#1e293b', padding: 16, borderRadius: 10, marginBottom: 12, borderWidth: 1, borderColor: '#334155' },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  dateText: { color: '#94a3b8', fontSize: 12 },
  actionIcon: { fontSize: 18, marginLeft: 5 },
  noteText: { color: '#f8fafc', fontSize: 16, lineHeight: 24 },
  playBtn: { marginTop: 15, backgroundColor: '#3b82f6', padding: 10, borderRadius: 6, alignItems: 'center' },
  playBtnText: { color: '#fff', fontWeight: 'bold' },
  emptyText: { color: '#64748b', textAlign: 'center', marginTop: 50, fontSize: 16 },
  fab: {
    position: 'absolute', bottom: 30, right: 30, backgroundColor: '#f59e0b',
    width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center',
    elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 3
  },
  fabText: { color: '#fff', fontSize: 32, fontWeight: 'bold', marginTop: -2 },
  
  // Modal Styles
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#1e293b', padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, height: '80%' },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  modalTitle: { color: '#f8fafc', fontSize: 20, fontWeight: 'bold' },
  closeIcon: { color: '#94a3b8', fontSize: 24, padding: 5 },
  input: {
    backgroundColor: '#0f172a', color: '#f8fafc', padding: 16, borderRadius: 10,
    fontSize: 16, height: 200, textAlignVertical: 'top', borderWidth: 1, borderColor: '#334155'
  },
  audioSection: { marginVertical: 20 },
  recordBtn: { backgroundColor: '#334155', padding: 16, borderRadius: 10, alignItems: 'center', borderWidth: 1, borderColor: '#475569' },
  recordingActive: { backgroundColor: '#ef4444', borderColor: '#b91c1c' },
  recordBtnText: { color: '#f8fafc', fontWeight: 'bold', fontSize: 16 },
  audioRecorded: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#166534', padding: 16, borderRadius: 10 },
  audioReadyText: { color: '#fff', fontWeight: 'bold' },
  removeAudioText: { color: '#fca5a5', fontWeight: 'bold' },
  saveBtn: { backgroundColor: '#3b82f6', padding: 16, borderRadius: 10, alignItems: 'center' },
  saveBtnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});
