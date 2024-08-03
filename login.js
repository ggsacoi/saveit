// Importer les fonctions nécessaires de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Configuration de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA43D6CPzdkzfvm-yNmLlTeafMKE_AUdgw",
  authDomain: "x-pathway-421918.firebaseapp.com",
  projectId: "x-pathway-421918",
  storageBucket: "x-pathway-421918.appspot.com",
  messagingSenderId: "16124353370",
  appId: "1:16124353370:web:58ed21d55ee906f627f163",
  measurementId: "G-2HLPMNV82B"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Obtenir les instances des services
const auth = getAuth(app);
const database = getDatabase(app);

// Écouter l'événement DOMContentLoaded pour s'assurer que le DOM est complètement chargé
document.addEventListener('DOMContentLoaded', () => {
  // Obtenir le bouton d'envoi
  const sendButton = document.getElementById("envoi");

  if (sendButton) {
    sendButton.addEventListener("click", async (e) => {
      e.preventDefault();
      
      // Obtenir les valeurs d'email et de mot de passe lors du clic sur le bouton
      const email = document.getElementById("lemail").value;
      const password = document.getElementById("lemotdepasse").value;

      try {
        // Connexion de l'utilisateur
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // Utilisateur connecté
        const user = userCredential.user;
        alert(`Utilisateur connecté : ${user.email}`);
        // Redirection vers une autre page
        window.location.href = "index.html"; 
        // Vous pouvez maintenant utiliser l'objet user pour d'autres opérations
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Erreur (${errorCode}): ${errorMessage}`);
      }
    });
  } else {
    console.error("Bouton d'envoi introuvable");
  }
});