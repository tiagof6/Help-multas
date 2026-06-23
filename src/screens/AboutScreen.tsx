import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Linking, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import appJson from '../../app.json';

export default function AboutScreen() {
  const navigation = useNavigation();
  const version = appJson.expo.version || '1.0.0';

  const handleEmail = () => {
    Linking.openURL('mailto:helpmultas39@gmail.com');
  };

  const handleWhatsApp = () => {
    Linking.openURL('whatsapp://send?phone=5512991918154');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={{ fontSize: 24, color: '#f8fafc' }}>⬅️</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sobre</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/icon.png')} style={styles.logo} />
          <Text style={styles.appName}>Help Multas</Text>
          <Text style={styles.versionText}>Versão {version}</Text>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            Este aplicativo tem por finalidade ajudar no trabalho de Fiscalização, Orientação e Aprendizado de Trânsito.
            Consulte o Código de Trânsito Brasileiro, Manuais, Resoluções e muito mais em um só lugar.
          </Text>
        </View>

        <View style={styles.contactContainer}>
          <Text style={styles.sectionTitle}>Contato</Text>
          
          <TouchableOpacity style={styles.contactItem} onPress={handleEmail}>
            <MaterialIcons name="email" size={28} color="#f59e0b" />
            <Text style={styles.contactText}>helpmultas39@gmail.com</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactItem} onPress={handleWhatsApp}>
            <FontAwesome name="whatsapp" size={30} color="#25D366" />
            <Text style={styles.contactText}>(12) 99191-8154</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.footerTitle}>Termos e Políticas</Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>Termos de Uso</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.linkText}>Política de Privacidade</Text>
          </TouchableOpacity>
          
          <Text style={styles.copyrightText}>
            Desenvolvido para Auxílio na Fiscalização
          </Text>
          <Text style={styles.copyrightText}>
            Copyright © {new Date().getFullYear()}. Todos os direitos reservados.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#1e293b',
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f8fafc',
  },
  content: {
    padding: 24,
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 16,
    marginBottom: 16,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f59e0b',
    marginBottom: 4,
  },
  versionText: {
    fontSize: 16,
    color: '#94a3b8',
    fontWeight: '500',
  },
  descriptionContainer: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 12,
    marginBottom: 32,
    width: '100%',
  },
  descriptionText: {
    color: '#cbd5e1',
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'center',
  },
  contactContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f8fafc',
    marginBottom: 16,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  contactText: {
    color: '#f8fafc',
    fontSize: 16,
    marginLeft: 12,
  },
  footerContainer: {
    alignItems: 'center',
    width: '100%',
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: '#334155',
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f8fafc',
    marginBottom: 12,
  },
  linkText: {
    color: '#f59e0b',
    fontSize: 16,
    marginBottom: 8,
  },
  copyrightText: {
    color: '#64748b',
    fontSize: 12,
    marginTop: 16,
    textAlign: 'center',
  },
});
