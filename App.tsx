import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';

import DashboardScreen from './src/screens/DashboardScreen';
import InfractionSearchScreen from './src/screens/InfractionSearchScreen';
import DetailScreen from './src/screens/DetailScreen';
import PlateSearchScreen from './src/screens/PlateSearchScreen';
import ResolutionScreen from './src/screens/ResolutionScreen';
import TrafficSignsScreen from './src/screens/TrafficSignsScreen';
import CTBScreen from './src/screens/CTBScreen';
import CTBDetailScreen from './src/screens/CTBDetailScreen';
import MercosulConverterScreen from './src/screens/MercosulConverterScreen';
import LicensingTableScreen from './src/screens/LicensingTableScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import AdminScreen from './src/screens/AdminScreen';
import NotesScreen from './src/screens/NotesScreen';
import QuickDraftScreen from './src/screens/QuickDraftScreen';

import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth, db } from './src/services/firebase';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
  InfractionSearch: undefined;
  Detail: { infraction: any };
  PlateSearch: undefined;
  Resolution: undefined;
  TrafficSigns: undefined;
  CTB: undefined;
  CTBDetail: { chapter: any };
  MercosulConverter: undefined;
  LicensingTable: undefined;
  Admin: undefined;
  Notes: undefined;
  QuickDraft: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#0f172a' } }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#0f172a' } }}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="InfractionSearch" component={InfractionSearchScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="PlateSearch" component={PlateSearchScreen} />
      <Stack.Screen name="Resolution" component={ResolutionScreen} />
      <Stack.Screen name="TrafficSigns" component={TrafficSignsScreen} />
      <Stack.Screen name="CTB" component={CTBScreen} />
      <Stack.Screen name="CTBDetail" component={CTBDetailScreen} />
      <Stack.Screen name="MercosulConverter" component={MercosulConverterScreen} />
      <Stack.Screen name="LicensingTable" component={LicensingTableScreen} />
      <Stack.Screen name="Admin" component={AdminScreen} />
      <Stack.Screen name="Notes" component={NotesScreen} />
      <Stack.Screen name="QuickDraft" component={QuickDraftScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [userStatus, setUserStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribeSnapshot: any = null;

    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        unsubscribeSnapshot = onSnapshot(doc(db, 'users', currentUser.uid), async (userDoc) => {
          if (userDoc.exists()) {
            const data = userDoc.data();
            setUserStatus(data.status);
            
            try {
              const localSessionId = await AsyncStorage.getItem('@help_multas_session_id');
              if (data.sessionId && localSessionId && data.sessionId !== localSessionId) {
                if (window && window.alert) {
                  window.alert('Acesso Derrubado: Sua conta foi acessada em outro dispositivo.');
                }
                signOut(auth);
              }
            } catch (e) {
              console.error(e);
            }
          } else {
            setUserStatus('desconhecido');
          }
          setLoading(false);
        }, (error) => {
          console.error(error);
          setLoading(false);
        });
      } else {
        setUser(null);
        setUserStatus(null);
        if (unsubscribeSnapshot) {
          unsubscribeSnapshot();
        }
        setLoading(false);
      }
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeSnapshot) {
        unsubscribeSnapshot();
      }
    };
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, backgroundColor: '#0f172a', justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#f59e0b" />
      </View>
    );
  }

  if (user && userStatus === 'aguardando') {
    return (
      <View style={{ flex: 1, backgroundColor: '#0f172a', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <Text style={{ color: '#f8fafc', fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>Conta em Análise</Text>
        <Text style={{ color: '#94a3b8', fontSize: 16, textAlign: 'center', marginBottom: 30 }}>
          Sua conta foi criada e está aguardando a aprovação do administrador para liberar o acesso ao Help Multas.
        </Text>
        <TouchableOpacity style={{ backgroundColor: '#f59e0b', padding: 15, borderRadius: 8 }} onPress={() => signOut(auth)}>
          <Text style={{ color: '#0f172a', fontWeight: 'bold' }}>Sair e Voltar ao Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (user && userStatus === 'bloqueado') {
    return (
      <View style={{ flex: 1, backgroundColor: '#0f172a', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <Text style={{ color: '#ef4444', fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>Acesso Bloqueado</Text>
        <Text style={{ color: '#94a3b8', fontSize: 16, textAlign: 'center', marginBottom: 30 }}>
          O seu acesso ao aplicativo foi revogado pelo administrador.
        </Text>
        <TouchableOpacity style={{ backgroundColor: '#f59e0b', padding: 15, borderRadius: 8 }} onPress={() => signOut(auth)}>
          <Text style={{ color: '#0f172a', fontWeight: 'bold' }}>Sair da Conta</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <View style={{ flex: 1, backgroundColor: '#0f172a' }}>
          {(!user || userStatus !== 'ativo') ? <AuthStack /> : <MainStack />}
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
