import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, Alert, TextInput } from 'react-native';
import { collection, getDocs, addDoc, serverTimestamp, query, where } from 'firebase/firestore';
import { db, auth } from '../services/firebase';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'NewChat'>;

export default function NewChatScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp>();
  const currentUser = auth.currentUser;
  
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUsers, setSelectedUsers] = useState<any[]>([]);
  const [groupName, setGroupName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      // Pega todos os usuários ativos
      const q = query(collection(db, "users"), where("status", "==", "ativo"));
      const querySnapshot = await getDocs(q);
      const usersList: any[] = [];
      querySnapshot.forEach((docSnap) => {
        if (docSnap.id !== currentUser?.uid) {
          usersList.push({ id: docSnap.id, ...docSnap.data() });
        }
      });
      setUsers(usersList);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os usuários.");
    } finally {
      setLoading(false);
    }
  };

  const toggleUser = (user: any) => {
    const isSelected = selectedUsers.find(u => u.id === user.id);
    if (isSelected) {
      setSelectedUsers(selectedUsers.filter(u => u.id !== user.id));
    } else {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  const handleCreateChat = async () => {
    if (selectedUsers.length === 0) {
      Alert.alert("Atenção", "Selecione pelo menos um usuário.");
      return;
    }
    const isGroup = selectedUsers.length > 1;
    if (isGroup && !groupName.trim()) {
      Alert.alert("Atenção", "Digite um nome para o grupo.");
      return;
    }

    setCreating(true);
    try {
      const participants = [currentUser?.uid, ...selectedUsers.map(u => u.id)];
      const participantNames: any = {
        [currentUser!.uid]: currentUser?.displayName || 'Você'
      };
      selectedUsers.forEach(u => {
        participantNames[u.id] = u.name;
      });

      // Se for conversa direta (1 pessoa), primeiro checamos se já existe um chat entre os dois
      if (!isGroup) {
        const otherUserId = selectedUsers[0].id;
        const chatsRef = collection(db, 'chats');
        const qDirect = query(
          chatsRef, 
          where('type', '==', 'direct'), 
          where('participants', 'array-contains', currentUser?.uid)
        );
        const snapshot = await getDocs(qDirect);
        let existingChatId = null;
        snapshot.forEach(doc => {
          const data = doc.data();
          if (data.participants.includes(otherUserId) && data.participants.length === 2) {
            existingChatId = doc.id;
          }
        });

        if (existingChatId) {
          setCreating(false);
          navigation.replace('ChatRoom', { chatId: existingChatId, chatName: selectedUsers[0].name });
          return;
        }
      }

      // Criar novo chat
      const newChatData = {
        type: isGroup ? 'group' : 'direct',
        name: isGroup ? groupName.trim() : '',
        participants,
        participantNames,
        createdBy: currentUser?.uid,
        admins: isGroup ? [currentUser?.uid] : [],
        lastUpdated: serverTimestamp(),
        lastMessage: ''
      };

      const docRef = await addDoc(collection(db, 'chats'), newChatData);
      
      const chatName = isGroup ? groupName.trim() : selectedUsers[0].name;
      
      setCreating(false);
      navigation.replace('ChatRoom', { chatId: docRef.id, chatName });

    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Falha ao criar conversa.");
      setCreating(false);
    }
  };

  const filteredUsers = users.filter(u => 
    u.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
    u.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderUser = ({ item }: { item: any }) => {
    const isSelected = !!selectedUsers.find(u => u.id === item.id);
    return (
      <TouchableOpacity 
        style={[styles.userCard, isSelected && styles.userCardSelected]}
        onPress={() => toggleUser(item)}
      >
        <View style={[styles.avatar, isSelected && { backgroundColor: '#10b981' }]}>
          <Text style={styles.avatarText}>{item.name ? item.name[0].toUpperCase() : 'U'}</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.userEmail}>{item.email}</Text>
        </View>
        {isSelected && <Text style={{ fontSize: 18 }}>✅</Text>}
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backBtnText}>⬅️ Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Nova Conversa</Text>
        <View style={{ width: 60 }} />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar contatos..."
          placeholderTextColor="#64748b"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {selectedUsers.length > 1 && (
        <View style={styles.groupNameContainer}>
          <TextInput
            style={styles.groupInput}
            placeholder="Nome do Grupo"
            placeholderTextColor="#64748b"
            value={groupName}
            onChangeText={setGroupName}
          />
        </View>
      )}

      {loading ? (
        <ActivityIndicator size="large" color="#f59e0b" style={{ marginTop: 50 }} />
      ) : (
        <FlatList
          data={filteredUsers}
          keyExtractor={(item) => item.id}
          renderItem={renderUser}
          contentContainerStyle={{ padding: 20 }}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Nenhum usuário encontrado.</Text>
          }
        />
      )}

      {selectedUsers.length > 0 && (
        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.createBtn}
            onPress={handleCreateChat}
            disabled={creating}
          >
            {creating ? (
              <ActivityIndicator color="#0f172a" />
            ) : (
              <Text style={styles.createBtnText}>
                {selectedUsers.length > 1 ? 'Criar Grupo' : 'Iniciar Conversa'}
              </Text>
            )}
          </TouchableOpacity>
        </View>
      )}
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
  
  searchContainer: { padding: 15, backgroundColor: '#1e293b' },
  searchInput: {
    backgroundColor: '#0f172a', color: '#f8fafc', padding: 12, borderRadius: 8,
    borderWidth: 1, borderColor: '#334155'
  },

  groupNameContainer: { padding: 15, paddingTop: 0, backgroundColor: '#1e293b' },
  groupInput: {
    backgroundColor: '#0f172a', color: '#f59e0b', padding: 12, borderRadius: 8,
    borderWidth: 1, borderColor: '#f59e0b', fontWeight: 'bold'
  },

  userCard: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#1e293b',
    padding: 15, borderRadius: 12, marginBottom: 12, borderWidth: 1, borderColor: '#334155'
  },
  userCardSelected: { borderColor: '#10b981', backgroundColor: '#1e293b' },
  
  avatar: {
    width: 40, height: 40, borderRadius: 20, backgroundColor: '#3b82f6',
    justifyContent: 'center', alignItems: 'center', marginRight: 15
  },
  avatarText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  userInfo: { flex: 1 },
  userName: { color: '#f8fafc', fontSize: 16, fontWeight: 'bold' },
  userEmail: { color: '#94a3b8', fontSize: 13 },

  emptyText: { color: '#64748b', textAlign: 'center', marginTop: 40 },

  footer: {
    padding: 20, backgroundColor: '#1e293b', borderTopWidth: 1, borderTopColor: '#334155'
  },
  createBtn: {
    backgroundColor: '#10b981', padding: 15, borderRadius: 8, alignItems: 'center'
  },
  createBtnText: { color: '#0f172a', fontSize: 16, fontWeight: 'bold' }
});
