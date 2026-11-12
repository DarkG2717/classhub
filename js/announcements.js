
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
        image: "assets/images/neon-night-optimized.jpg"
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
        image: "assets/images/bu-fest-optimized.jpg",
        eventStatus: "free"
    },
    {
        title: "The Give Back Fest",
        category: "activity",
        date: "2026-11-22T09:00:00",
        displayDate: "November 22, 2026",
        time: "9:00 AM – 8:00 PM",
        expiresAt: "2026-11-22T23:59:59",
        description: "",
        venue: "The University Stadium",
        image: "assets/images/give-back-fest.jpg",
        eventStatus: "paid",
        registrationUrl: "https://www.a3tickets.com/event/the-giveback-fest/6ace5eea84f52e821cac2628",
        registrationLabel: "Buy Event Tickets"
    },
    {
        title: "Matriculation Ceremony",
        category: "announcement",
        date: "2026-11-20T00:00:00",
        displayDate: "Friday, 20 November 2026",
        time: "Time to be announced",
        expiresAt: "2026-11-20T23:59:59",
        description: "A new chapter begins! Join us as we celebrate the matriculation of our students.",
        venue: "The University Stadium",
        image: "assets/images/matriculation-poster.jpg"
    },
    {
        title: "Freshers' Picnic",
        category: "activity",
        date: "2026-11-15T13:00:00",
        displayDate: "Sunday, 15 November 2026",
        time: "1:00 PM - 5:00 PM",
        expiresAt: "2026-11-15T23:59:59",
        description: "Join us at Andrew's Park for an afternoon of refreshments, games, networking and good vibes!",
        venue: "Andrew's Park",
        eventStatus: "free",
        image: "assets/images/freshers-picnic.jpg"
    }
];

document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("announcements-container");
    const filter = document.getElementById("announcement-filter");

    if (!container) {
        console.error("Announcements container not found!");
        return;
    }

    // Category labels
    const categoryLabels = {
        activity: "🎉 CLASS ACTIVITY",
        announcement: "📢 ANNOUNCEMENT",
        test: "📝 TEST / EXAM",
        assignment: "📚 ASSIGNMENT"
    };

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

        // Empty state
        if (filteredData.length === 0) {

            const emptyState = document.createElement("div");
            emptyState.className = "empty-announcements";

            const heading = document.createElement("h2");
            heading.textContent =
                "📭 No events or announcements available right now.";

            const message = document.createElement("p");
            message.textContent =
                "You're all caught up! Check back later for new class updates. 💜";

            emptyState.appendChild(heading);
            emptyState.appendChild(message);

            container.appendChild(emptyState);
            return;
        }

        // Create announcement cards
        filteredData.forEach(item => {

            const card = document.createElement("article");
            card.className = "announcement-card";

            // LEFT SIDE: Event information
            const content = document.createElement("div");
            content.className = "announcement-content";

            const categoryLabel = document.createElement("span");
            categoryLabel.className =
                "announcement-category " + item.category;

            categoryLabel.textContent =
                categoryLabels[item.category] || "📢 CLASS UPDATE";

            const title = document.createElement("h2");
            title.textContent = item.title;

            const date = document.createElement("p");
            date.className = "announcement-date";
            date.textContent = "📅 Date: " + item.displayDate;

            const time = document.createElement("p");
            time.className = "announcement-time";
            time.textContent = "🕒 Time: " + item.time;

            const venue = document.createElement("p");
            venue.className = "announcement-venue";
            venue.textContent = "📍 Venue: " + item.venue;

            content.appendChild(categoryLabel);
            content.appendChild(title);
            content.appendChild(date);
            content.appendChild(time);
            content.appendChild(venue);

            // EVENT PAYMENT / REGISTRATION SECTION
            if (item.eventStatus) {

                const statusBox = document.createElement("div");
                statusBox.className = "event-status-box";

                const statusLabel = document.createElement("span");
                statusLabel.className =
                    "event-status-label " + item.eventStatus;

                if (item.eventStatus === "paid") {
                    statusLabel.textContent = "💳 Paid Event";
                } else if (item.eventStatus === "free") {
                    statusLabel.textContent = "🎉 Free Event";
                } else {
                    statusLabel.textContent = "📝 Registration Required";
                }

                statusBox.appendChild(statusLabel);

                if (item.registrationUrl) {

                    const registrationButton =
                        document.createElement("a");

                    registrationButton.className =
                        "event-registration-button";

                    registrationButton.textContent =
                        item.registrationLabel || "Register Here";

                    registrationButton.href = item.registrationUrl;
                    registrationButton.target = "_blank";
                    registrationButton.rel = "noopener noreferrer";

                    statusBox.appendChild(registrationButton);
                }

                content.appendChild(statusBox);
            }

            card.appendChild(content);

            // RIGHT SIDE: Event poster
            if (item.image) {

                const poster = document.createElement("img");

                poster.src = item.image;
                poster.alt = item.title + " event poster";
                poster.className = "announcement-image";
                poster.loading = "lazy";

                poster.style.width = "150px";
                poster.style.height = "190px";
                poster.style.minWidth = "150px";
                poster.style.maxWidth = "150px";
                poster.style.flex = "0 0 150px";
                poster.style.objectFit = "cover";
                poster.style.objectPosition = "center";

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

    // Initial display
    displayAnnouncements();

    // Category filter
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
