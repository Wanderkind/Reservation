// Dummy admin credentials
const adminCredentials = {
    username: "admin",
    password: "admin123"
};

// Dummy reservation data
let reservations = {};

// Dummy options
const options = Array.from({ length: 60 }, (_, i) => i + 1);

// Check if the user is an admin
function isAdmin(username, password) {
    return username === adminCredentials.username && password === adminCredentials.password;
}

// Login function
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (isAdmin(username, password)) {
        // Display reservation options for admin
        showAdminView();
    } else {
        // Display reservation options for regular user
        showUserView();
    }
}

// Display reservation options for admin
function showAdminView() {
    // Logic for admin view (not implemented in this example)
}

// Display reservation options for regular user
function showUserView() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("reservation-container").style.display = "block";

    // Populate options dropdown
    const optionsList = document.getElementById("options-list");
    optionsList.innerHTML = "";
    options.forEach(option => {
        const optionElem = document.createElement("option");
        optionElem.value = option;
        optionElem.innerText = `Option ${option}`;
        optionsList.appendChild(optionElem);
    });
}

// Reserve option function
function reserveOption() {
    const selectedOption = document.getElementById("options-list").value;

    // Check if the option is already booked
    if (reservations[selectedOption]) {
        document.getElementById("status-message").innerText = "Option already booked";
    } else {
        // Book the option
        reservations[selectedOption] = true;
        document.getElementById("status-message").innerText = "Option booked successfully";
    }
}

// Cancel reservation function
function cancelReservation() {
    const selectedOption = document.getElementById("options-list").value;

    // Check if the option is booked
    if (reservations[selectedOption]) {
        // Cancel the reservation
        delete reservations[selectedOption];
        document.getElementById("status-message").innerText = "Reservation canceled";
    } else {
        document.getElementById("status-message").innerText = "No reservation to cancel";
    }
}
