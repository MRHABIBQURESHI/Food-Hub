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

    
    let resname = document.querySelector("#rname")
    let owname = document.querySelector("#oname")
    let number = document.querySelector("#conumber")
    let emailaddress = document.querySelector("#email")
    let resaddress = document.querySelector("#raddress")
    let city = document.querySelector("#city")
    let description = document.querySelector("#des")

    try {
        const docRef = await addDoc(collection(db, "resturents"), {
            resturentname: resname.value,
            ownername: owname.value,
            contactnumber: parseInt(number.value),
            emailaddress: emailaddress.value,
            resturentaddress: resaddress.value,
            city: city.value,
            description: description.value
        });
        console.log("Resturent Register successfully!");
        showAttractiveAlert("Resturent Register successfully!", false);
        

        localStorage.setItem('ownername', owname.value);
    
        // Redirect to home.html
        window.location.href = "home.html";
    } catch (error) {
        console.error("Error adding Resturent document: ", error);
        showAttractiveAlert("Error adding Resturent Register document: " + error.message, true);
    }
   
})

