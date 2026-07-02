import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { collection, query, where, onSnapshot, orderBy, doc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../services/firebase';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ChatList'>;

export default function ChatListScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp>();
  const currentUser = auth.currentUser;
  const isAdmin = currentUser?.email === 'acerola106@gmail.com';
  
  const [chats, setChats] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewAll, setViewAll] = useState(false); // Only used if admin

  useEffect(() => {
    if (!currentUser) return;

    let q;
    if (isAdmin && viewAll) {
      q = query(collection(db, 'chats'), orderBy('lastUpdated', 'desc'));
    } else {
      q = query(
        collection(db, 'chats'),
        where('participants', 'array-contains', currentUser.uid),
        orderBy('lastUpdated', 'desc')
      );
    }

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const chatsList: any[] = [];
      snapshot.forEach(doc => {
        chatsList.push({ id: doc.id, ...doc.data() });
      });
      setChats(chatsList);
      setLoading(false);
    }, (error) => {
      console.error(error);
      Alert.alert("Erro", "Falha ao carregar as conversas.");
      setLoading(false);
    });

    return () => unsubscribe();
  }, [currentUser, viewAll, isAdmin]);

  const getChatName = (item: any) => {
    if (item.type === 'group') return item.name || 'Grupo sem nome';
    
    if (item.participantNames) {
      const otherUserIds = item.participants.filter((p: string) => p !== currentUser?.uid);
      if (otherUserIds.length > 0) {
        return item.participantNames[otherUserIds[0]] || 'Usuário Desconhecido';
      }
    }
    return 'Conversa Direta';
  };

  const handleDeleteChat = (chatId: string) => {
    Alert.alert(
      "Excluir Chat",
      "Tem certeza que deseja apagar todo este chat? Isso não poderá ser desfeito.",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Excluir", 
          style: "destructive",
          onPress: async () => {
            try {
              await deleteDoc(doc(db, 'chats', chatId));
            } catch (error) {
              Alert.alert("Erro", "Falha ao excluir o chat.");
            }
          }
        }
      ]
    );
  };

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity 
      style={styles.chatCard}
      onPress={() => navigation.navigate('ChatRoom', { chatId: item.id, chatName: getChatName(item) })}
    >
      <View style={styles.chatIcon}>
        <Text style={styles.iconText}>{item.type === 'group' ? '👥' : '👤'}</Text>
      </View>
      <View style={styles.chatInfo}>
        <Text style={styles.chatName}>{getChatName(item)}</Text>
        <Text style={styles.lastMessage} numberOfLines={1}>
          {item.lastMessage || 'Nova conversa...'}
        </Text>
      </View>
      {isAdmin && (
        <TouchableOpacity style={styles.deleteBtn} onPress={() => handleDeleteChat(item.id)}>
          <Text style={{color: '#ef4444', fontWeight: 'bold'}}>🗑️</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backBtnText}>⬅️ Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Comunicação</Text>
        <View style={{ width: 60 }} />
      </View>

      {isAdmin && (
        <View style={styles.adminToggleContainer}>
          <TouchableOpacity 
            style={[styles.toggleBtn, !viewAll && styles.toggleActive]} 
            onPress={() => setViewAll(false)}
          >
            <Text style={!viewAll ? styles.toggleTextActive : styles.toggleText}>Meus Chats</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.toggleBtn, viewAll && styles.toggleActive]} 
            onPress={() => setViewAll(true)}
          >
            <Text style={viewAll ? styles.toggleTextActive : styles.toggleText}>Todos (Admin)</Text>
          </TouchableOpacity>
        </View>
      )}

      {loading ? (
        <ActivityIndicator size="large" color="#f59e0b" style={{ marginTop: 50 }} />
      ) : (
        <FlatList
          data={chats}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ padding: 20 }}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Nenhuma conversa encontrada.</Text>
          }
        />
      )}

      <TouchableOpacity 
        style={styles.fab}
        onPress={() => navigation.navigate('NewChat')}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
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
  headerTitle: { color: '#f8fafc', fontSize: 20, fontWeight: 'bold' },
  
  adminToggleContainer: {
    flexDirection: 'row', backgroundColor: '#1e293b', padding: 10, justifyContent: 'center'
  },
  toggleBtn: {
    paddingVertical: 8, paddingHorizontal: 20, borderRadius: 20, marginHorizontal: 5,
    borderWidth: 1, borderColor: '#334155'
  },
  toggleActive: { backgroundColor: '#3b82f6', borderColor: '#3b82f6' },
  toggleText: { color: '#94a3b8', fontWeight: 'bold' },
  toggleTextActive: { color: '#fff', fontWeight: 'bold' },

  chatCard: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#1e293b',
    padding: 15, borderRadius: 12, marginBottom: 12, borderWidth: 1, borderColor: '#334155'
  },
  chatIcon: {
    width: 50, height: 50, borderRadius: 25, backgroundColor: '#334155',
    justifyContent: 'center', alignItems: 'center', marginRight: 15
  },
  iconText: { fontSize: 24 },
  chatInfo: { flex: 1 },
  chatName: { color: '#f8fafc', fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  lastMessage: { color: '#94a3b8', fontSize: 14 },
  
  deleteBtn: { padding: 10 },
  
  emptyText: { color: '#64748b', textAlign: 'center', marginTop: 40, fontSize: 16 },
  
  fab: {
    position: 'absolute', bottom: 30, right: 30,
    width: 60, height: 60, borderRadius: 30, backgroundColor: '#10b981',
    justifyContent: 'center', alignItems: 'center',
    elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3
  },
  fabText: { color: '#fff', fontSize: 32, fontWeight: 'bold', marginTop: -4 }
});
