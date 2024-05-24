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

    
    let name = document.querySelector("#name")
    let price = document.querySelector("#price")
    let description = document.querySelector("#description")
    let image = document.querySelector("#image")
    

    try {
        const docRef = await addDoc(collection(db, "foods"), {
            Rname: name.value,
            Rprice: price.value,
            Rdescription: description.value,
            Rimage: image.value,
            
        });
        console.log("Item Added successfully!");
        showAttractiveAlert("Item Added successfully!", false);
        

        // localStorage.setItem('ownername', owname.value);
    
        // Redirect to home.html
        // window.location.href = "home.html";
    } catch (error) {
        console.error("Error Adding Item in Firebase: ", error);
        showAttractiveAlert("Error Adding Item in Firebase: " + error.message, true);
    }
   
})

