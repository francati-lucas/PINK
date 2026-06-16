import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCxTlhcpC6BmpS3sOAwGNG9wX6eT999JJY",
  authDomain: "pink-a1f66.firebaseapp.com",
  projectId: "pink-a1f66",
  storageBucket: "pink-a1f66.firebasestorage.app",
  messagingSenderId: "386313362731",
  appId: "1:386313362731:web:57c6037eacbc2efc07796e"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)
