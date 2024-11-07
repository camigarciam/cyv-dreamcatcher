// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB9IHF3woWSC7rwVbcwAkgSshYud00YrU0",
    authDomain: "cyv-dreamcatcher.firebaseapp.com",
    projectId: "cyv-dreamcatcher",
    storageBucket: "cyv-dreamcatcher.firebasestorage.app",
    messagingSenderId: "318574545226",
    appId: "1:318574545226:web:c1ab07d6dab4aaf126d9b3",
    measurementId: "G-RFP3DQB8N8"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
