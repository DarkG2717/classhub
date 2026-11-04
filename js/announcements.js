
/* =================================
   CLASSHUB - ANNOUNCEMENTS
   ================================= */

const announcementsData = [
    {
        title: "Welcome to the New Academic Week",
        category: "announcement",
        date: "2026-11-09T08:00:00",
        expiresAt: "2026-11-15T23:59:00",
        description: "Welcome back! Check your timetable and prepare for the week's lectures.",
        venue: "Class Notice"
    },
    {
        title: "Data Structures Assignment",
        category: "assignment",
        date: "2026-11-12T23:59:00",
        expiresAt: "2026-11-12T23:59:00",
        description: "Complete the exercises on arrays, linked lists and stacks.",
        venue: "Online Submission"
    },
    {
        title: "Discrete Mathematics Test",
        category: "test",
        date: "2026-11-13T10:00:00",
        expiresAt: "2026-11-13T12:00:00",
        description: "Prepare for the test covering logic, sets and relations.",
        venue: "Lecture Hall B"
    },
    {
        title: "Class Study Group",
        category: "activity",
        date: "2026-11-14T14:00:00",
        expiresAt: "2026-11-14T16:00:00",
        description: "Join your classmates for a group revision session.",
        venue: "Library"
    }
];

document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("announcements-container");
    const filter = document.getElementById("announcement-filter");

    if (!container) {
        console.error("Announcements container not found!");
        return;
    }

    // Format dates for display
    function formatDate(dateString) {
        const date = new Date(dateString);

        return date.toLocaleString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit"
        });
    }

    // Get announcements that have not expired
    function getActiveAnnouncements() {
        const now = new Date();

        return announcementsData.filter(item => {
            const expiryDate = new Date(item.expiresAt);

            return (
                !Number.isNaN(expiryDate.getTime()) &&
                expiryDate >= now
            );
        });
    }

    // Display announcements
    function displayAnnouncements(category = "all") {

        container.innerHTML = "";

        const activeAnnouncements = getActiveAnnouncements();

        const filteredData = activeAnnouncements.filter(item => {
            return category === "all" || item.category === category;
        });

        // Show empty state if there are no matching updates
        if (filteredData.length === 0) {

            const emptyState = document.createElement("div");
            emptyState.className = "empty-state";

            const heading = document.createElement("h2");
            heading.textContent = "No events or announcements available right now.";

            const message = document.createElement("p");
            message.textContent =
                "You're all caught up! Check back later for new class updates.";

            emptyState.appendChild(heading);
            emptyState.appendChild(message);

            container.appendChild(emptyState);
            return;
        }

        // Create announcement cards
        filteredData.forEach(item => {

            const card = document.createElement("article");
            card.className = "announcement-card";

            const categoryLabel = document.createElement("span");
            categoryLabel.className =
                "announcement-category " + item.category;
            categoryLabel.textContent = item.category.toUpperCase();

            const title = document.createElement("h2");
            title.textContent = item.title;

            const description = document.createElement("p");
            description.textContent = item.description;

            const date = document.createElement("p");
            date.className = "announcement-date";
            date.textContent = "Date: " + formatDate(item.date);

            const venue = document.createElement("p");
            venue.className = "announcement-venue";
            venue.textContent = "Venue: " + item.venue;

            card.appendChild(categoryLabel);
            card.appendChild(title);
            card.appendChild(description);
            card.appendChild(date);
            card.appendChild(venue);

            container.appendChild(card);
        });
    }

    // Initial display
    displayAnnouncements();

    // Category filter
    if (filter) {
        filter.addEventListener("change", function () {
            displayAnnouncements(filter.value);
        });
    }

    console.log("ClassHub announcements loaded successfully!");

});
