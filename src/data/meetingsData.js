import { db } from '../firebase'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc
} from 'firebase/firestore'

const COLLECTION = 'meetings'

const DEFAULT_MEETINGS = [
  {
    city: 'Campinas/SP',
    schedule: '28/Fev, 21/Mar, 10/Abr, 23/Maio, 19 e 20/Jun, 18/Jul, 29/Ago, 18/Set, 17/Out, 13/Nov',
    badge: 'Matriz',
    key: 'campinas'
  },
  {
    city: 'Gurupi/TO',
    schedule: '10/Fev (20h), 10/Mar (20h), 07/Abr (20h), 12/Maio (20h), 26 e 27/Jun - Pink Love (20h)',
    key: 'gurupi'
  },
  {
    city: 'Paraupebas/PA',
    schedule: 'Agenda de encontros a definir (consulte a liderança local)',
    key: 'paraupebas'
  },
  {
    city: 'Serra/ES',
    schedule: '28/Fev, 21/Mar, 18/Abr (Aniversário), 16/Maio, 20/Jun, 25/Jul, 22/Ago, 19/Set, 17/Out, 07/Nov',
    key: 'serra'
  }
]

export async function getMeetings() {
  try {
    const snapshot = await getDocs(collection(db, COLLECTION))
    let list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
    
    if (list.length === 0) {
      // Seed Firestore with default meetings
      for (const item of DEFAULT_MEETINGS) {
        const docRef = await addDoc(collection(db, COLLECTION), item)
        list.push({ id: docRef.id, ...item })
      }
    } else {
      // MIGRATION: Check if any item contains 'recife' or old schedules and update them
      let migrated = false;
      for (let item of list) {
        if (item.key === 'recife' || (item.city && item.city.includes('Recife'))) {
          const updatedData = {
            city: 'Paraupebas/PA',
            schedule: 'Agenda de encontros a definir (consulte a liderança local)',
            key: 'paraupebas',
            badge: ''
          };
          await updateDoc(doc(db, COLLECTION, item.id), updatedData);
          Object.assign(item, updatedData);
          migrated = true;
        } else if (item.key === 'campinas' && (item.schedule && (item.schedule.includes('Todo 2º') || item.schedule.includes('Todo 2o')))) {
          const updatedData = { schedule: '28/Fev, 21/Mar, 10/Abr, 23/Maio, 19 e 20/Jun, 18/Jul, 29/Ago, 18/Set, 17/Out, 13/Nov' };
          await updateDoc(doc(db, COLLECTION, item.id), updatedData);
          Object.assign(item, updatedData);
          migrated = true;
        } else if (item.key === 'gurupi' && (item.schedule && item.schedule.includes('Toda 3ª'))) {
          const updatedData = { schedule: '10/Fev (20h), 10/Mar (20h), 07/Abr (20h), 12/Maio (20h), 26 e 27/Jun - Pink Love (20h)' };
          await updateDoc(doc(db, COLLECTION, item.id), updatedData);
          Object.assign(item, updatedData);
          migrated = true;
        } else if (item.key === 'serra' && (item.schedule && item.schedule.includes('Toda 2ª'))) {
          const updatedData = { schedule: '28/Fev, 21/Mar, 18/Abr (Aniversário), 16/Maio, 20/Jun, 25/Jul, 22/Ago, 19/Set, 17/Out, 07/Nov' };
          await updateDoc(doc(db, COLLECTION, item.id), updatedData);
          Object.assign(item, updatedData);
          migrated = true;
        }
      }
      if (migrated) {
        const snapshotReload = await getDocs(collection(db, COLLECTION));
        list = snapshotReload.docs.map((d) => ({ id: d.id, ...d.data() }));
      }
    }
    return list;
  } catch (error) {
    console.error("Erro ao buscar encontros no Firestore:", error)
    return DEFAULT_MEETINGS.map((m, index) => ({ id: `fallback-${index}`, ...m }))
  }
}

export async function updateMeeting(id, data) {
  await updateDoc(doc(db, COLLECTION, id), data)
}
