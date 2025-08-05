import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase config object
// Replace with your actual Firebase config from the Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyCclKZK4K0aZTjiudZxdoVUeQMhUFjkjjA",
    authDomain: "ourweddingapp-498bb.firebaseapp.com",
    projectId: "ourweddingapp-498bb",
    storageBucket: "ourweddingapp-498bb.firebasestorage.app",
    messagingSenderId: "867638456354",
    appId: "1:867638456354:web:6e1f7b7935fd9beade9a7b",
    measurementId: "G-C5274CFW1X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth (Firebase automatically handles persistence in React Native)
const auth = getAuth(app);

export { auth };
export default app;
