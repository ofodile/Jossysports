import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAw7YGGkjqbw3a-Wz7Yoa5YPtWDWlqMDdE",
  authDomain: "jossysports-77674.firebaseapp.com",
  projectId: "jossysports-77674",
  storageBucket: "jossysports-77674.firebasestorage.app",
  messagingSenderId: "348697910521",
  appId: "1:348697910521:web:6b07ce034f3be4a7ae1628"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
