
/* =================================
   CLASSHUB - MAIN JAVASCRIPT
   ================================= */

// Automatically display the current year in the footer
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Highlight the current page in the navigation
const currentPage = window.location.pathname.split("/").pop() || "index.html";

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.setAttribute("aria-current", "page");
    } else {
        link.removeAttribute("aria-current");
    }
});

// Display a message in the browser console
console.log("ClassHub is running successfully!");
