/* =================================
   CLASSHUB - COURSE LIBRARY
   ================================= */

document.addEventListener("DOMContentLoaded", function () {

    const notesContainer =
        document.getElementById("notes-container");

    const notesSearch =
        document.getElementById("notes-search");

    const courses = window.classHubCourses || [];

    function displayCourses(searchTerm = "") {

        if (!notesContainer) return;

        notesContainer.innerHTML = "";

        const filteredCourses = courses.filter(course => {

            const searchText = (
                course.code + " " +
                course.title + " " +
                course.description
            ).toLowerCase();

            return searchText.includes(searchTerm.toLowerCase());
        });

        if (filteredCourses.length === 0) {

            const message = document.createElement("p");
            message.className = "no-notes";
            message.textContent = "No courses found. Try another search.";

            notesContainer.appendChild(message);
            return;
        }

        filteredCourses.forEach(course => {

            const card = document.createElement("article");
            card.className = "note-card";

            const icon = document.createElement("div");
            icon.className = "course-icon";
            icon.textContent = "📚";

            const heading = document.createElement("h2");
            heading.textContent = course.code;

            const title = document.createElement("h3");
            title.textContent = course.title;

            const description = document.createElement("p");
            description.textContent = course.description;

            const count = document.createElement("span");
            count.className = "lecture-count";

            count.textContent =
                course.lectures +
                (course.lectures === 1 ? " Lecture available" : " Lectures available");

            const link = document.createElement("a");

            link.href =
                "lecture.html?course=" +
                encodeURIComponent(course.id);

            link.textContent = "View Lectures";
            link.className = "notes-button";

            card.appendChild(icon);
            card.appendChild(heading);
            card.appendChild(title);
            card.appendChild(description);
            card.appendChild(count);
            card.appendChild(link);

            notesContainer.appendChild(card);
        });
    }

    displayCourses();

    if (notesSearch) {
        notesSearch.addEventListener("input", function () {
            displayCourses(notesSearch.value.trim());
        });
    }

});
