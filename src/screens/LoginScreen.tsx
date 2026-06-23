import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { doc, updateDoc, collection, query, where, getDocs } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth, db } from '../services/firebase';

export default function LoginScreen({ navigation }: any) {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const [resetModalVisible, setResetModalVisible] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetLoading, setResetLoading] = useState(false);
  const [resetMessage, setResetMessage] = useState('');
  const [resetError, setResetError] = useState(false);

  const handleLogin = async () => {
    setLoginError('');
    if (!email || !password) {
      setLoginError('Por favor, preencha todos os campos.');
      return;
    }
    setLoading(true);
    try {
      // Previne que o App.tsx derrube a sessão durante a transição
      await AsyncStorage.setItem('@login_timestamp', Date.now().toString());
      
      const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
      
      // Gera um Session ID único para esta sessão neste aparelho
      const newSessionId = Date.now().toString() + Math.random().toString(36).substring(2);
      
      // Salva no aparelho local
      await AsyncStorage.setItem('@help_multas_session_id', newSessionId);
      
      // Atualiza no banco de dados do usuário
      await updateDoc(doc(db, 'users', userCredential.user.uid), {
        sessionId: newSessionId
      });
    } catch (error: any) {
      setLoginError('E-mail ou senha incorretos. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!resetEmail) {
      setResetError(true);
      setResetMessage('Digite seu e-mail para continuar.');
      return;
    }
    setResetLoading(true);
    setResetMessage('');
    try {
      // Firebase by default hides if an email exists for security (Enumeration Protection).
      // So we must manually check our database first.
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('email', '==', resetEmail.trim()));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setResetError(true);
        setResetMessage('Este e-mail não está cadastrado no sistema.');
        setResetLoading(false);
        return;
      }

      await sendPasswordResetEmail(auth, resetEmail.trim());
      setResetError(false);
      setResetMessage('E-mail de recuperação enviado! Verifique sua caixa de entrada e a pasta de Spam.');
    } catch (error: any) {
      setResetError(true);
      setResetMessage('Erro ao enviar. Verifique se o e-mail está correto e cadastrado.');
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.title}>Help Multas</Text>
      <Text style={styles.subtitle}>Acesso Restrito</Text>

      <View style={styles.form}>
        <TextInput
          style={[styles.input, loginError ? styles.inputError : null]}
          placeholder="E-mail"
          placeholderTextColor="#64748b"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => { setEmail(text); setLoginError(''); }}
        />
        <View style={[styles.passwordContainer, loginError ? styles.inputError : null]}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Senha"
            placeholderTextColor="#64748b"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => { setPassword(text); setLoginError(''); }}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <MaterialIcons name={showPassword ? "visibility" : "visibility-off"} size={22} color="#94a3b8" />
          </TouchableOpacity>
        </View>

        {loginError ? <Text style={styles.loginErrorText}>{loginError}</Text> : null}

        <TouchableOpacity 
          style={{ alignItems: 'flex-end', marginBottom: 15 }} 
          onPress={() => {
            setResetEmail(email); // Puxa o email que ele já tinha digitado (se tiver)
            setResetMessage('');
            setResetModalVisible(true);
          }}
        >
          <Text style={{ color: '#94a3b8', fontSize: 14 }}>Esqueci a senha</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#0f172a" />
          ) : (
            <Text style={styles.buttonText}>Entrar</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.linkButton} 
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.linkText}>Não tem conta? Solicite Acesso</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={resetModalVisible}
        onRequestClose={() => setResetModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Recuperar Senha</Text>
              <TouchableOpacity onPress={() => setResetModalVisible(false)}>
                <Text style={styles.closeButtonText}>❌</Text>
              </TouchableOpacity>
            </View>
            
            <Text style={styles.modalSubtitle}>
              Enviaremos um link para o seu e-mail para você criar uma nova senha.
            </Text>

            <TextInput
              style={[styles.input, { marginBottom: 10 }]}
              placeholder="Digite seu e-mail cadastrado"
              placeholderTextColor="#64748b"
              keyboardType="email-address"
              autoCapitalize="none"
              value={resetEmail}
              onChangeText={setResetEmail}
            />

            {resetMessage ? (
              <Text style={[styles.resetMessage, resetError ? styles.resetError : styles.resetSuccess]}>
                {resetMessage}
              </Text>
            ) : null}

            <TouchableOpacity 
              style={styles.resetButton} 
              onPress={handleForgotPassword}
              disabled={resetLoading}
            >
              {resetLoading ? (
                <ActivityIndicator color="#0f172a" />
              ) : (
                <Text style={styles.resetButtonText}>Enviar Link de Recuperação</Text>
              )}
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f8fafc',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
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
  inputError: {
    borderColor: '#ef4444',
  },
  loginErrorText: {
    color: '#ef4444',
    fontSize: 14,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
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
    marginBottom: 10,
  },
  modalTitle: {
    color: '#f8fafc',
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButtonText: {
    fontSize: 18,
  },
  modalSubtitle: {
    color: '#94a3b8',
    fontSize: 14,
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: '#f59e0b',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  resetButtonText: {
    color: '#0f172a',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resetMessage: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  resetError: {
    color: '#ef4444',
  },
  resetSuccess: {
    color: '#22c55e',
  }
});
