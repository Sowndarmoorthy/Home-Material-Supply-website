import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDOFZLhMNcQMgZy0CPevKUKZA8dvvBH3N4",
  authDomain: "mca2025-project.firebaseapp.com",
  projectId: "mca2025-project",
  storageBucket: "mca2025-project.firebasestorage.app",
  messagingSenderId: "45614179848",
  appId: "1:45614179848:web:6f9a436aa540dbf5e193bd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getAuth(app);
export const storage = getStorage(app)


export default app;