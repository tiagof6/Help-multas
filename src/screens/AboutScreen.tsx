import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Linking, ScrollView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import appJson from '../../app.json';

export default function AboutScreen() {
  const navigation = useNavigation();
  const version = appJson.expo.version || '1.0.0';

  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');

  const TERMS_OF_USE = `1. Aceitação
Ao acessar e usar o aplicativo Help Multas, você concorda em cumprir e ficar vinculado aos seguintes termos de uso.

2. Uso do Aplicativo
O Help Multas foi desenvolvido exclusivamente para fins de consulta e auxílio rápido no trabalho de agentes de trânsito. O aplicativo NÃO representa uma entidade governamental oficial.

3. Responsabilidade
As informações fornecidas (CTB, Manuais, Resoluções) são compiladas de fontes públicas, porém o usuário deve sempre se resguardar verificando a norma original. O criador do aplicativo não se responsabiliza por autuações ou decisões tomadas com base nas informações consultadas.

4. Propriedade Intelectual
Todos os direitos de layout e organização estrutural do aplicativo pertencem aos seus desenvolvedores. Os textos de lei reproduzidos são de domínio público.`;

  const PRIVACY_POLICY = `1. Coleta de Dados
O Help Multas se compromete rigorosamente com a privacidade dos seus usuários. Não coletamos dados pessoais de forma oculta nem rastreamos sua localização em segundo plano.

2. Autenticação e Banco de Dados
O aplicativo utiliza serviços de autenticação seguros (Firebase) que requerem e-mail e senha apenas para criar uma conta e proteger seu acesso. Esses dados são criptografados de ponta a ponta.

3. Sigilo de Anotações
Qualquer anotação feita na ferramenta "Anotar Placa" ou "Bloco de Notas" fica salva apenas na sua conta privada. Nenhum dado de placa ou infração rascunhada é compartilhado com terceiros ou com qualquer órgão do governo.

4. Consentimento
Ao criar uma conta e utilizar o app, você concorda com a forma como suas informações de login e rascunhos são armazenadas na nuvem para seu próprio acesso exclusivo.`;

  const openModal = (title: string, content: string) => {
    setModalTitle(title);
    setModalContent(content);
    setModalVisible(true);
  };

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
          <TouchableOpacity onPress={() => openModal('Termos de Uso', TERMS_OF_USE)}>
            <Text style={styles.linkText}>Termos de Uso</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openModal('Política de Privacidade', PRIVACY_POLICY)}>
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

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{modalTitle}</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButtonText}>❌</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.modalBody}>
              <Text style={styles.modalText}>{modalContent}</Text>
            </ScrollView>
            <TouchableOpacity style={styles.modalCloseBtn} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCloseBtnText}>Entendi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    maxHeight: '80%',
    padding: 20,
    borderWidth: 1,
    borderColor: '#334155',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
    paddingBottom: 12,
  },
  modalTitle: {
    color: '#f8fafc',
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButtonText: {
    fontSize: 18,
  },
  modalBody: {
    marginBottom: 20,
  },
  modalText: {
    color: '#cbd5e1',
    fontSize: 15,
    lineHeight: 24,
  },
  modalCloseBtn: {
    backgroundColor: '#f59e0b',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalCloseBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
