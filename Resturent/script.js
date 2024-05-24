document.getElementById('restaurantForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetching form values
    var restaurantName = document.getElementById('restaurantName').value;
    var ownerName = document.getElementById('ownerName').value;
    var contactNumber = document.getElementById('contactNumber').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var postalCode = document.getElementById('postalCode').value;
    var cuisineType = document.getElementById('cuisineType').value;
    var openingHours = document.getElementById('openingHours').value;
    var closingDays = document.getElementById('closingDays').value;
    var seatingCapacity = document.getElementById('seatingCapacity').value;
    var description = document.getElementById('description').value;
    var socialMedia = document.getElementById('socialMedia').value;
    var terms = document.getElementById('terms').checked;

    // Validate form fields
    if (!terms) {
        alert("Please agree to the terms and conditions.");
        return;
    }

    // You can perform further validations if needed
    
    // Sending data to server (this is a placeholder)
    console.log("Submitting Form...");
    console.log("Restaurant Name: " + restaurantName);
    console.log("Owner's Name: " + ownerName);
    console.log("Contact Number: " + contactNumber);
    console.log("Email Address: " + email);
    console.log("Address: " + address);
    console.log("City: " + city);
    console.log("State: " + state);
    console.log("Postal Code: " + postalCode);
    console.log("Cuisine Type: " + cuisineType);
    console.log("Opening Hours: " + openingHours);
    console.log("Closing Days: " + closingDays);
    console.log("Seating Capacity: " + seatingCapacity);
    console.log("Description: " + description);
    console.log("Social Media Links: " + socialMedia);

    // Reset form
    document.getElementById('restaurantForm').reset();
});
