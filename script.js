// Simulated user data for authentication
const users = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
    // Add more users as needed
];

// Simulated booked options
const bookedOptions = new Set();

// Function to authenticate user
function authenticateUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("options-container").style.display = "block";
        displayOptions();
    } else {
        alert("Invalid username or password");
    }
}

// Function to display options
function displayOptions() {
    const optionsContainer = document.getElementById("options");

    for (let i = 1; i <= 60; i++) {
        const optionButton = document.createElement("button");
        optionButton.textContent = i;

        // Check if the option is already booked
        if (bookedOptions.has(i)) {
            optionButton.disabled = true;
        } else {
            optionButton.addEventListener("click", () => bookOption(i));
        }

        optionsContainer.appendChild(optionButton);
    }
}

// Function to book an option
function bookOption(option) {
    if (confirm(`Do you want to book option ${option}?`)) {
        if (bookedOptions.has(option)) {
            alert("Option already booked by another user");
        } else {
            bookedOptions.add(option);
            alert(`Option ${option} booked successfully`);
        }
    }
}
