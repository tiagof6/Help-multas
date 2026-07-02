import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Alert, FlatList, Linking, Platform, TextInput, Modal, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { signOut, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { auth } from '../services/firebase';
import * as IntentLauncher from 'expo-intent-launcher';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Dashboard'>;

const MENU_ORDER_KEY = '@dashboard_menu_order';

const handleLogout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    Alert.alert("Erro", "Falha ao sair da conta.");
  }
};

interface GridMenu {
  id: string;
  title: string;
  icon: string;
  color: string;
  route?: keyof RootStackParamList;
  url?: string;
  packageName?: string;
  adminOnly?: boolean;
  imageIcon?: any;
}

const MENU_ITEMS: GridMenu[] = [
  { id: '1', title: 'Código Infração', icon: '🔍', color: '#6366f1', route: 'InfractionSearch' },
  { id: '2', title: 'Consulta Placa', icon: '🔎', color: '#10b981', route: 'PlateSearch' },
  { id: '3', title: 'Resoluções', icon: '📄', color: '#64748b', route: 'Resolution' },
  { id: '4', title: 'Placas Sinalização', icon: '🪧', color: '#f59e0b', route: 'TrafficSigns' },
  { id: '5', title: 'CTB', icon: '📖', color: '#ef4444', route: 'CTB' },
  { id: '6', title: 'Conversor Mercosul', icon: '🔠', color: '#8b5cf6', route: 'MercosulConverter' },
  { id: '7', title: 'Licenciamento Nacional', icon: '📅', color: '#14b8a6', route: 'LicensingTable' },
  { id: '8', title: 'Anotar Placa', icon: '📍', color: '#ef4444', route: 'QuickDraft' },
  { id: '9', title: 'Bloco de Notas', icon: '📝', color: '#f43f5e', route: 'Notes' },
  { id: '10', title: 'App Senatran', icon: '📱', color: '#2563eb', url: 'https://play.google.com/store/apps/details?id=br.gov.serpro.denatran.fiscalizacaodenatran', packageName: 'br.gov.serpro.denatran.fiscalizacaodenatran' },
  { id: '11', title: 'Consulta Fipe', icon: '🚗', color: '#0ea5e9', url: 'https://play.google.com/store/apps/details?id=br.kms.placafipe', packageName: 'br.kms.placafipe' },
  { id: '12', title: 'Sinesp', icon: '🛡️', color: '#0284c7', url: 'https://seguranca.sinesp.gov.br/' },
  { id: '13', title: 'PSIE Inmetro', icon: '⚖️', color: '#eab308', url: 'https://servicos.rbmlq.gov.br/' },
  { id: '14', title: 'BNMP (Mandados)', icon: '⚖️', color: '#475569', url: 'https://portalbnmp.cnj.jus.br/' },
  { id: '15', title: 'Veículos SP', icon: '🚘', color: '#dc2626', url: 'https://www3.fazenda.sp.gov.br/SIVEI/' },
  { id: '16', title: 'Leis Servidor/GCM', icon: '🏛️', color: '#10b981', route: 'GCMLaws' },
  { id: '17', title: 'Rádio Garden', icon: '📻', color: '#84cc16', url: 'https://radio.garden/' },
  { id: '18', title: 'Cortex MJ', icon: '🛡️', color: '#4f46e5', url: 'https://cortex.mj.gov.br/index.php?e=5#' },
  { id: '19', title: 'Timestamp', icon: '📸', color: '#ec4899', url: 'https://play.google.com/store/apps/details?id=com.jeyluta.timestampcamerafree', packageName: 'com.jeyluta.timestampcamerafree' },
  { id: '20', title: 'Sobre o App', icon: 'ℹ️', color: '#a855f7', route: 'About' },
  { id: '21', title: 'Painel Admin', icon: '⚙️', color: '#334155', route: 'Admin', adminOnly: true },
  { id: '22', title: 'Jacareí/Servidor', icon: '🏢', color: '#059669', route: 'JacareiServidor' },
  { id: '23', title: 'Smart Sampa', icon: '🏙️', color: '#3b82f6', url: 'https://play.google.com/store/apps/details?id=br.com.sentinelx.citizenapp.smartsampa', packageName: 'br.com.sentinelx.citizenapp.smartsampa' },
  { id: '24', title: 'Comunicação', icon: '💬', color: '#f43f5e', route: 'ChatList' },
  { id: '25', title: 'QAP Multas', icon: '📱', imageIcon: require('../../assets/qap_logo.png'), color: '#1e3a8a', url: 'https://play.google.com/store/apps/details?id=gf.qapmultas', packageName: 'gf.qapmultas' },
];

