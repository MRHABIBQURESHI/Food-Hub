document.addEventListener("DOMContentLoaded", function() {
  // Your JavaScript code here
  var userData = {};

  document.getElementById('formPage1').addEventListener('submit', function(e) {
    e.preventDefault();
    userData.rname = document.getElementById('rname').value;
    userData.oname = document.getElementById('oname').value;
    userData.conumber = document.getElementById('conumber').value;
    userData.email = document.getElementById('email').value;
    // Proceed to next page
    // You can redirect to the next page or dynamically load the next form here
  });

  document.getElementById('formPage2').addEventListener('submit', function(e) {
    e.preventDefault();
    userData.raddress = document.getElementById('raddress').value;
    userData.city = document.getElementById('city').value;
    userData.state = document.getElementById('state').value;
    userData.postal = document.getElementById('postal').value;
    // Proceed to next page
    // You can redirect to the next page or dynamically load the next form here
  });

  document.getElementById('formPage3').addEventListener('submit', function(e) {
    e.preventDefault();
    userData.cuisine = document.getElementById('cuisine').value;
    userData.open = document.getElementById('open').value;
    userData.close = document.getElementById('close').value;
    userData.des = document.getElementById('des').value;
    // Proceed to next page
    // You can redirect to the next page or dynamically load the next form here
  });

  document.getElementById('formPage4').addEventListener('submit', function(e) {
    e.preventDefault();
    userData.link = document.getElementById('link').value;
    userData.logo = document.getElementById('logo').value;
    
    
    // Now, you have all the data
    // You can submit it to Firebase or perform any other action
    submitData(userData);
  });

  function submitData(data) {
    // Firestore instance
    const db = firebase.firestore();

    // Save data to Firestore
    db.collection("users").add(data)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        // Redirect to a thank you page or do any other action
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
});
