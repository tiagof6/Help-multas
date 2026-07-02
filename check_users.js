const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');

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
const db = getFirestore(app);

async function checkUsers() {
  console.log('Buscando usuários...');
  const querySnapshot = await getDocs(collection(db, "users"));
  const users = [];
  querySnapshot.forEach((docSnap) => {
    users.push({ id: docSnap.id, ...docSnap.data() });
  });

  console.log(`Total de usuários: ${users.length}`);
  
  users.sort((a, b) => {
    const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
    return dateB - dateA;
  });

  console.log('Últimos 10 usuários cadastrados:');
  users.slice(0, 10).forEach(u => {
    console.log(`- ${u.name} | Email: ${u.email} | Status: ${u.status} | Data: ${u.createdAt}`);
  });

  process.exit(0);
}

checkUsers().catch(console.error);
