import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Alert, FlatList, Linking, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import SendIntentAndroid from 'react-native-send-intent';

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
];

export default function DashboardScreen() {
  const navigation = useNavigation<NavigationProp>();
  const currentUser = auth.currentUser;
  const isAdmin = currentUser?.email === 'acerola106@gmail.com';

  const [isEditing, setIsEditing] = useState(false);
  const [menuOrder, setMenuOrder] = useState<string[]>([]);

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
    if (item.packageName && Platform.OS !== 'web' && Platform.OS !== 'ios') {
      try {
        const isInstalled = await SendIntentAndroid.isAppInstalled(item.packageName);
        if (isInstalled) {
          SendIntentAndroid.openApp(item.packageName);
        } else {
          if (item.url) {
            Linking.openURL(`market://details?id=${item.packageName}`).catch(() => {
              Linking.openURL(item.url!);
            });
          }
        }
      } catch (error) {
        if (item.url) {
          Linking.openURL(item.url);
        }
      }
    } else if (item.url) {
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
        <Text style={styles.icon}>{item.icon}</Text>
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
          <TouchableOpacity onPress={() => setIsEditing(!isEditing)} style={[styles.actionBtn, isEditing && styles.actionBtnActive]}>
            <Text style={styles.actionText}>{isEditing ? 'Concluir ✅' : 'Organizar ⚙️'}</Text>
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
  }
});
