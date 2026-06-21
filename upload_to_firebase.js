const fs = require('fs');
const path = require('path');
const { initializeApp } = require('firebase/app');
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
const db = getFirestore(app);

const filePath = path.join(__dirname, 'src', 'data', 'infractions.ts');
const content = fs.readFileSync(filePath, 'utf8');

const arrayStart = content.indexOf('export const infractionsData: Infraction[] = [');
let jsCode = content.substring(arrayStart).replace('export const infractionsData: Infraction[] = ', '').trim();
if (jsCode.endsWith(';')) jsCode = jsCode.slice(0, -1);

let infractionsArray;
try {
  infractionsArray = eval(`(${jsCode})`);
} catch (e) {
  console.error("Error parsing infractions array", e);
  process.exit(1);
}

async function upload() {
  console.log(`Iniciando upload de ${infractionsArray.length} infrações para o Firebase...`);
  let count = 0;
  for (const infraction of infractionsArray) {
    const docRef = doc(db, 'infractions', infraction.id);
    await setDoc(docRef, infraction);
    count++;
    if (count % 50 === 0) console.log(`Enviados ${count}...`);
  }
  console.log('Upload concluído com sucesso!');
  process.exit(0);
}

upload().catch(console.error);
