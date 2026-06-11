import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Linking, Alert, Image } from 'react-native';

export default function PlateSearchScreen() {
  
  const openMasterPlaca = async () => {
    const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.devplank.masterplaca';
    // Aqui poderíamos tentar abrir um Deep Link direto (intent), mas o link da Play Store 
    // já é inteligente: se o usuário tiver o app, ele pode abrir direto, senão, ele baixa.
    try {
      const supported = await Linking.canOpenURL(playStoreUrl);
      if (supported) {
        await Linking.openURL(playStoreUrl);
      } else {
        Alert.alert("Erro", "Não foi possível abrir o link da Play Store no seu dispositivo.");
      }
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao tentar redirecionar para o aplicativo.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Consulta de Veículos</Text>
        <Text style={styles.subtitle}>Verifique restrições e dados oficiais</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.infoCard}>
          <Text style={styles.iconLarge}>🛡️</Text>
          <Text style={styles.infoTitle}>Integração Segura</Text>
          <Text style={styles.infoDescription}>
            Para garantir que você acesse sempre dados reais e atualizados das bases oficiais (como SINESP) com total segurança, recomendamos o uso de sistemas parceiros homologados.
          </Text>
        </View>

        <TouchableOpacity style={styles.actionButton} onPress={openMasterPlaca}>
          <View style={styles.buttonContent}>
            <Text style={styles.actionIcon}>🚗</Text>
            <View>
              <Text style={styles.actionButtonText}>Abrir Master Placa</Text>
              <Text style={styles.actionButtonSubtext}>Consultar na Base Oficial</Text>
            </View>
          </View>
        </TouchableOpacity>

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
  content: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  infoCard: {
    backgroundColor: '#1e293b',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#334155',
  },
  iconLarge: {
    fontSize: 48,
    marginBottom: 16,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#60a5fa',
    marginBottom: 12,
  },
  infoDescription: {
    color: '#cbd5e1',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
  actionButton: {
    backgroundColor: '#f59e0b',
    padding: 16,
    borderRadius: 12,
    elevation: 4, // shadow for android
    shadowColor: '#000', // shadow for ios
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionIcon: {
    fontSize: 32,
    marginRight: 16,
  },
  actionButtonText: {
    color: '#451a03',
    fontWeight: 'bold',
    fontSize: 20,
  },
  actionButtonSubtext: {
    color: '#78350f',
    fontSize: 14,
    fontWeight: '600',
  }
});
