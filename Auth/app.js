import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC-fZWJEr9XNMtYBIpqmJ1BOL2IDqZZHLQ",
    authDomain: "food-database-9fbec.firebaseapp.com",
    databaseURL: "https://food-database-9fbec-default-rtdb.firebaseio.com",
    projectId: "food-database-9fbec",
    storageBucket: "food-database-9fbec.appspot.com",
    messagingSenderId: "82233837477",
    appId: "1:82233837477:web:ec681d9fcca90e0aad0a4c",
    measurementId: "G-7M683PGQC2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let getBtn = document.querySelector("#btn");
if (getBtn) {
    getBtn.addEventListener('click', () => {
        let getEmail = document.querySelector("#semail").value;
        let getPass = document.querySelector("#spass").value;
        
        createUserWithEmailAndPassword(auth, getEmail, getPass)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                alert("Account registered successfully");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
                alert(`Error: ${errorMessage}`);
            });
    });
}

let getLbtn = document.querySelector("#lbtn");
if (getLbtn) {
    getLbtn.addEventListener('click', () => {
        let email = document.querySelector("#lemail").value;
        let password = document.querySelector("#lpass").value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // User login success, redirect to home.html
                window.location.href = 'home.html';
            })
            .catch((error) => {
                console.log(error);
                alert(`Error: ${error.message}`);
            });
    });
}
