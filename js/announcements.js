
/* =================================
   CLASSHUB - ANNOUNCEMENTS
================================= */

const announcementsData = [
    {
        title: "Fresher’s Games",
        category: "activity",
        date: "2026-11-08T08:00:00",
        displayDate: "November 8, 2026",
        time: "8:00 AM",
        expiresAt: "2026-11-08T23:59:59",
        description: "",
        venue: "University Stadium",
        image: "assets/images/fresher-games-optimized.jpg"
    },
    {
        title: "NEON NIGHT",
        category: "activity",
        date: "2026-11-08T17:00:00",
        displayDate: "November 8, 2026",
        time: "5:00 PM",
        expiresAt: "2026-11-08T23:59:59",
        description: "",
        venue: "Queen Esther Activity Hall",
        image: ""
    },
    {
        title: "BU FEST",
        category: "activity",
        date: "2026-11-15T08:00:00",
        displayDate: "November 15–18, 2026",
        time: "8:00 AM – 8:30 PM",
        expiresAt: "2026-11-18T23:59:59",
        description: "",
        venue: "University Stadium",
        image: ""
    }
];

document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("announcements-container");
    const filter = document.getElementById("announcement-filter");

    // Check if announcements container exists
    if (!container) {
        console.error("Announcements container not found!");
        return;
    }

    // Display announcements
    function displayAnnouncements(category = "all") {

        container.innerHTML = "";

        const now = new Date();

        // Remove expired events
        const activeAnnouncements = announcementsData.filter(item => {

            const expiryDate = new Date(item.expiresAt);

            return (
                !Number.isNaN(expiryDate.getTime()) &&
                expiryDate >= now
            );
        });

        // Apply category filter
        const filteredData = activeAnnouncements.filter(item => {
            return category === "all" || item.category === category;
        });

        // Show message when there are no announcements
        if (filteredData.length === 0) {

            const emptyState = document.createElement("div");
            emptyState.className = "empty-announcements";

            const heading = document.createElement("h2");
            heading.textContent =
                "No events or announcements available right now.";

            const message = document.createElement("p");
            message.textContent =
                "You're all caught up! Check back later for new class updates.";

            emptyState.appendChild(heading);
            emptyState.appendChild(message);

            container.appendChild(emptyState);
            return;
        }

        // Create each announcement card
        filteredData.forEach(item => {

            const card = document.createElement("article");
            card.className = "announcement-card";

            // LEFT SIDE: Event information
            const content = document.createElement("div");
            content.className = "announcement-content";

            const categoryLabel = document.createElement("span");
            categoryLabel.className =
                "announcement-category " + item.category;
            categoryLabel.textContent = "CLASS ACTIVITY";

            const title = document.createElement("h2");
            title.textContent = item.title;

            const date = document.createElement("p");
            date.className = "announcement-date";
            date.textContent = "Date: " + item.displayDate;

            const time = document.createElement("p");
            time.className = "announcement-time";
            time.textContent = "Time: " + item.time;

            const venue = document.createElement("p");
            venue.className = "announcement-venue";
            venue.textContent = "Venue: " + item.venue;

            content.appendChild(categoryLabel);
            content.appendChild(title);
            content.appendChild(date);
            content.appendChild(time);
            content.appendChild(venue);

            card.appendChild(content);

            // RIGHT SIDE: Event poster
            if (item.image) {

                const poster = document.createElement("img");

                poster.src = item.image;
                poster.alt = item.title + " event poster";
                poster.className = "announcement-image";
                poster.loading = "lazy";

                // Poster dimensions
                poster.style.width = "150px";
                poster.style.height = "190px";
                poster.style.minWidth = "150px";
                poster.style.maxWidth = "150px";
                poster.style.flex = "0 0 150px";
                poster.style.objectFit = "cover";
                poster.style.objectPosition = "center";

                // Remove poster if the file cannot be found
                poster.onerror = function () {
                    console.error(
                        "Could not load poster image:",
                        item.image
                    );
                    poster.remove();
                };

                card.appendChild(poster);
            }

            container.appendChild(card);
        });
    }

    // Display all active announcements initially
    displayAnnouncements();

    // Filter announcements by category
    if (filter) {
        filter.addEventListener("change", function () {
            displayAnnouncements(filter.value);
        });
    }

    // Check for expired announcements every minute
    setInterval(function () {

        const selectedCategory = filter ? filter.value : "all";

        displayAnnouncements(selectedCategory);

    }, 60000);

    console.log("ClassHub announcements loaded successfully!");

});
