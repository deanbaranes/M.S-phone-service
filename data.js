// Function to initialize worker data
function initializeWorkerData() {
    const initialWorkers = {
         '204750806': { name: 'Dean', password: '123456' },
         '313945172': { name: 'Dean', password: '123456' },
         '316204742': { name: 'Orian', password: '123456' },
         '213703390': { name: 'Ramy', password: '123456' }
     };
     localStorage.setItem('workers', JSON.stringify(initialWorkers));
 }

 // Function to initialize form fields if worker is already logged in
function initializeFormFields() {
    var currentWorker = JSON.parse(localStorage.getItem('currentWorker'));
    if (currentWorker) {
        document.getElementById("username").value = currentWorker.id;
        var storedWorkers = JSON.parse(localStorage.getItem('workers')) || {};
        if (storedWorkers[currentWorker.id]) {
            document.getElementById("pwd").value = storedWorkers[currentWorker.id].password;
        }
    }
}
// Function to validate login credentials
// Real-time username validation
function validateUsername() {
    var username = document.getElementById("username").value.trim();
    var loginmsg = document.getElementById("loginmsg");

    if (username === "" || username.length < 9) {
        loginmsg.textContent = "Please enter a 9-digit ID.";
    } else {
        loginmsg.textContent = ""; // Clear any previous message
    }
}

// Modified login validation function
function validatelogin(event) {
    event.preventDefault();
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("pwd").value.trim();
    var alertmsg = "";

    // Check if the username is valid
    if (username === "" || username.length < 9) {
        alertmsg += "Please enter a 9-digit ID.\n";
    }
    if (password === "") {
        alertmsg += "Please enter a password.\n";
    }

    if (alertmsg !== "") {
        alert(alertmsg);
        return;
    }

    var storedWorkers = JSON.parse(localStorage.getItem('workers')) || {};

    if (storedWorkers[username]) {
        if (storedWorkers[username].password === password) {
            localStorage.setItem('currentWorker', JSON.stringify({id: username, name: storedWorkers[username].name}));
            document.getElementById("loginmsg").textContent = "Welcome, " + storedWorkers[username].name + "!";
        } else {
            document.getElementById("loginmsg").textContent = "Incorrect password";
        }
    } else {
        document.getElementById("loginmsg").textContent = "User does not exist";
    }
}

// Function to log out the current worker
function logout() {
    var currentWorker = JSON.parse(localStorage.getItem('currentWorker'));
    if (currentWorker && currentWorker.name) {
        alert("Goodbye, " + currentWorker.name + "!");
    } else {
        alert("No user is currently logged in.");
    }
    localStorage.removeItem('currentWorker');
    document.getElementById("username").value = "";
    document.getElementById("pwd").value = "";
    document.getElementById("loginmsg").textContent = "";
}
