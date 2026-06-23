import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Alert, FlatList, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import SendIntentAndroid from 'react-native-send-intent';
import { Platform } from 'react-native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Dashboard'>;

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

  const visibleMenuItems = MENU_ITEMS.filter(item => !item.adminOnly || isAdmin);

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

  const renderItem = ({ item }: { item: GridMenu }) => (
    <TouchableOpacity 
      style={[styles.card, { borderTopColor: item.color }]} 
      onPress={() => item.id === '4' ? navigation.navigate('TrafficSigns') : handlePress(item)}
    >
      <View style={[styles.iconContainer, { backgroundColor: item.color + '20' }]}>
        <Text style={styles.icon}>{item.icon}</Text>
      </View>
      <Text style={styles.cardTitle}>{item.title}</Text>
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
        <TouchableOpacity onPress={handleLogout} style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Sair 🚪</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={visibleMenuItems}
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
  logoutBtn: {
    padding: 8,
    backgroundColor: '#334155',
    borderRadius: 8,
  },
  logoutText: {
    color: '#f8fafc',
    fontWeight: 'bold',
    fontSize: 14,
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
