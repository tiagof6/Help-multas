import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, Alert, TextInput, Modal, Platform } from 'react-native';
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
  const [view, setView] = useState<'dashboard' | 'users' | 'drafts' | 'versions'>('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [historyModalVisible, setHistoryModalVisible] = useState(false);
  const [selectedUserHistory, setSelectedUserHistory] = useState<any>(null);
  const [metrics, setMetrics] = useState({ total: 0, pending: 0, active: 0 });
  const [pushMessage, setPushMessage] = useState('');
  const [pushError, setPushError] = useState(false);
  const [downloadUrlInput, setDownloadUrlInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersList: any[] = [];
      let activeCount = 0;
      let pendingCount = 0;
      const now = new Date().getTime();

      querySnapshot.forEach((docSnap) => {
        const data = docSnap.data();
        usersList.push({ id: docSnap.id, ...data });
        
        if (data.status === 'aguardando') pendingCount++;
        if (data.lastLogin) {
          const lastLoginTime = new Date(data.lastLogin).getTime();
          const diffDays = (now - lastLoginTime) / (1000 * 60 * 60 * 24);
          if (diffDays <= 7) activeCount++;
        }
      });
      
      setMetrics({ total: usersList.length, pending: pendingCount, active: activeCount });
      
      // Ordena a lista: pendentes primeiro, depois ativos/bloqueados, e excluídos no final
      usersList.sort((a, b) => {
        if (a.status === 'excluido' && b.status !== 'excluido') return 1;
        if (b.status === 'excluido' && a.status !== 'excluido') return -1;
        if (a.status === 'aguardando' && b.status !== 'aguardando') return -1;
        if (b.status === 'aguardando' && a.status !== 'aguardando') return 1;
        
        const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return dateB - dateA;
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
    if (view === 'dashboard' || view === 'users') fetchUsers();
    else if (view === 'drafts') fetchDrafts();
    else if (view === 'versions') fetchConfig();
  }, [view]);


  const changeStatus = async (userId: string, newStatus: string) => {
    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, { status: newStatus });
      setUsers(users.map(u => u.id === userId ? { ...u, status: newStatus } : u));
    } catch (error: any) {
      console.error('Erro no changeStatus:', error);
      setErrorMessage(`Erro ao atualizar: ${error.message || 'Desconhecido'}`);
      if (Platform.OS === 'web') {
        alert("Falha ao atualizar o status do usuário.");
      } else {
        Alert.alert("Erro", "Falha ao atualizar o status do usuário.");
      }
    }
  };

  const handleSeed = async () => {
    const runSeed = async () => {
      setLoading(true);
      const success = await seedInfractionsToFirebase();
      setLoading(false);
      if (success) {
        if (Platform.OS === 'web') {
          alert("Base inicial migrada para a nuvem!");
        } else {
          Alert.alert("Sucesso", "Base inicial migrada para a nuvem!");
        }
      }
    };

    if (Platform.OS === 'web') {
      const confirmSeed = window.confirm("Atenção: Isso fará o upload das 393 infrações offline para o Firebase. Demora alguns segundos. Deseja continuar?");
      if (confirmSeed) {
        await runSeed();
      }
    } else {
      Alert.alert(
        "Atenção",
        "Isso fará o upload das 393 infrações offline para o Firebase. Demora alguns segundos. Deseja continuar?",
        [
          { text: "Cancelar", style: "cancel" },
          { text: "Iniciar", onPress: runSeed }
        ]
      );
    }
  };

  const handlePublishDraft = async (draft: any) => {
    try {
      setLoading(true);
      // Salva na coleção oficial
      await setDoc(doc(db, 'infractions', draft.id), draft);
      // Apaga do rascunho
      await deleteDoc(doc(db, 'infractions_drafts', draft.id));
      
      if (Platform.OS === 'web') {
        alert("Infração publicada e enviada para o cache de todos os aplicativos!");
      } else {
        Alert.alert("Sucesso", "Infração publicada e enviada para o cache de todos os aplicativos!");
      }
      fetchDrafts();
    } catch (e) {
      if (Platform.OS === 'web') {
        alert("Falha ao publicar infração.");
      } else {
        Alert.alert("Erro", "Falha ao publicar infração.");
      }
      setLoading(false);
    }
  };

  const runScraperBot = async () => {
    if (Platform.OS === 'web') {
      alert("O robô está vasculhando o Diário Oficial da União (DOU) em busca de novas resoluções do CONTRAN...");
    } else {
      Alert.alert(
        "Iniciando Robô",
        "O robô está vasculhando o Diário Oficial da União (DOU) em busca de novas resoluções do CONTRAN...",
        [{ text: "OK" }]
      );
    }
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
        
        if (Platform.OS === 'web') {
          alert("Sucesso! O Robô terminou a varredura e encontrou novidades. Verifique a aba de Quarentena.");
        } else {
          Alert.alert("Sucesso!", "O Robô terminou a varredura e encontrou novidades. Verifique a aba de Quarentena.");
        }
        fetchDrafts();
      } else {
        if (Platform.OS === 'web') {
          alert("O Robô não encontrou nenhuma Resolução CONTRAN recente.");
        } else {
          Alert.alert("Tudo atualizado", "O Robô não encontrou nenhuma Resolução CONTRAN recente.");
        }
      }
    } catch (error: any) {
      console.error(error);
      if (error.message.includes('Network') || error.message.includes('fetch')) {
        if (Platform.OS === 'web') {
          alert("Erro de Conexão: A busca foi bloqueada pelo navegador (CORS). Teste esta função diretamente no aplicativo instalado no celular físico.");
        } else {
          Alert.alert("Erro de Conexão", "A busca foi bloqueada pelo navegador (CORS). Teste esta função diretamente no aplicativo instalado no celular físico.");
        }
      } else {
        if (Platform.OS === 'web') {
          alert("O robô falhou ao vasculhar o Diário Oficial.");
        } else {
          Alert.alert("Erro", "O robô falhou ao vasculhar o Diário Oficial.");
        }
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
          item.status === 'excluido' ? { color: '#64748b' } :
          styles.statusPending
        ]}>
          Status: {item.status.toUpperCase()}
        </Text>
        {item.createdAt && (() => {
          const createdDate = new Date(item.createdAt);
          const diffTime = Math.abs(new Date().getTime() - createdDate.getTime());
          const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
          return (
            <View style={{ marginTop: 10, padding: 8, backgroundColor: '#0f172a', borderRadius: 6, borderWidth: 1, borderColor: '#334155' }}>
              <Text style={{ color: '#cbd5e1', fontSize: 13 }}>📅 Cadastrado em: {createdDate.toLocaleDateString('pt-BR')}</Text>
              <Text style={{ color: '#cbd5e1', fontSize: 13, marginTop: 4 }}>⏳ Tempo no app: {diffDays} {diffDays === 1 ? 'dia' : 'dias'}</Text>
            </View>
          );
        })()}
        
        {item.lastLogin && (
          <View style={{ marginTop: 10, padding: 8, backgroundColor: '#0f172a', borderRadius: 6, borderWidth: 1, borderColor: '#334155' }}>
            <Text style={{ color: '#22c55e', fontSize: 13, fontWeight: 'bold' }}>✅ Último Acesso: {new Date(item.lastLogin).toLocaleString('pt-BR')}</Text>
            {item.loginHistory && item.loginHistory.length > 0 && (
              <TouchableOpacity onPress={() => { setSelectedUserHistory(item); setHistoryModalVisible(true); }} style={{ marginTop: 8 }}>
                <Text style={{ color: '#3b82f6', fontSize: 13, textDecorationLine: 'underline' }}>Ver Histórico de Acessos</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
      <View style={styles.actions}>
        {item.status === 'excluido' ? (
          <TouchableOpacity style={[styles.btn, { backgroundColor: '#3b82f6' }]} onPress={() => changeStatus(item.id, 'aguardando')}>
            <Text style={styles.btnText}>Restaurar Conta</Text>
          </TouchableOpacity>
        ) : (
          <>
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
            <TouchableOpacity style={[styles.btn, styles.btnDelete]} onPress={() => changeStatus(item.id, 'excluido')}>
              <Text style={styles.btnText}>Excluir</Text>
            </TouchableOpacity>
          </>
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

  const renderDashboard = () => (
    <View style={{ padding: 20 }}>
      <Text style={{ color: '#f8fafc', fontSize: 18, fontWeight: 'bold', marginBottom: 15 }}>Visão Geral (Últimos 7 dias)</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 10 }}>
        <View style={styles.metricCard}>
          <Text style={styles.metricValue}>{metrics.total}</Text>
          <Text style={styles.metricLabel}>Total de Usuários</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={[styles.metricValue, { color: '#eab308' }]}>{metrics.pending}</Text>
          <Text style={styles.metricLabel}>Aguardando Liberação</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={[styles.metricValue, { color: '#22c55e' }]}>{metrics.active}</Text>
          <Text style={styles.metricLabel}>Ativos Recentemente</Text>
        </View>
      </View>
    </View>
  );

  const filteredUsers = users.filter(u => 
    u.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
    u.email?.toLowerCase().includes(searchQuery.toLowerCase())
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
        <TouchableOpacity style={[styles.tab, view === 'dashboard' && styles.tabActive]} onPress={() => setView('dashboard')}>
          <Text style={[styles.tabText, view === 'dashboard' && { color: '#f59e0b' }]}>Painel</Text>
        </TouchableOpacity>
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

      {errorMessage ? (
        <View style={{ backgroundColor: '#ef4444', padding: 10, margin: 10, borderRadius: 5 }}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>{errorMessage}</Text>
        </View>
      ) : null}

      {view === 'users' && (
        <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
          <TextInput
            style={{ backgroundColor: '#1e293b', color: '#f8fafc', padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#334155', marginBottom: 10 }}
            placeholder="Pesquisar por nome ou e-mail..."
            placeholderTextColor="#64748b"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
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
      ) : view === 'dashboard' ? (
        renderDashboard()
      ) : (
        <FlatList
          data={view === 'users' ? filteredUsers : view === 'drafts' ? drafts : changelogData}
          keyExtractor={(item, index) => item.id || String(index)}
          renderItem={view === 'users' ? renderUser : view === 'drafts' ? renderDraft : renderVersion}
          contentContainerStyle={{ padding: 20 }}
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              {view === 'users' ? "Nenhum usuário encontrado." : view === 'drafts' ? "Nenhuma infração na quarentena." : "Nenhuma versão."}
            </Text>
          }
        />
      )}

      <Modal visible={historyModalVisible} transparent animationType="slide" onRequestClose={() => setHistoryModalVisible(false)}>
        <View style={styles.modalOverlayCenter}>
          <View style={styles.confirmModalContent}>
            <Text style={styles.confirmTitle}>Histórico de Acessos</Text>
            <Text style={{ color: '#94a3b8', marginBottom: 15, textAlign: 'center' }}>Últimos acessos de {selectedUserHistory?.name}</Text>
            
            {selectedUserHistory?.loginHistory?.map((log: string, idx: number) => (
              <Text key={idx} style={{ color: '#cbd5e1', fontSize: 14, marginBottom: 8, padding: 8, backgroundColor: '#0f172a', borderRadius: 5, textAlign: 'center' }}>
                {new Date(log).toLocaleString('pt-BR')}
              </Text>
            ))}

            {!selectedUserHistory?.loginHistory?.length && (
              <Text style={{ color: '#64748b', textAlign: 'center', marginBottom: 15 }}>Nenhum histórico recente disponível.</Text>
            )}

            <TouchableOpacity style={[styles.cancelConfirmBtn, { marginTop: 15 }]} onPress={() => setHistoryModalVisible(false)}>
              <Text style={styles.cancelConfirmText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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
  btnDelete: { backgroundColor: '#334155' },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
  emptyText: { color: '#94a3b8', textAlign: 'center', marginTop: 50 },
  
  // Custom Confirm Modal Styles
  modalOverlayCenter: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center', padding: 20 },
  confirmModalContent: { backgroundColor: '#1e293b', padding: 25, borderRadius: 15, width: '100%', maxWidth: 400, borderWidth: 1, borderColor: '#334155' },
  confirmTitle: { color: '#f8fafc', fontSize: 20, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
  confirmText: { color: '#cbd5e1', fontSize: 16, textAlign: 'center', marginBottom: 25, lineHeight: 22 },
  confirmButtons: { flexDirection: 'row', justifyContent: 'space-between', gap: 15 },
  cancelConfirmBtn: { flex: 1, padding: 15, borderRadius: 8, backgroundColor: '#334155', alignItems: 'center' },
  cancelConfirmText: { color: '#f8fafc', fontSize: 16, fontWeight: 'bold' },
  deleteConfirmBtn: { flex: 1, padding: 15, borderRadius: 8, backgroundColor: '#ef4444', alignItems: 'center' },
  deleteConfirmText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  metricCard: { flex: 1, minWidth: 100, backgroundColor: '#1e293b', padding: 15, borderRadius: 10, borderWidth: 1, borderColor: '#334155', alignItems: 'center' },
  metricValue: { fontSize: 28, fontWeight: 'bold', color: '#f8fafc' },
  metricLabel: { fontSize: 12, color: '#94a3b8', textAlign: 'center', marginTop: 5 }
});
