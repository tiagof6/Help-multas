import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator, ScrollView, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth, db } from '../services/firebase';

export default function RegisterScreen({ navigation }: any) {
  const insets = useSafeAreaInsets();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeResponsibility, setAgreeResponsibility] = useState(false);
  const [loading, setLoading] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');

  const TERMS_OF_USE = `1. Aceitação
Ao acessar e usar o aplicativo Help Multas, você concorda em cumprir e ficar vinculado aos seguintes termos de uso.

2. Uso do Aplicativo
O Help Multas foi desenvolvido exclusivamente para fins de consulta e auxílio rápido no trabalho de agentes de trânsito e segurança pública. O aplicativo NÃO representa uma entidade governamental oficial.

3. Responsabilidade
As informações fornecidas (CTB, Manuais, Resoluções) são compiladas de fontes públicas, porém o usuário deve sempre se resguardar verificando a norma original no site oficial do governo. O criador do aplicativo não se responsabiliza por autuações, procedimentos ou decisões tomadas com base nas informações consultadas.

4. Propriedade Intelectual
Todos os direitos de layout e organização estrutural do aplicativo pertencem aos seus desenvolvedores. Os textos de lei reproduzidos são de domínio público.`;

  const PRIVACY_POLICY = `1. Coleta de Dados
O Help Multas se compromete rigorosamente com a privacidade dos seus usuários. Não coletamos dados pessoais de forma oculta nem rastreamos sua localização em segundo plano.

2. Autenticação e Banco de Dados
O aplicativo utiliza serviços de autenticação seguros que requerem e-mail, matrícula e senha apenas para criar uma conta, validar sua identidade e proteger seu acesso. Esses dados são criptografados.

3. Sigilo de Anotações
Qualquer anotação feita na ferramenta "Anotar Placa" ou "Bloco de Notas" fica salva apenas na sua conta privada. Nenhum dado de placa ou infração rascunhada é compartilhado com terceiros ou com qualquer órgão do governo.

4. Consentimento
Ao criar uma conta e utilizar o app, você concorda com a forma como suas informações de login e rascunhos são armazenadas na nuvem para seu próprio acesso exclusivo.`;

  const openModal = (title: string, content: string) => {
    setModalTitle(title);
    setModalContent(content);
    setModalVisible(true);
  };

  const handleRegister = async () => {
    if (!email || !password || !name) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }
    if (!agreeTerms || !agreeResponsibility) {
      Alert.alert('Aviso Jurídico', 'Você precisa ler e concordar com os Termos e Políticas, além de confirmar a sua responsabilidade no uso do aplicativo para criar a conta.');
      return;
    }
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password);
      
      const newSessionId = Date.now().toString() + Math.random().toString(36).substring(2);
      await AsyncStorage.setItem('@help_multas_session_id', newSessionId);

      // Salva os dados no Firestore com status inicial aguardando aprovação
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        name: name.trim(),
        email: email.trim(),
        status: 'aguardando', 
        createdAt: new Date().toISOString(),
        sessionId: newSessionId,
        termsAcceptedAt: new Date().toISOString(),
        responsibilityAccepted: true
      });
      
      Alert.alert('Sucesso', 'Conta criada! Você precisará aguardar a aprovação do administrador para usar o app.');
    } catch (error: any) {
      Alert.alert('Erro no Cadastro', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.title}>Novo Agente</Text>
      <Text style={styles.subtitle}>Solicitar Acesso ao Help Multas</Text>

      <ScrollView style={styles.form} showsVerticalScrollIndicator={false}>
        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          placeholderTextColor="#64748b"
          autoCapitalize="words"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail Institucional ou Pessoal"
          placeholderTextColor="#64748b"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#64748b"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkbox} onPress={() => setAgreeTerms(!agreeTerms)}>
            <MaterialIcons name={agreeTerms ? "check-box" : "check-box-outline-blank"} size={24} color="#f59e0b" />
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>
            Li e concordo com os{' '}
            <Text style={styles.linkTextInline} onPress={() => openModal('Termos de Uso', TERMS_OF_USE)}>Termos de Uso</Text>
            {' '}e a{' '}
            <Text style={styles.linkTextInline} onPress={() => openModal('Política de Privacidade', PRIVACY_POLICY)}>Política de Privacidade</Text>.
          </Text>
        </View>

        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkbox} onPress={() => setAgreeResponsibility(!agreeResponsibility)}>
            <MaterialIcons name={agreeResponsibility ? "check-box" : "check-box-outline-blank"} size={24} color="#f59e0b" />
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>
            Declaro ser agente público e assumo total responsabilidade pelo uso das consultas deste app (não governamental) no meu trabalho.
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={handleRegister}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#0f172a" />
          ) : (
            <Text style={styles.buttonText}>Criar Conta</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.linkButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.linkText}>Já tem conta? Fazer Login</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        animationType="slide"
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
              <Text style={styles.modalCloseBtnText}>Entendi e Concordo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f8fafc',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#94a3b8',
    textAlign: 'center',
    marginBottom: 40,
  },
  form: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
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
  button: {
    backgroundColor: '#f59e0b',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#0f172a',
    fontWeight: 'bold',
    fontSize: 16,
  },
  linkButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    color: '#f59e0b',
    fontSize: 14,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
    paddingRight: 10,
  },
  checkbox: {
    marginRight: 10,
    marginTop: 2,
  },
  checkboxLabel: {
    color: '#cbd5e1',
    fontSize: 13,
    lineHeight: 20,
    flex: 1,
  },
  linkTextInline: {
    color: '#f59e0b',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
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
    fontSize: 14,
    lineHeight: 22,
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
  }
});
