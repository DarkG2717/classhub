
/* =================================
   CLASSHUB - MAIN JAVASCRIPT
   ================================= */

// =================================
// FOOTER YEAR
// =================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// =================================
// CURRENT PAGE NAVIGATION
// =================================

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.setAttribute("aria-current", "page");
    } else {
        link.removeAttribute("aria-current");
    }
});

// =================================
// CLASSHUB LIGHT / DARK MODE
// =================================

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const themeLabel = document.getElementById("theme-label");

function applyTheme(theme) {

    document.documentElement.setAttribute("data-theme", theme);

    const isDark = theme === "dark";

    if (themeIcon) {
        themeIcon.textContent = isDark ? "☀️" : "🌙";
    }

    if (themeLabel) {
        themeLabel.textContent = isDark ? "Light Mode" : "Dark Mode";
    }

    if (themeToggle) {
        themeToggle.setAttribute(
            "aria-label",
            isDark ? "Switch to light mode" : "Switch to dark mode"
        );

        themeToggle.setAttribute("aria-pressed", String(isDark));
    }
}

// Load saved theme
const savedTheme = localStorage.getItem("classHubTheme") || "light";

applyTheme(savedTheme);

// Toggle theme
if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        const newTheme =
            currentTheme === "dark" ? "light" : "dark";

        localStorage.setItem("classHubTheme", newTheme);

        applyTheme(newTheme);
    });
}

console.log("ClassHub is running successfully!");
