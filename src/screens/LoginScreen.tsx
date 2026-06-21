import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth, db } from '../services/firebase';

export default function LoginScreen({ navigation }: any) {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Preencha todos os campos!');
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
      Alert.alert('Erro no Login', 'Usuário não encontrado ou senha incorreta.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      Alert.alert('Aviso', 'Digite o seu e-mail no campo acima e clique em "Esqueci a senha" novamente.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email.trim());
      Alert.alert('Sucesso!', 'Um link para redefinir sua senha foi enviado para o seu e-mail. Verifique a caixa de entrada (e o Spam).');
    } catch (error: any) {
      Alert.alert('Erro', 'Não foi possível enviar o e-mail. Tem certeza que o e-mail está correto?');
    }
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.title}>Help Multas</Text>
      <Text style={styles.subtitle}>Acesso Restrito</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
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

        <TouchableOpacity 
          style={{ alignItems: 'flex-end', marginBottom: 15 }} 
          onPress={handleForgotPassword}
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
  }
});
