/* =================================
   CLASSHUB - LOGIN JAVASCRIPT
   ================================= */

// Approved usernames
const privilegedUsernames = [
    "CHUB-7KQ29",
    "CHUB-M4X81",
    "CHUB-P9D63",
    "CHUB-T2W57",
    "CHUB-R8F14"
];

// Check whether a username has lecture access
function hasLectureAccess() {
    const username = localStorage.getItem("classhubUsername");

    if (!username) {
        return false;
    }

    return privilegedUsernames.includes(
        username.trim().toUpperCase()
    );
}

document.addEventListener("DOMContentLoaded", function () {

    const loginScreen = document.getElementById("login-screen");
    const loginForm = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");

    const siteContent = document.getElementById("site-content");
    const greeting = document.getElementById("personal-greeting");

    const changeUsernameButton = document.getElementById(
        "change-username"
    );

    // Save and display the username
    function enterClassHub(username) {

        localStorage.setItem("classhubUsername", username);

        greeting.textContent = `Hi, ${username}! 👋`;

        loginScreen.hidden = true;
        siteContent.hidden = false;
    }

    // Check saved username
    const savedUsername = localStorage.getItem("classhubUsername");

    if (savedUsername) {
        enterClassHub(savedUsername);
    } else {
        loginScreen.hidden = false;
        siteContent.hidden = true;
    }

    // Handle login form
    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const username = usernameInput.value.trim();

        if (username.length === 0) {
            alert("Please enter a username.");
            return;
        }

        enterClassHub(username);
    });

    // Change username
    changeUsernameButton.addEventListener("click", function () {

        loginScreen.hidden = false;
        siteContent.hidden = true;

        usernameInput.value =
            localStorage.getItem("classhubUsername") || "";

        usernameInput.focus();
    });

});

console.log("ClassHub login system loaded!");
