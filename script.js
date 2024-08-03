// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Fonction pour gérer la connexion de l'utilisateur
const userSignIn = async () => {
  try {
    // Détection de l'appareil : si mobile, utiliser signInWithRedirect
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      // Pour les appareils mobiles
      await signInWithRedirect(auth, provider);
    } else {
      // Pour les ordinateurs de bureau
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Utilisateur connecté:", user);
      // Mettre à jour l'interface utilisateur
      updateUI(user);
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Erreur (${errorCode}): ${errorMessage}`);
    // Afficher une alerte en cas d'erreur
    alert(`Erreur lors de la connexion: ${errorMessage}`);
  }
};

// Fonction pour gérer la déconnexion de l'utilisateur
const userSignOut = async () => {
  try {
    await signOut(auth);
    console.log("Utilisateur déconnecté avec succès.");
    alert("Vous avez été déconnecté.");
    // Mettre à jour l'interface utilisateur
    updateUI(null);
  } catch (error) {
    console.error("Erreur lors de la déconnexion:", error);
    alert("Erreur lors de la déconnexion.");
  }
};

// Gestion de l'état de l'authentification
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("L'utilisateur est connecté:", user);
    // Mettre à jour l'interface utilisateur
    updateUI(user);
  } else {
    console.log("Aucun utilisateur n'est connecté.");
    // Mettre à jour l'interface utilisateur
    updateUI(null);
  }
});

// Gérer le résultat de la redirection (pour mobile)
const handleRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth);
    if (result) {
      const user = result.user;
      console.log("Utilisateur connecté après redirection:", user);
      // Mettre à jour l'interface utilisateur
      updateUI(user);
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Erreur lors de la redirection (${errorCode}): ${errorMessage}`);
  }
};

// Appeler la fonction pour vérifier le résultat de la redirection
handleRedirectResult();

document.addEventListener("DOMContentLoaded", () => {
  const signInButton = document.getElementById("logbutton");
  const signOutButton = document.getElementById("logoutbutton");

  if (signInButton) {
    signInButton.addEventListener("click", userSignIn);
  } else {
    console.error("Bouton de connexion introuvable");
  }

  if (signOutButton) {
    signOutButton.addEventListener("click", userSignOut);
  } else {
    console.error("Bouton de déconnexion introuvable");
  }
});

// Fonction pour mettre à jour l'interface utilisateur
function updateUI(user) {
  const userStatus = document.getElementById("user-status");
  const signInButton = document.getElementById("logbutton");
  const signOutButton = document.getElementById("logoutbutton");

  if (user) {
    // L'utilisateur est connecté
    if (userStatus) {
      userStatus.textContent = `Connecté en tant que ${user.email}`;
    }
    if (signInButton) {
      signInButton.style.display = "none";
    }
    if (signOutButton) {
      signOutButton.style.display = "block";
    }
  } else {
    // Aucun utilisateur connecté
    if (userStatus) {
      userStatus.textContent = "Aucun utilisateur n'est connecté.";
    }
    if (signInButton) {
      signInButton.style.display = "block";
    }
    if (signOutButton) {
      signOutButton.style.display = "none";
    }
  }
}