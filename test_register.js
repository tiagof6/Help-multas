const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth');
const { getFirestore, doc, setDoc } = require('firebase/firestore');

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
const auth = getAuth(app);
const db = getFirestore(app);

async function testRegister() {
  try {
    console.log('Tentando registrar um usuário de teste...');
    const randomEmail = `test_${Date.now()}@test.com`;
    const userCredential = await createUserWithEmailAndPassword(auth, randomEmail, "SenhaForte123!");
    
    console.log('Usuário criado no Auth com sucesso:', userCredential.user.uid);
    
    await setDoc(doc(db, 'users', userCredential.user.uid), {
      name: "Agente Teste Bot",
      email: randomEmail,
      status: 'aguardando', 
      createdAt: new Date().toISOString(),
      sessionId: "test-session",
      termsAcceptedAt: new Date().toISOString(),
      responsibilityAccepted: true
    });
    
    console.log('Documento criado no Firestore com sucesso!');
  } catch (error) {
    console.error('Erro:', error);
  }
  process.exit(0);
}

testRegister();
