import { db } from '../firebase'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
} from 'firebase/firestore'



const COLLECTION = 'series'

// Buscar todas as séries do Firestore
export async function getSeries() {
  const q = query(collection(db, COLLECTION), orderBy('criadoEm', 'desc'))
  const snapshot = await getDocs(q)
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
}

// Adicionar nova série
export async function addSerie(data) {
  await addDoc(collection(db, COLLECTION), {
    ...data,
    criadoEm: Date.now(),
  })
}

// Atualizar série existente
export async function updateSerie(id, data) {
  await updateDoc(doc(db, COLLECTION, id), data)
}

// Remover série
export async function deleteSerie(id) {
  await deleteDoc(doc(db, COLLECTION, id))
}
