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
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeResponsibility, setAgreeResponsibility] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', password: '', confirmPassword: '', terms: '', general: '' });

  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');

  const hasMinLength = password.length >= 6;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasSpecialChar = /[!@#\$%\^&\*\(\)_\+\-\=\{\}\[\]\|\\:;"'<>,\.\?\/]/.test(password);

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
    let newErrors = { name: '', email: '', password: '', confirmPassword: '', terms: '', general: '' };
    let hasError = false;

    if (!name.trim()) { newErrors.name = 'Por favor, preencha o Nome Completo.'; hasError = true; }
    
    if (!email.trim()) { newErrors.email = 'Por favor, preencha o E-mail.'; hasError = true; }
    else if (!email.includes('@')) { newErrors.email = 'Por favor, insira um e-mail válido.'; hasError = true; }
    
    if (!password) { newErrors.password = 'A senha é obrigatória.'; hasError = true; }
    else if (!hasMinLength || !hasUpperCase || !hasSpecialChar) {
      newErrors.password = 'A senha não atende a todos os requisitos abaixo.'; hasError = true;
    }

    if (!confirmPassword) { newErrors.confirmPassword = 'Por favor, repita a senha.'; hasError = true; }
    else if (password !== confirmPassword) { newErrors.confirmPassword = 'As senhas digitadas não são iguais.'; hasError = true; }

    if (!agreeTerms || !agreeResponsibility) { 
      newErrors.terms = 'É necessário ler e aceitar os Termos e declarar sua responsabilidade para criar a conta.'; 
      hasError = true; 
    }

    setErrors(newErrors);

    if (hasError) return;

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
      setErrors(prev => ({ ...prev, general: 'Erro no Firebase: ' + error.message }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.title}>Novo Agente</Text>
      <Text style={styles.subtitle}>Solicitar Acesso ao Help Multas</Text>

      <ScrollView style={styles.form} showsVerticalScrollIndicator={false}>
        {errors.general ? <Text style={styles.generalError}>{errors.general}</Text> : null}

        <TextInput
          style={[styles.input, errors.name ? styles.inputError : null]}
          placeholder="Nome Completo"
          placeholderTextColor="#64748b"
          autoCapitalize="words"
          value={name}
          onChangeText={(text) => { setName(text); setErrors(prev => ({...prev, name: ''})); }}
        />
        {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}

        <TextInput
          style={[styles.input, errors.email ? styles.inputError : null]}
          placeholder="E-mail Institucional ou Pessoal"
          placeholderTextColor="#64748b"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => { setEmail(text); setErrors(prev => ({...prev, email: ''})); }}
        />
        {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

        <View style={[styles.passwordContainer, errors.password ? styles.inputError : null]}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Senha"
            placeholderTextColor="#64748b"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => { setPassword(text); setErrors(prev => ({...prev, password: ''})); }}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <MaterialIcons name={showPassword ? "visibility" : "visibility-off"} size={22} color="#94a3b8" />
          </TouchableOpacity>
        </View>
        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

        <View style={styles.requirementsContainer}>
          <Text style={[styles.reqText, hasMinLength ? styles.reqMet : styles.reqMissing]}>
            {hasMinLength ? '✓' : '○'} No mínimo 6 caracteres
          </Text>
          <Text style={[styles.reqText, hasUpperCase ? styles.reqMet : styles.reqMissing]}>
            {hasUpperCase ? '✓' : '○'} Pelo menos uma letra maiúscula
          </Text>
          <Text style={[styles.reqText, hasSpecialChar ? styles.reqMet : styles.reqMissing]}>
            {hasSpecialChar ? '✓' : '○'} Pelo menos um caractere especial (ex: @, !, #)
          </Text>
        </View>

        <View style={[styles.passwordContainer, errors.confirmPassword ? styles.inputError : null]}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Repetir Senha"
            placeholderTextColor="#64748b"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={(text) => { setConfirmPassword(text); setErrors(prev => ({...prev, confirmPassword: ''})); }}
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
            <MaterialIcons name={showConfirmPassword ? "visibility" : "visibility-off"} size={22} color="#94a3b8" />
          </TouchableOpacity>
        </View>
        {errors.confirmPassword ? <Text style={styles.errorText}>{errors.confirmPassword}</Text> : null}

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

        {errors.terms ? <Text style={styles.errorTextTerms}>{errors.terms}</Text> : null}

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
  inputError: {
    borderColor: '#ef4444',
  },
  errorText: {
    color: '#ef4444',
    fontSize: 12,
    marginTop: -10,
    marginBottom: 15,
    marginLeft: 5,
  },
  errorTextTerms: {
    color: '#ef4444',
    fontSize: 13,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  generalError: {
    color: '#ef4444',
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ef4444',
  },
  requirementsContainer: {
    backgroundColor: 'rgba(15, 23, 42, 0.5)',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    marginTop: -5,
  },
  reqText: {
    fontSize: 12,
    marginBottom: 4,
  },
  reqMet: {
    color: '#22c55e',
  },
  reqMissing: {
    color: '#64748b',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0f172a',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#334155',
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    color: '#f8fafc',
    padding: 15,
  },
  eyeIcon: {
    padding: 15,
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
