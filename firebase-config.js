// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-storage.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCGmQHwMa9wvcX_yDxB2w0CLxXVfuZd1Xw",
    authDomain: "receipts-app-74f00.firebaseapp.com",
    projectId: "receipts-app-74f00",
    storageBucket: "receipts-app-74f00.firebasestorage.app",
    messagingSenderId: "1061067562627",
    appId: "1:1061067562627:web:d2400c87586f0e1b1c05b6",
    measurementId: "G-W4NN3XYQHM"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
