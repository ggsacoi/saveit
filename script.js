// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider()
  const userSignIn = async() => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.Message;
      console.error(`Error (${errorCode}): ${errorMessage}`);
    });
  };
  document.addEventListener('DOMContentLoaded', () => {
    const signInButton = document.getElementById("logbutton");
    if (signInButton) {
      signInButton.addEventListener('click', userSignIn);
    } else {
      console.error("Sign-in button not found");
    }
  });
  window.addEventListener("load", () => {
    if(window.innerWidth <= 650) {
      
    }
  });