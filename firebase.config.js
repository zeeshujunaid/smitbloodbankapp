// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCggppdKRo_JUZMAzW-QIWtl4Huv0zMwzY",
  authDomain: "bloodbank-app-db766.firebaseapp.com",
  projectId: "bloodbank-app-db766",
  storageBucket: "bloodbank-app-db766.appspot.com",
  messagingSenderId: "207215288827",
  appId: "1:207215288827:web:8ee569e73101bf88166b5e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
