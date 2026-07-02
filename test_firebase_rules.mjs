import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCI1cCVUqd2HEKE_-0HTpyMadfRsSf638M",
  authDomain: "help-multas-512b5.firebaseapp.com",
  projectId: "help-multas-512b5",
  storageBucket: "help-multas-512b5.firebasestorage.app",
  messagingSenderId: "901760153562",
  appId: "1:901760153562:web:5f1d02643a63b92131b2e3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

async function test() {
  try {
    await signInWithEmailAndPassword(auth, 'acerola106@gmail.com', '123456');
    console.log("Logged in!");
    
    console.log("Adding doc...");
    const chatRef = collection(db, 'chats');
    const docRef = await addDoc(chatRef, { test: true });
    console.log("Added doc", docRef.id);
    
    console.log("Deleting doc...");
    await deleteDoc(doc(db, 'chats', docRef.id));
    console.log("Deleted successfully.");
  } catch (e) {
    console.error("Error:", e);
  }
}

test();
