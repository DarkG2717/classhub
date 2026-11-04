
/* =================================
   CLASSHUB - NOTES DATA
   ================================= */

const notesData = [
    {
        courseCode: "CSC 201",
        courseTitle: "Data Structures",
        description: "Introduction to arrays, linked lists, stacks and queues.",
        fileName: "CSC 201 Study Notes",
        filePath: "assets/documents/csc-201-notes.pdf"
    },
    {
        courseCode: "MTH 203",
        courseTitle: "Discrete Mathematics",
        description: "Study of logic, sets, relations and mathematical proofs.",
        fileName: "MTH 203 Study Notes",
        filePath: "assets/documents/mth-203-notes.pdf"
    },
    {
        courseCode: "CSC 205",
        courseTitle: "Computer Organization",
        description: "Learn about computer architecture and digital systems.",
        fileName: "CSC 205 Study Notes",
        filePath: "assets/documents/csc-205-notes.pdf"
    },
    {
        courseCode: "GST 201",
        courseTitle: "Communication Skills",
        description: "Materials covering writing, speaking and communication.",
        fileName: "GST 201 Study Notes",
        filePath: "assets/documents/gst-201-notes.pdf"
    },
    {
        courseCode: "CSC 207",
        courseTitle: "Database Fundamentals",
        description: "Introduction to databases, SQL and data management.",
        fileName: "CSC 207 Study Notes",
        filePath: "assets/documents/csc-207-notes.pdf"
    },
    {
        courseCode: "STA 201",
        courseTitle: "Introduction to Statistics",
        description: "Basic statistical concepts, probability and data analysis.",
        fileName: "STA 201 Study Notes",
        filePath: "assets/documents/sta-201-notes.pdf"
    },
    {
        courseCode: "CSC 209",
        courseTitle: "Web Development",
        description: "Learn HTML, CSS and JavaScript fundamentals.",
        fileName: "CSC 209 Study Notes",
        filePath: "assets/documents/csc-209-notes.pdf"
    },
    {
        courseCode: "MTH 205",
        courseTitle: "Linear Algebra",
        description: "Study of vectors, matrices and linear equations.",
        fileName: "MTH 205 Study Notes",
        filePath: "assets/documents/mth-205-notes.pdf"
    }
];


/* =================================
   DISPLAY AND SEARCH COURSE NOTES
   ================================= */

const notesContainer = document.getElementById("notes-container");
const notesSearch = document.getElementById("notes-search");

// Display notes on the page
function displayNotes(searchTerm = "") {
    if (!notesContainer) return;

    notesContainer.innerHTML = "";

    // Find notes matching the search
    const filteredNotes = notesData.filter(note => {
        const searchText = (
            note.courseCode + " " +
            note.courseTitle + " " +
            note.description
        ).toLowerCase();

        return searchText.includes(searchTerm.toLowerCase());
    });

    // Show a message if nothing matches
    if (filteredNotes.length === 0) {
        notesContainer.innerHTML = `
            <p class="no-notes">
                No course notes found. Try another search.
            </p>
        `;
        return;
    }

    // Create a card for each course
    filteredNotes.forEach(note => {
        const card = document.createElement("article");
        card.className = "note-card";

        const heading = document.createElement("h2");
        heading.textContent = note.courseCode;

        const title = document.createElement("h3");
        title.textContent = note.courseTitle;

        const description = document.createElement("p");
        description.textContent = note.description;

        const link = document.createElement("a");
        link.href = note.filePath;
        link.textContent = "View Study Notes";
        link.className = "notes-button";

        // Open the PDF in a new browser tab
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        card.appendChild(heading);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(link);

        notesContainer.appendChild(card);
    });
}

// Display all notes when the page loads
displayNotes();

// Search notes as the user types
if (notesSearch) {
    notesSearch.addEventListener("input", () => {
        displayNotes(notesSearch.value.trim());
    });
}

