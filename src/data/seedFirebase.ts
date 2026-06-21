import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { infractionsData } from './infractions';

export async function seedInfractionsToFirebase() {
  try {
    console.log('Iniciando upload de infrações para o Firebase...');
    const infractionsRef = collection(db, 'infractions');
    
    // Como são quase 400, faremos um loop simples com setDoc.
    // Em produção seria melhor usar batch, mas para rodar 1x tá ótimo.
    for (const infraction of infractionsData) {
      // Usaremos o próprio ID gerado (que era randomico) ou criaremos um
      const docRef = doc(infractionsRef, infraction.id);
      await setDoc(docRef, infraction);
      console.log(`Infração ${infraction.codigo} salva.`);
    }
    
    console.log('Upload concluído com sucesso!');
    return true;
  } catch (error) {
    console.error('Erro ao fazer upload:', error);
    return false;
  }
}
