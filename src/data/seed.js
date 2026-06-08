// Script de seed — rode no console do browser em http://localhost:5173
// Cole todo esse código no DevTools > Console

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js'
import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyCxTlhcpC6BmpS3sOAwGNG9wX6eT999JJY",
  authDomain: "pink-a1f66.firebaseapp.com",
  projectId: "pink-a1f66",
  storageBucket: "pink-a1f66.firebasestorage.app",
  messagingSenderId: "386313362731",
  appId: "1:386313362731:web:57c6037eacbc2efc07796e"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const series = [
  {
    titulo: 'Quando desistir é mais fácil, MAS eu escolho persistir',
    descricao: 'Quem nunca viveu momentos na vida em que pensou: "É mais fácil desistir disso... porque o fardo está muito pesado"? O que será que nos leva a pensar assim — e como escolher persistir mesmo assim.',
    imagem: '',
    tag: 'Persistência',
    destaque: true,
    criadoEm: Date.now(),
  },
  {
    titulo: 'Três Grandes Desafios dos Relacionamentos',
    descricao: 'Relacionamentos fazem parte da vida. Todos nós nos relacionamos uns com os outros. O que os determina é a base que sustenta cada um deles — e os desafios que precisamos vencer.',
    imagem: '',
    tag: 'Relacionamentos',
    destaque: true,
    criadoEm: Date.now() - 1000,
  },
  {
    titulo: 'Entendendo o processo de como Deus me faz crescer',
    descricao: 'Nós fomos criadas para crescer. A nossa própria formação aponta para isso. Primeiro somos apenas um embrião e, durante nove meses, crescemos em tamanho, complexidade e maturidade.',
    imagem: '',
    tag: 'Crescimento',
    destaque: true,
    criadoEm: Date.now() - 2000,
  },
]

for (const s of series) {
  await addDoc(collection(db, 'series'), s)
  console.log('✅ Adicionada:', s.titulo)
}
console.log('🎉 Seed completo!')
