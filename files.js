  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
  import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"; 
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

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
  const dataBase = getDatabase(app);
  const auth = getAuth();
  const db = getFirestore(app);


  document.addEventListener('DOMContentLoaded', () => {
  var submit = document.getElementById("envoi");

submit.addEventListener('click', async (e) => {
    e.preventDefault();

    var password = document.getElementById("loginpass").value;
    var email = document.getElementById("lemail").value;
    var passwordV = document.getElementById("loginpassV").value;
    var lastname = document.getElementById("lastname").value;
    var name = document.getElementById("name").value;
    var adresse = document.getElementById("adresse").value;
    var number = document.getElementById("Number").value;

    if (password === passwordV && adresse && lastname && name && number && email && password && passwordV) {createUserWithEmailAndPassword(auth, email, password)
    .then((userCrendential) => {
        const user = userCrendential.user;
        addDoc(collection(db, "Users"), {
          firstname: name,
          adresse: adresse,
          lastname: lastname,
          number: number,
        });
      })
        .then(() => {
        alert('user created!');
      })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          alert(errorMessage);
        });
    } else {
           alert('Please fill in all fields and ensure passwords match.');
           }   
    });
  });