import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Linking, Alert, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PlateSearchScreen() {
  const navigation = useNavigation();
  
  const openApp = async (packageName: string) => {
    // Usa um Intent do Android para abrir diretamente o aplicativo sem passar pela Play Store
    const intentUrl = `intent://#Intent;package=${packageName};S.browser_fallback_url=https://play.google.com/store/apps/details?id=${packageName};end;`;
    
    if (Platform.OS === 'web') {
      // No PWA (navegador), o Linking.openURL abre em nova guia e bloqueia o Intent.
      // Modificar o window.location.href resolve isso forçando o redirecionamento na mesma guia.
      window.location.href = intentUrl;
    } else {
      try {
        await Linking.openURL(intentUrl);
      } catch (error) {
        Linking.openURL(`https://play.google.com/store/apps/details?id=${packageName}`);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Voltar</Text>
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <View>
            <Text style={styles.title}>Consulta de Veículos</Text>
            <Text style={styles.subtitle}>Verifique restrições e dados oficiais</Text>
          </View>
        </View>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.infoCard}>
          <Text style={styles.iconLarge}>🛡️</Text>
          <Text style={styles.infoTitle}>Integração Segura</Text>
          <Text style={styles.infoDescription}>
            Escolha um dos aplicativos homologados abaixo. Ao clicar, se você já tiver o aplicativo instalado, ele será aberto imediatamente.
          </Text>
        </View>

        <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#f59e0b' }]} onPress={() => openApp('com.devplank.masterplaca')}>
          <View style={styles.buttonContent}>
            <Text style={styles.actionIcon}>🚗</Text>
            <View style={styles.textColumn}>
              <Text style={styles.actionButtonText}>Master Placa</Text>
              <Text style={styles.actionButtonSubtext}>DevPlank</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#eab308' }]} onPress={() => openApp('br.com.muriel.placafip')}>
          <View style={styles.buttonContent}>
            <Text style={styles.actionIcon}>🚕</Text>
            <View style={styles.textColumn}>
              <Text style={styles.actionButtonText}>PlacaFip</Text>
              <Text style={styles.actionButtonSubtext}>Muriel Tecnologia</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#3b82f6' }]} onPress={() => openApp('br.gov.serpro.fiscalizacao')}>
          <View style={styles.buttonContent}>
            <Text style={styles.actionIcon}>👮</Text>
            <View style={styles.textColumn}>
              <Text style={styles.actionButtonText}>Fiscalização Senatran</Text>
              <Text style={styles.actionButtonSubtext}>Serviços Oficiais do Brasil</Text>
            </View>
          </View>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  header: { padding: 20, backgroundColor: '#1e293b', borderBottomWidth: 1, borderBottomColor: '#334155', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  headerTitleContainer: { alignItems: 'center' },
  backBtn: { padding: 8 },
  backBtnText: { color: '#60a5fa', fontSize: 16, fontWeight: 'bold' },
  title: { fontSize: 20, fontWeight: 'bold', color: '#f8fafc', textAlign: 'center' },
  subtitle: { fontSize: 12, color: '#94a3b8', marginTop: 2, textAlign: 'center' },
  content: { padding: 20, paddingBottom: 40 },
  infoCard: { backgroundColor: '#1e293b', padding: 24, borderRadius: 12, alignItems: 'center', marginBottom: 30, borderWidth: 1, borderColor: '#334155' },
  iconLarge: { fontSize: 48, marginBottom: 16 },
  infoTitle: { fontSize: 20, fontWeight: 'bold', color: '#60a5fa', marginBottom: 12 },
  infoDescription: { color: '#cbd5e1', fontSize: 16, textAlign: 'center', lineHeight: 24 },
  actionButton: { padding: 16, borderRadius: 12, elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, marginBottom: 15 },
  buttonContent: { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', paddingHorizontal: 10 },
  actionIcon: { fontSize: 32, marginRight: 16 },
  textColumn: { flex: 1 },
  actionButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 18, textShadowColor: 'rgba(0, 0, 0, 0.3)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 2 },
  actionButtonSubtext: { color: 'rgba(255, 255, 255, 0.9)', fontSize: 13, fontWeight: '600' }
});
