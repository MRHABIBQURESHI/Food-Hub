

////////////////////////////////////////////////



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, onSnapshot  } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";


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


function showAttractiveAlert(message, isError) {
    var alertDiv = document.createElement("div");
    alertDiv.className = isError ? "attractive-alert error" : "attractive-alert success";
    alertDiv.textContent = message;
    document.body.appendChild(alertDiv);
    
    setTimeout(function() {
      alertDiv.remove();
    }, 2000); // 2 seconds
  }

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


let btnAdd = document.querySelector("#add")
btnAdd.addEventListener('click', async () => {

    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let address = document.querySelector('#address');
    let city = document.querySelector('#city');
    let state = document.querySelector('#state');
    let zip = document.querySelector('#zip');
    let cardName = document.querySelector('#card-name');
    let cardNumber = document.querySelector('#card-number');
    let expiry = document.querySelector('#expiry');
    let cvv = document.querySelector('#cvv');


    try {
        const docRef = await addDoc(collection(db, "checkout"), {

            name : name.value,
            email : email.value,
            address : address.value,
            city : city.value,
            state : state.value,
            zip : zip.value,
            cardName : cardName.value,
            cardNumber : cardNumber.value,
            expiry : expiry.value,
            cvv : cvv.value,
                   });
        console.log("Resturent Register successfully!");
        showAttractiveAlert("Resturent Register successfully!", false);
        

        // localStorage.setItem('ownername', owname.value);
    
        // Redirect to home.html
        // window.location.href = "thank.html";
    } catch (error) {
        console.error("Error adding Resturent document: ", error);
        showAttractiveAlert("Error adding Resturent Register document: " + error.message, true);
    }
   
})


