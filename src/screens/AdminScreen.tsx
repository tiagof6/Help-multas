import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, Alert, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { collection, getDocs, doc, updateDoc, setDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { seedInfractionsToFirebase } from '../data/seedFirebase';

import { useNavigation } from '@react-navigation/native';
import changelogData from '../data/changelog.json';

export default function AdminScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [users, setUsers] = useState<any[]>([]);
  const [drafts, setDrafts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<'users' | 'drafts' | 'versions'>('users');
  const [pushMessage, setPushMessage] = useState('');
  const [pushError, setPushError] = useState(false);
  const [downloadUrlInput, setDownloadUrlInput] = useState('');

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersList: any[] = [];
      querySnapshot.forEach((docSnap) => {
        usersList.push({ id: docSnap.id, ...docSnap.data() });
      });
      setUsers(usersList);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível carregar os usuários.");
    } finally {
      setLoading(false);
    }
  };

  const fetchDrafts = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "infractions_drafts"));
      const draftsList: any[] = [];
      querySnapshot.forEach((docSnap) => {
        draftsList.push({ id: docSnap.id, ...docSnap.data() });
      });
      setDrafts(draftsList);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível carregar os rascunhos.");
    } finally {
      setLoading(false);
    }
  };

  const fetchConfig = async () => {
    try {
      const configSnap = await getDoc(doc(db, 'settings', 'appConfig'));
      if (configSnap.exists()) {
        setDownloadUrlInput(configSnap.data().downloadUrl || '');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (view === 'users') fetchUsers();
    else if (view === 'drafts') fetchDrafts();
    else if (view === 'versions') fetchConfig();
  }, [view]);

  const changeStatus = async (userId: string, newStatus: string) => {
    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, { status: newStatus });
      setUsers(users.map(u => u.id === userId ? { ...u, status: newStatus } : u));
    } catch (error) {
      Alert.alert("Erro", "Falha ao atualizar o status do usuário.");
    }
  };

  const handleSeed = async () => {
    Alert.alert(
      "Atenção",
      "Isso fará o upload das 393 infrações offline para o Firebase. Demora alguns segundos. Deseja continuar?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Iniciar", onPress: async () => {
          setLoading(true);
          const success = await seedInfractionsToFirebase();
          setLoading(false);
          if(success) Alert.alert("Sucesso", "Base inicial migrada para a nuvem!");
        }}
      ]
    );
  };

  const handlePublishDraft = async (draft: any) => {
    try {
      setLoading(true);
      // Salva na coleção oficial
      await setDoc(doc(db, 'infractions', draft.id), draft);
      // Apaga do rascunho
      await deleteDoc(doc(db, 'infractions_drafts', draft.id));
      
      Alert.alert("Sucesso", "Infração publicada e enviada para o cache de todos os aplicativos!");
      fetchDrafts();
    } catch (e) {
      Alert.alert("Erro", "Falha ao publicar infração.");
      setLoading(false);
    }
  };

  const runScraperBot = async () => {
    Alert.alert(
      "Iniciando Robô",
      "O robô está vasculhando o Diário Oficial da União (DOU) em busca de novas resoluções do CONTRAN...",
      [{ text: "OK" }]
    );
    setLoading(true);
    try {
      // Faz a busca na API aberta de pesquisa do Diário Oficial
      const response = await fetch('https://in.gov.br/consulta/-/buscar/dou?q=%22Resolu%C3%A7%C3%A3o+CONTRAN%22&s=todos&exactDate=all&sortType=0');
      const data = await response.json();

      if (data && data.resultados && data.resultados.length > 0) {
        // Pega a resolução mais recente encontrada
        const latest = data.resultados[0];
        
        // Cria um alerta na quarentena
        const draftAlert = {
          type: 'ALERTA_ROBO',
          codigo: 'NOVA LEI',
          artigo: 'Ver Diário Oficial',
          descricao: `O robô encontrou uma publicação recente no Diário Oficial: ${latest.title}. Data: ${latest.pubDate}. Você precisa verificar se isso altera as infrações atuais.`,
          link: `https://in.gov.br/web/dou/-/${latest.urlTitle}`,
          createdAt: new Date().toISOString()
        };

        // Usa o timestamp como ID para não sobrescrever
        await setDoc(doc(db, 'infractions_drafts', `alerta_${Date.now()}`), draftAlert);
        
        Alert.alert("Sucesso!", "O Robô terminou a varredura e encontrou novidades. Verifique a aba de Quarentena.");
        fetchDrafts();
      } else {
        Alert.alert("Tudo atualizado", "O Robô não encontrou nenhuma Resolução CONTRAN recente.");
      }
    } catch (error: any) {
      console.error(error);
      if (error.message.includes('Network') || error.message.includes('fetch')) {
        Alert.alert("Erro de Conexão", "A busca foi bloqueada pelo navegador (CORS). Teste esta função diretamente no aplicativo instalado no celular físico.");
      } else {
        Alert.alert("Erro", "O robô falhou ao vasculhar o Diário Oficial.");
      }
    } finally {
      setLoading(false);
    }
  };

  const renderUser = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userEmail}>{item.email}</Text>
        <Text style={[
          styles.statusBadge, 
          item.status === 'ativo' ? styles.statusActive : 
          item.status === 'bloqueado' ? styles.statusBlocked : 
          styles.statusPending
        ]}>
          Status: {item.status.toUpperCase()}
        </Text>
      </View>
      <View style={styles.actions}>
        {item.status !== 'ativo' && (
          <TouchableOpacity style={[styles.btn, styles.btnApprove]} onPress={() => changeStatus(item.id, 'ativo')}>
            <Text style={styles.btnText}>Liberar</Text>
          </TouchableOpacity>
        )}
        {item.status !== 'bloqueado' && (
          <TouchableOpacity style={[styles.btn, styles.btnBlock]} onPress={() => changeStatus(item.id, 'bloqueado')}>
            <Text style={styles.btnText}>Bloquear</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  const renderDraft = ({ item }: { item: any }) => {
    if (item.type === 'ALERTA_ROBO') {
      return (
        <View style={[styles.card, { borderColor: '#f59e0b', borderWidth: 2 }]}>
          <View style={styles.userInfo}>
            <Text style={[styles.userName, { color: '#f59e0b' }]}>🤖 ALERTA DO ROBÔ</Text>
            <Text style={styles.userEmail} numberOfLines={4}>{item.descricao}</Text>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity style={[styles.btn, styles.btnBlock]} onPress={async () => {
              await deleteDoc(doc(db, 'infractions_drafts', item.id));
              fetchDrafts();
            }}>
              <Text style={styles.btnText}>Descartar Alerta</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.card}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{item.codigo} - Art. {item.artigo}</Text>
          <Text style={styles.userEmail} numberOfLines={3}>{item.descricao}</Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={[styles.btn, styles.btnApprove]} onPress={() => handlePublishDraft(item)}>
            <Text style={styles.btnText}>Aprovar e Publicar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const handlePushUpdate = async () => {
    if (changelogData.length === 0) return;
    const latest = changelogData[0];
    setLoading(true);
    setPushMessage('');
    try {
      const configRef = doc(db, 'settings', 'appConfig');

      await setDoc(configRef, {
        latestVersion: latest.version,
        releaseNotes: latest.message,
        downloadUrl: downloadUrlInput
      }, { merge: true });

      setPushError(false);
      setPushMessage(`✅ Sucesso! Os usuários agora serão notificados sobre a versão ${latest.version}. Lembre-se de colocar o APK novo no link de download.`);
    } catch (e) {
      console.error(e);
      setPushError(true);
      setPushMessage(`❌ Erro: Não foi possível avisar os usuários.`);
    } finally {
      setLoading(false);
      // Limpa a mensagem depois de 10 segundos
      setTimeout(() => setPushMessage(''), 10000);
    }
  };

  const renderVersion = ({ item, index }: { item: any, index: number }) => (
    <View style={[styles.card, index === 0 ? { borderColor: '#8b5cf6', borderWidth: 2 } : {}]}>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>Versão {item.version}</Text>
        <Text style={styles.userEmail}>{new Date(item.date).toLocaleDateString('pt-BR')}</Text>
        <Text style={{ color: '#cbd5e1', marginTop: 10 }}>{item.message}</Text>
      </View>
      {index === 0 && (
        <View style={{ marginTop: 15 }}>
          <Text style={{ color: '#94a3b8', marginBottom: 5 }}>Link de Download do APK:</Text>
          <TextInput
            style={{ backgroundColor: '#0f172a', color: '#f8fafc', padding: 10, borderRadius: 6, borderWidth: 1, borderColor: '#334155', marginBottom: 10 }}
            placeholder="Ex: https://drive.google.com/..."
            placeholderTextColor="#64748b"
            value={downloadUrlInput}
            onChangeText={setDownloadUrlInput}
          />
          {pushMessage ? (
            <View style={{ backgroundColor: pushError ? '#ef444420' : '#22c55e20', padding: 10, borderRadius: 8, marginBottom: 10, borderWidth: 1, borderColor: pushError ? '#ef4444' : '#22c55e' }}>
              <Text style={{ color: pushError ? '#ef4444' : '#22c55e', textAlign: 'center', fontWeight: 'bold' }}>
                {pushMessage}
              </Text>
            </View>
          ) : null}
          <View style={styles.actions}>
            <TouchableOpacity style={[styles.btn, { backgroundColor: '#8b5cf6' }]} onPress={handlePushUpdate}>
              <Text style={styles.btnText}>Lançar para Usuários 🚀</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Painel Admin</Text>
        <TouchableOpacity onPress={view === 'users' ? fetchUsers : fetchDrafts} style={styles.refreshBtn}>
          <Text style={styles.refreshText}>Atualizar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <TouchableOpacity style={[styles.tab, view === 'users' && styles.tabActive]} onPress={() => setView('users')}>
          <Text style={[styles.tabText, view === 'users' && { color: '#f59e0b' }]}>Usuários</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, view === 'drafts' && styles.tabActive]} onPress={() => setView('drafts')}>
          <Text style={[styles.tabText, view === 'drafts' && { color: '#f59e0b' }]}>Quarentena</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, view === 'versions' && styles.tabActive]} onPress={() => setView('versions')}>
          <Text style={[styles.tabText, view === 'versions' && { color: '#f59e0b' }]}>Versões</Text>
        </TouchableOpacity>
      </View>

      {view === 'users' && (
        <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
          <TouchableOpacity style={styles.seedBtn} onPress={handleSeed}>
            <Text style={styles.seedBtnText}>[Apenas 1x] Enviar Infrações Atuais p/ Nuvem</Text>
          </TouchableOpacity>
        </View>
      )}

      {view === 'drafts' && (
        <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
          <TouchableOpacity style={[styles.seedBtn, { backgroundColor: '#3b82f6' }]} onPress={runScraperBot}>
            <Text style={styles.seedBtnText}>🤖 Ativar Radar de Atualizações (Robô)</Text>
          </TouchableOpacity>
        </View>
      )}
      
      {loading ? (
        <ActivityIndicator size="large" color="#f59e0b" style={{ marginTop: 50 }} />
      ) : (
        <FlatList
          data={view === 'users' ? users : view === 'drafts' ? drafts : changelogData}
          keyExtractor={(item, index) => item.id || String(index)}
          renderItem={view === 'users' ? renderUser : view === 'drafts' ? renderDraft : renderVersion}
          contentContainerStyle={{ padding: 20 }}
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              {view === 'users' ? "Nenhum usuário." : view === 'drafts' ? "Nenhuma infração na quarentena." : "Nenhuma versão."}
            </Text>
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, backgroundColor: '#1e293b' },
  backBtn: { padding: 8 },
  backBtnText: { color: '#60a5fa', fontSize: 16, fontWeight: 'bold' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#f8fafc' },
  refreshBtn: { padding: 8, backgroundColor: '#334155', borderRadius: 6 },
  refreshText: { color: '#f8fafc', fontSize: 12 },
  tabsContainer: { flexDirection: 'row', backgroundColor: '#1e293b', borderBottomWidth: 1, borderBottomColor: '#334155' },
  tab: { flex: 1, padding: 15, alignItems: 'center' },
  tabActive: { borderBottomWidth: 3, borderBottomColor: '#f59e0b' },
  tabText: { color: '#f8fafc', fontWeight: 'bold' },
  seedBtn: { backgroundColor: '#8b5cf6', padding: 12, borderRadius: 6, alignItems: 'center' },
  seedBtnText: { color: '#fff', fontWeight: 'bold' },
  card: { backgroundColor: '#1e293b', borderRadius: 10, padding: 15, marginBottom: 15, borderWidth: 1, borderColor: '#334155' },
  userInfo: { marginBottom: 15 },
  userName: { fontSize: 18, fontWeight: 'bold', color: '#f8fafc' },
  userEmail: { fontSize: 14, color: '#94a3b8', marginBottom: 5 },
  statusBadge: { fontSize: 12, fontWeight: 'bold', marginTop: 5 },
  statusActive: { color: '#22c55e' },
  statusBlocked: { color: '#ef4444' },
  statusPending: { color: '#eab308' },
  actions: { flexDirection: 'row', gap: 10 },
  btn: { flex: 1, padding: 12, borderRadius: 6, alignItems: 'center' },
  btnApprove: { backgroundColor: '#22c55e' },
  btnBlock: { backgroundColor: '#ef4444' },
  btnText: { color: '#fff', fontWeight: 'bold' },
  emptyText: { color: '#94a3b8', textAlign: 'center', marginTop: 50 }
});
