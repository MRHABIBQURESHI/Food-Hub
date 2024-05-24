import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    
};

const auth = getAuth();


onAuthStateChanged(auth, (user) => {
    if (user) {
    
        window.location.href = 'home.html';
    }
});


function loginUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           
            const user = userCredential.user;
           
            window.location.href = 'home.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          
        });
}

