import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, ActivityIndicator, Alert, Platform, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, auth, storage } from '../services/firebase';
import { useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import * as ImagePicker from 'expo-image-picker';
import { Audio } from 'expo-av';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ChatRoom'>;

export default function ChatRoomScreen() {
  const insets = useSafeAreaInsets();
  const route = useRoute<any>();
  const navigation = useNavigation<NavigationProp>();
  const { chatId, chatName } = route.params;
  const currentUser = auth.currentUser;
  const isAdmin = currentUser?.email === 'acerola106@gmail.com';

  const [messages, setMessages] = useState<any[]>([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);
  
  // Audio state
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const showError = (msg: string) => {
    setErrorMsg(msg);
    setTimeout(() => setErrorMsg(null), 5000); // clear after 5s
  };

  useEffect(() => {
    const q = query(
      collection(db, 'chats', chatId, 'messages'),
      orderBy('timestamp', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs: any[] = [];
      snapshot.forEach(docSnap => {
        msgs.push({ id: docSnap.id, ...docSnap.data() });
      });
      setMessages(msgs);
      setLoading(false);
    });

    return () => {
      unsubscribe();
      if (sound) sound.unloadAsync();
    };
  }, [chatId]);

  const sendMessage = async (type: 'text' | 'image' | 'audio', content: string) => {
    try {
      await addDoc(collection(db, 'chats', chatId, 'messages'), {
        senderId: currentUser?.uid,
        senderName: currentUser?.displayName || 'Você',
        type,
        content,
        timestamp: serverTimestamp()
      });

      let lastMsgText = '';
      if (type === 'text') lastMsgText = content;
      else if (type === 'image') lastMsgText = '📷 Foto';
      else if (type === 'audio') lastMsgText = '🎤 Áudio';

      await updateDoc(doc(db, 'chats', chatId), {
        lastMessage: lastMsgText,
        lastUpdated: serverTimestamp()
      });
    } catch (e: any) {
      console.error(e);
      showError('Falha ao enviar mensagem: ' + e.message);
    }
  };

  const handleSendText = () => {
    if (!text.trim()) return;
    sendMessage('text', text.trim());
    setText('');
  };

  const mediaRecorderRef = useRef<any>(null);
  const audioChunksRef = useRef<any[]>([]);

  const uploadFile = async (uriOrBlob: string | Blob, type: 'image' | 'audio', isWebBlob = false) => {
    try {
      let blob: Blob;
      let ext = type === 'image' ? 'jpg' : 'm4a';
      if (isWebBlob) {
        blob = uriOrBlob as Blob;
        ext = 'webm';
      } else {
        const response = await fetch(uriOrBlob as string);
        blob = await response.blob();
      }
      const fileRef = ref(storage, `chats/${chatId}/${Date.now()}.${ext}`);
      await uploadBytes(fileRef, blob);
      return await getDownloadURL(fileRef);
    } catch (e: any) {
      console.error("Upload erro:", e);
      throw e;
    }
  };

  const handlePickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.7,
      });
      if (!result.canceled && result.assets && result.assets.length > 0) {
        showError('Enviando foto, aguarde...');
        const url = await uploadFile(result.assets[0].uri, 'image');
        sendMessage('image', url);
        showError('Foto enviada!');
      }
    } catch (e: any) {
      showError('Erro ao enviar imagem: ' + e.message);
    }
  };

  const startRecording = async () => {
    if (Platform.OS === 'web') {
      try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          showError('Seu navegador não suporta gravação de áudio.');
          return;
        }
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new (window as any).MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        audioChunksRef.current = [];

        mediaRecorder.ondataavailable = (e: any) => {
          if (e.data.size > 0) {
            audioChunksRef.current.push(e.data);
          }
        };

        mediaRecorder.onstop = async () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: mediaRecorder.mimeType || 'audio/webm' });
          try {
            showError('Enviando áudio, aguarde...');
            const url = await uploadFile(audioBlob, 'audio', true);
            sendMessage('audio', url);
            showError('Áudio enviado!');
          } catch (e: any) {
             showError('Falha ao enviar áudio: ' + e.message);
          }
          stream.getTracks().forEach((track: any) => track.stop());
        };

        mediaRecorder.start();
        setIsRecording(true);
      } catch (err: any) {
        console.error('Failed to start web recording', err);
        showError('Não foi possível acessar o microfone. Libere a permissão. ' + err.message);
      }
      return;
    }

    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({ allowsRecordingIOS: true, playsInSilentModeIOS: true });
      const { recording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
      setRecording(recording);
      setIsRecording(true);
    } catch (err: any) {
      console.error('Failed to start recording', err);
      showError('Não foi possível iniciar a gravação: ' + err.message);
    }
  };

  const stopRecording = async () => {
    setIsRecording(false);
    
    if (Platform.OS === 'web') {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
      return;
    }

    if (!recording) return;
    try {
      showError('Enviando áudio...');
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setRecording(null);
      if (uri) {
        const url = await uploadFile(uri, 'audio');
        sendMessage('audio', url);
      }
    } catch (e: any) {
      console.error(e);
      showError('Falha ao processar o áudio: ' + e.message);
    }
  };

  const playAudio = async (url: string) => {
    if (Platform.OS === 'web') {
      try {
        const audio = new (window as any).Audio(url);
        setPlayingAudio(url);
        audio.play();
        audio.onended = () => setPlayingAudio(null);
        return;
      } catch(e) { console.error(e); }
    }

    try {
      if (sound) {
        await sound.unloadAsync();
      }
      setPlayingAudio(url);
      const { sound: newSound } = await Audio.Sound.createAsync({ uri: url });
      setSound(newSound);
      await newSound.playAsync();
      newSound.setOnPlaybackStatusUpdate((status: any) => {
        if (status.didJustFinish) {
          setPlayingAudio(null);
        }
      });
    } catch (e) {
      console.error(e);
      setPlayingAudio(null);
    }
  };

  const handleDeleteMessage = async (msgId: string) => {
    if (!isAdmin) return;
    try {
      showError('Excluindo...');
      await deleteDoc(doc(db, 'chats', chatId, 'messages', msgId));
      showError('Mensagem excluída.');
    } catch (e: any) {
      showError("Não foi possível excluir: " + e.message);
    }
  };

  const renderMessage = ({ item }: { item: any }) => {
    const isMe = item.senderId === currentUser?.uid;
    return (
      <View style={[styles.msgContainer, isMe ? styles.myMsgContainer : styles.otherMsgContainer]}>
        {!isMe && <Text style={styles.senderName}>{item.senderName}</Text>}
        
        {item.type === 'text' && (
          <Text style={styles.msgText}>{item.content}</Text>
        )}
        
        {item.type === 'image' && (
          <Image source={{ uri: item.content }} style={styles.msgImage} resizeMode="cover" />
        )}

        {item.type === 'audio' && (
          <TouchableOpacity 
            style={styles.audioBtn} 
            onPress={() => playAudio(item.content)}
          >
            <Text style={styles.audioText}>
              {playingAudio === item.content ? '🔊 Tocando...' : '▶️ Ouvir Áudio'}
            </Text>
          </TouchableOpacity>
        )}

        <View style={styles.msgFooter}>
          <Text style={styles.timeText}>
            {item.timestamp ? new Date(item.timestamp.toDate()).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : '...'}
          </Text>
          
          {isAdmin && (
            <TouchableOpacity style={styles.delMsgBtn} onPress={() => handleDeleteMessage(item.id)}>
              <Text style={styles.delMsgText}>🗑️</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backBtnText}>⬅️ Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>{chatName}</Text>
        <View style={{ width: 60 }} />
      </View>

      {errorMsg && (
        <View style={styles.errorBanner}>
          <Text style={styles.errorBannerText}>{errorMsg}</Text>
        </View>
      )}

      {loading ? (
        <ActivityIndicator size="large" color="#f59e0b" style={{ marginTop: 50, flex: 1 }} />
      ) : (
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          inverted
          contentContainerStyle={{ padding: 15 }}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Mande a primeira mensagem!</Text>
          }
        />
      )}

      <View style={styles.inputArea}>
        <TouchableOpacity style={styles.attachBtn} onPress={handlePickImage}>
          <Text style={{ fontSize: 24, color: '#94a3b8' }}>📎</Text>
        </TouchableOpacity>
        
        <TextInput
          style={styles.textInput}
          placeholder="Digite sua mensagem..."
          placeholderTextColor="#64748b"
          value={text}
          onChangeText={setText}
          multiline
        />
        
        <TouchableOpacity 
          style={[styles.sendBtn, isRecording && { backgroundColor: '#ef4444' }]} 
          onPress={() => {
            if (text.trim()) {
              handleSendText();
            } else {
              if (isRecording) {
                stopRecording();
              } else {
                startRecording();
              }
            }
          }}
        >
          <Text style={{ color: '#fff', fontSize: 18 }}>
            {text.trim() ? '➤' : (isRecording ? '⏹️' : '🎤')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    padding: 20, backgroundColor: '#1e293b', borderBottomWidth: 1, borderBottomColor: '#334155'
  },
  backBtn: { padding: 5 },
  backBtnText: { color: '#60a5fa', fontSize: 16, fontWeight: 'bold' },
  headerTitle: { color: '#f8fafc', fontSize: 18, fontWeight: 'bold', flex: 1, textAlign: 'center' },
  
  errorBanner: {
    backgroundColor: '#ef4444',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100
  },
  errorBannerText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  emptyText: { color: '#64748b', textAlign: 'center', marginTop: 40, transform: [{ scaleY: -1 }] },

  msgContainer: {
    maxWidth: '80%', padding: 10, borderRadius: 12, marginBottom: 10,
  },
  myMsgContainer: {
    alignSelf: 'flex-end', backgroundColor: '#065f46',
    borderBottomRightRadius: 0
  },
  otherMsgContainer: {
    alignSelf: 'flex-start', backgroundColor: '#1e293b',
    borderBottomLeftRadius: 0, borderWidth: 1, borderColor: '#334155'
  },
  
  senderName: { color: '#fbbf24', fontSize: 12, fontWeight: 'bold', marginBottom: 5 },
  msgText: { color: '#f8fafc', fontSize: 15 },
  msgImage: { width: 200, height: 200, borderRadius: 8, marginBottom: 5 },
  
  audioBtn: { backgroundColor: '#10b981', padding: 10, borderRadius: 20, alignItems: 'center' },
  audioText: { color: '#0f172a', fontWeight: 'bold' },

  msgFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 5
  },
  timeText: { color: '#94a3b8', fontSize: 10 },
  
  delMsgBtn: { 
    marginLeft: 10,
    padding: 2
  },
  delMsgText: { fontSize: 14 },

  inputArea: {
    flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#1e293b',
    borderTopWidth: 1, borderTopColor: '#334155',
    zIndex: 10
  },
  attachBtn: { padding: 10 },
  textInput: {
    flex: 1, backgroundColor: '#0f172a', color: '#f8fafc', padding: 12, borderRadius: 20,
    maxHeight: 100, borderWidth: 1, borderColor: '#334155', marginHorizontal: 10
  },
  sendBtn: {
    width: 50, height: 50, borderRadius: 25, backgroundColor: '#10b981',
    justifyContent: 'center', alignItems: 'center', zIndex: 10
  }
});
