
/* =================================
   CLASSHUB - LECTURE SYSTEM
   ================================= */

function loadLectures() {
    const container = document.getElementById("lecture-container");
    const heading = document.getElementById("course-heading");
    const description = document.getElementById("course-description");

    if (!container || !heading || !description) {
        console.error("Lecture page elements could not be found.");
        return;
    }

    const courses = window.classHubCourses;

    if (!Array.isArray(courses)) {
        heading.textContent = "Course data unavailable";
        description.textContent = "Please refresh the page.";
        container.textContent = "Unable to load course information.";
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const courseId = params.get("course");
    const lectureParam = params.get("lecture");

    const course = courses.find(item => item.id === courseId);

    if (!course) {
        heading.textContent = "Course not found";
        description.textContent = "Please select a course from the Notes page.";
        container.innerHTML = "";
        return;
    }

    heading.textContent = course.code;

    const materials = course.materials || [];

    // =================================
    // INDIVIDUAL LECTURE VIEW
    // =================================

    if (lectureParam !== null) {
        const number = Number(lectureParam);

        if (
            !Number.isInteger(number) ||
            number < 1 ||
            number > course.lectures
        ) {
            description.textContent = "This lecture is unavailable.";
            container.innerHTML = "";
            return;
        }

        const material = materials.find(
            item => item.number === number
        );

        description.textContent = "Lecture " + number;

        container.innerHTML = "";

        const section = document.createElement("div");
        section.className = "lecture-material";

        const title = document.createElement("h2");
        title.textContent = material
            ? material.title
            : "Lecture " + number + " Notes";

        section.appendChild(title);

        if (material && material.file) {
            const message = document.createElement("p");
            message.textContent = "Your study material is displayed below.";

            const pdf = document.createElement("iframe");
            pdf.className = "lecture-pdf";
            pdf.src = material.file;
            pdf.title = material.title + " PDF";
            pdf.setAttribute("loading", "lazy");

            const openLink = document.createElement("a");
            openLink.href = material.file;
            openLink.target = "_blank";
            openLink.rel = "noopener noreferrer";
            openLink.className = "notes-button";
            openLink.textContent = "Open PDF in New Tab";

            section.appendChild(message);
            section.appendChild(pdf);
            section.appendChild(openLink);
        } else {
            const message = document.createElement("p");
            message.textContent =
                "The study material for this lecture has not been uploaded yet.";

            section.appendChild(message);
        }

        const backLink = document.createElement("a");
        backLink.href =
            "lecture.html?course=" + encodeURIComponent(course.id);
        backLink.className = "back-link";
        backLink.textContent = "← Back to Lectures";

        section.appendChild(backLink);
        container.appendChild(section);

        return;
    }

    // =================================
    // LECTURE LIST VIEW
    // =================================

    description.textContent =
        "Select a lecture to access its study materials.";

    container.innerHTML = "";

    for (let i = 1; i <= course.lectures; i++) {
        const material = materials.find(
            item => item.number === i
        );

        const card = document.createElement("article");
        card.className = "lecture-card";

        const info = document.createElement("div");
        info.className = "lecture-info";

        const icon = document.createElement("span");
        icon.className = "lecture-icon";
        icon.textContent = "📖";

        const textGroup = document.createElement("div");

        const title = document.createElement("h2");
        title.textContent = "Lecture " + i;

        const subtitle = document.createElement("p");
        subtitle.textContent = material
            ? material.title
            : "Study material coming soon";

        textGroup.appendChild(title);
        textGroup.appendChild(subtitle);

        info.appendChild(icon);
        info.appendChild(textGroup);

        const link = document.createElement("a");
        link.href =
            "lecture.html?course=" +
            encodeURIComponent(course.id) +
            "&lecture=" + i;

        link.className = "notes-button";
        link.textContent = "Open Lecture";

        card.appendChild(info);
        card.appendChild(link);

        container.appendChild(card);
    }
}

// Start the lecture system after the page is ready.
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadLectures);
} else {
    loadLectures();
}