export default function DashboardScreen() {
  const navigation = useNavigation<NavigationProp>();
  const currentUser = auth.currentUser;
  const isAdmin = currentUser?.email === 'acerola106@gmail.com';

  const [isEditing, setIsEditing] = useState(false);
  const [menuOrder, setMenuOrder] = useState<string[]>([]);
  
  const [toolsModalVisible, setToolsModalVisible] = useState(false);
  const [pwdModalVisible, setPwdModalVisible] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [pwdLoading, setPwdLoading] = useState(false);
  const [pwdError, setPwdError] = useState('');

  const handleChangePassword = async () => {
    setPwdError('');
    if (!currentPassword || !newPassword || !confirmNewPassword) {
      setPwdError('Preencha todos os campos.');
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setPwdError('As novas senhas não conferem.');
      return;
    }
    if (newPassword.length < 6) {
      setPwdError('A nova senha deve ter no mínimo 6 caracteres.');
      return;
    }
    if (!currentUser?.email) return;

    setPwdLoading(true);
    try {
      const credential = EmailAuthProvider.credential(currentUser.email, currentPassword);
      await reauthenticateWithCredential(currentUser, credential);
      await updatePassword(currentUser, newPassword);
      Alert.alert('Sucesso', 'Senha alterada com sucesso!');
      setPwdModalVisible(false);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    } catch (error: any) {
      if (error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
        setPwdError('A senha atual está incorreta.');
      } else {
        setPwdError('Erro ao alterar senha. Verifique sua conexão.');
      }
    } finally {
      setPwdLoading(false);
    }
  };

  useEffect(() => {
    loadMenuOrder();
  }, []);

  const loadMenuOrder = async () => {
    try {
      const savedOrder = await AsyncStorage.getItem(MENU_ORDER_KEY);
      if (savedOrder) {
        setMenuOrder(JSON.parse(savedOrder));
      } else {
        setMenuOrder(MENU_ITEMS.map(item => item.id));
      }
    } catch (e) {
      setMenuOrder(MENU_ITEMS.map(item => item.id));
    }
  };

  const saveMenuOrder = async (newOrder: string[]) => {
    setMenuOrder(newOrder);
    try {
      await AsyncStorage.setItem(MENU_ORDER_KEY, JSON.stringify(newOrder));
    } catch (e) {
      console.error('Failed to save menu order');
    }
  };

  const moveItem = (index: number, direction: 'prev' | 'next' | 'up' | 'down' | 'first') => {
    const newOrder = [...menuOrder];
    
    if (direction === 'first' && index > 0) {
      const item = newOrder.splice(index, 1)[0];
      newOrder.unshift(item);
    } else if (direction === 'prev' && index > 0) {
      [newOrder[index - 1], newOrder[index]] = [newOrder[index], newOrder[index - 1]];
    } else if (direction === 'next' && index < menuOrder.length - 1) {
      [newOrder[index + 1], newOrder[index]] = [newOrder[index], newOrder[index + 1]];
    } else if (direction === 'up' && index >= 2) {
      [newOrder[index - 2], newOrder[index]] = [newOrder[index], newOrder[index - 2]];
    } else if (direction === 'down' && index < menuOrder.length - 2) {
      [newOrder[index + 2], newOrder[index]] = [newOrder[index], newOrder[index + 2]];
    }
    
    saveMenuOrder(newOrder);
  };

  // Sort visible items based on menuOrder
  const sortedMenuItems = [...MENU_ITEMS]
    .filter(item => !item.adminOnly || isAdmin)
    .sort((a, b) => {
      const indexA = menuOrder.indexOf(a.id);
      const indexB = menuOrder.indexOf(b.id);
      if (indexA === -1 && indexB === -1) return 0;
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });

  const handlePress = async (item: GridMenu) => {
    // --- APP NATIVO ANDROID (APK instalado) ---
    if (item.packageName && Platform.OS === 'android') {
      try {
        await IntentLauncher.startActivityAsync(
          IntentLauncher.ActivityAction.MAIN_ACTION || 'android.intent.action.MAIN',
          {
            packageName: item.packageName,
            className: undefined,
            category: 'android.intent.category.LAUNCHER',
          }
        );
        return;
      } catch (error) {
        // App não instalado - abre Play Store
        Linking.openURL(`market://details?id=${item.packageName}`).catch(() => {
          Linking.openURL(`https://play.google.com/store/apps/details?id=${item.packageName}`);
        });
        return;
      }
    }
    
    // --- NAVEGADOR WEB no Android (site no Chrome) ---
    if (item.packageName && Platform.OS === 'web') {
      const isAndroid = /android/i.test((navigator as any).userAgent);
      if (isAndroid) {
        // Formato correto do Chrome Android intent URL
        const fallback = encodeURIComponent(`https://play.google.com/store/apps/details?id=${item.packageName}`);
        (window as any).location.href = `intent://#Intent;action=android.intent.action.MAIN;category=android.intent.category.LAUNCHER;package=${item.packageName};S.browser_fallback_url=${fallback};end`;
        return;
      }
    }
    
    // --- URL externa (iOS, Desktop) ---
    if (item.url) {
      Linking.openURL(item.url).catch(() => {
        Alert.alert('Erro', 'Não foi possível abrir o link externo.');
      });
    } else if (item.route) {
      navigation.navigate(item.route as any);
    }
  };

  const renderItem = ({ item, index }: { item: GridMenu, index: number }) => (
    <TouchableOpacity 
      style={[styles.card, { borderTopColor: item.color }, isEditing && styles.cardEditing]} 
      onPress={() => {
        if (isEditing) return;
        item.id === '4' ? navigation.navigate('TrafficSigns') : handlePress(item);
      }}
      activeOpacity={isEditing ? 1 : 0.7}
    >
      <View style={[styles.iconContainer, { backgroundColor: item.color + '20' }]}>
        {item.imageIcon ? (
          <Image source={item.imageIcon} style={{ width: 36, height: 36, borderRadius: 8, resizeMode: 'contain' }} />
        ) : (
          <Text style={styles.icon}>{item.icon}</Text>
        )}
      </View>
      <Text style={styles.cardTitle}>{item.title}</Text>
      
      {isEditing && (
        <View style={styles.editControls}>
          <TouchableOpacity 
            style={[styles.arrowBtn, index === 0 && styles.arrowBtnDisabled]} 
            onPress={() => moveItem(index, 'first')}
            disabled={index === 0}
          >
            <Text style={styles.arrowText}>🔝</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.arrowBtn, index < 2 && styles.arrowBtnDisabled]} 
            onPress={() => moveItem(index, 'up')}
            disabled={index < 2}
          >
            <Text style={styles.arrowText}>⬆️</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.arrowBtn, index >= sortedMenuItems.length - 2 && styles.arrowBtnDisabled]} 
            onPress={() => moveItem(index, 'down')}
            disabled={index >= sortedMenuItems.length - 2}
          >
            <Text style={styles.arrowText}>⬇️</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.arrowBtn, index === sortedMenuItems.length - 1 && styles.arrowBtnDisabled]} 
            onPress={() => moveItem(index, 'next')}
            disabled={index === sortedMenuItems.length - 1}
          >
            <Text style={styles.arrowText}>➡️</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          <Image source={require('../../assets/icon.png')} style={styles.logo} />
          <View>
            <Text style={styles.title}>Help Multas</Text>
            <Text style={styles.subtitle}>Dashboard do Agente</Text>
          </View>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity onPress={() => setToolsModalVisible(true)} style={[styles.actionBtn, isEditing && styles.actionBtnActive]}>
            <Text style={styles.actionText}>{isEditing ? 'Concluir ✅' : 'Ferramentas 🛠️'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout} style={styles.logoutBtn}>
            <Text style={styles.logoutText}>Sair 🚪</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={sortedMenuItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.gridContainer}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />

      <Modal visible={toolsModalVisible} transparent animationType="fade" onRequestClose={() => setToolsModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Ferramentas</Text>
              <TouchableOpacity onPress={() => setToolsModalVisible(false)}>
                <Text style={styles.closeButtonText}>❌</Text>
              </TouchableOpacity>
            </View>
            
            <TouchableOpacity 
              style={[styles.toolsBtn, isEditing && styles.toolsBtnActive]} 
              onPress={() => {
                setIsEditing(!isEditing);
                setToolsModalVisible(false);
              }}
            >
              <Text style={styles.toolsBtnText}>{isEditing ? 'Concluir Organização ✅' : 'Organizar Ícones ⚙️'}</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.toolsBtn} 
              onPress={() => {
                setToolsModalVisible(false);
                setPwdModalVisible(true);
              }}
            >
              <Text style={styles.toolsBtnText}>Alterar Senha 🔑</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.toolsBtnOutline} 
              onPress={() => setToolsModalVisible(false)}
            >
              <Text style={styles.toolsBtnOutlineText}>Voltar ⬅️</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={pwdModalVisible} transparent animationType="slide" onRequestClose={() => setPwdModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Alterar Senha</Text>
              <TouchableOpacity onPress={() => setPwdModalVisible(false)}>
                <Text style={styles.closeButtonText}>❌</Text>
              </TouchableOpacity>
            </View>
            
            <TextInput
              style={[styles.input, pwdError ? styles.inputError : null]}
              placeholder="Senha Atual"
              placeholderTextColor="#64748b"
              secureTextEntry
              value={currentPassword}
              onChangeText={(text) => { setCurrentPassword(text); setPwdError(''); }}
            />
            <TextInput
              style={[styles.input, pwdError ? styles.inputError : null]}
              placeholder="Nova Senha"
              placeholderTextColor="#64748b"
              secureTextEntry
              value={newPassword}
              onChangeText={(text) => { setNewPassword(text); setPwdError(''); }}
            />
            <TextInput
              style={[styles.input, pwdError ? styles.inputError : null]}
              placeholder="Repetir Nova Senha"
              placeholderTextColor="#64748b"
              secureTextEntry
              value={confirmNewPassword}
              onChangeText={(text) => { setConfirmNewPassword(text); setPwdError(''); }}
            />

            {pwdError ? <Text style={styles.errorText}>{pwdError}</Text> : null}

            <TouchableOpacity style={styles.saveBtn} onPress={handleChangePassword} disabled={pwdLoading}>
              {pwdLoading ? <ActivityIndicator color="#0f172a" /> : <Text style={styles.saveBtnText}>Salvar Nova Senha</Text>}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.footerInfo}>
        <Text style={styles.footerText}>Help Multas</Text>
        <Text style={styles.footerSub}>App Não Governamental</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  header: {
    padding: 20,
    backgroundColor: '#1e293b',
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 48,
    height: 48,
    marginRight: 12,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f8fafc',
  },
  subtitle: {
    fontSize: 14,
    color: '#94a3b8',
    marginTop: 4,
  },
  headerActions: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 8,
  },
  actionBtn: {
    padding: 8,
    backgroundColor: '#334155',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#475569',
  },
  actionBtnActive: {
    backgroundColor: '#10b981',
    borderColor: '#059669',
  },
  actionText: {
    color: '#f8fafc',
    fontWeight: 'bold',
    fontSize: 12,
  },
  logoutBtn: {
    padding: 8,
    backgroundColor: '#334155',
    borderRadius: 8,
  },
  logoutText: {
    color: '#f8fafc',
    fontWeight: 'bold',
    fontSize: 12,
  },
  gridContainer: {
    padding: 12,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#1e293b',
    width: '48%',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 4,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  icon: {
    fontSize: 28,
  },
  cardTitle: {
    color: '#f8fafc',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  cardEditing: {
    borderWidth: 2,
    borderColor: '#475569',
    borderStyle: 'dashed',
    opacity: 0.9,
  },
  editControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#334155',
    paddingTop: 10,
  },
  arrowBtn: {
    padding: 6,
    backgroundColor: '#334155',
    borderRadius: 6,
  },
  arrowBtnDisabled: {
    opacity: 0.3,
  },
  arrowText: {
    fontSize: 16,
  },
  footerInfo: {
    padding: 16,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#1e293b',
  },
  footerText: {
    color: '#cbd5e1',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerSub: {
    color: '#64748b',
    fontSize: 12,
  },
  pwdBtn: {
    padding: 8,
    backgroundColor: '#3b82f6',
    borderRadius: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    width: '100%',
    padding: 20,
    borderWidth: 1,
    borderColor: '#334155',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    color: '#f8fafc',
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButtonText: {
    fontSize: 18,
  },
  input: {
    backgroundColor: '#0f172a',
    color: '#f8fafc',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#334155',
  },
  inputError: {
    borderColor: '#ef4444',
  },
  errorText: {
    color: '#ef4444',
    fontSize: 14,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  saveBtn: {
    backgroundColor: '#f59e0b',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 5,
  },
  saveBtnText: {
    color: '#0f172a',
    fontWeight: 'bold',
    fontSize: 16,
  },
  toolsBtn: {
    backgroundColor: '#3b82f6',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  toolsBtnActive: {
    backgroundColor: '#10b981',
  },
  toolsBtnText: {
    color: '#f8fafc',
    fontWeight: 'bold',
    fontSize: 16,
  },
  toolsBtnOutline: {
    borderWidth: 1,
    borderColor: '#64748b',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 5,
  },
  toolsBtnOutlineText: {
    color: '#cbd5e1',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
