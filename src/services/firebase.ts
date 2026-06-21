import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

// IMPORTANTE: Substitua os valores abaixo pelas chaves do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCI1cCVUqd2HEKE_-0HTpyMadfRsSf638M",
  authDomain: "help-multas-512b5.firebaseapp.com",
  projectId: "help-multas-512b5",
  storageBucket: "help-multas-512b5.firebasestorage.app",
  messagingSenderId: "901760153562",
  appId: "1:901760153562:web:5f1d02643a63b92131b2e3",
  measurementId: "G-R6T9B9EWW9"
};

const app = initializeApp(firebaseConfig);

let auth: any;
if (Platform.OS === 'web') {
  // Na web o Firebase já gerencia a persistência automaticamente
  auth = getAuth(app);
} else {
  // No celular usamos o AsyncStorage
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
}

const db = getFirestore(app);

export { app, auth, db };
