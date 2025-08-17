// Initialisation Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInAnonymously } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "VOTRE_CLE_API",
  authDomain: "VOTRE_PROJET.firebaseapp.com",
  projectId: "VOTRE_PROJET"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Connexion automatique anonyme
export function initAuth() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      localStorage.setItem('isLoggedIn', 'true');
      if (window.location.pathname === '/index.html') {
        navigateTo('/dashboard.html');
      }
    } else {
      signInAnonymously(auth).catch(console.error);
    }
  });
}

// Redirection
export function navigateTo(path) {
  window.location.href = path;
}