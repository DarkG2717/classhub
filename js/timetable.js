
/* =================================
   CLASSHUB - TIMETABLE JAVASCRIPT
================================= */

// Get timetable elements
const timetableBody = document.getElementById("timetable-body");
const groupFilter = document.getElementById("group-filter");

// Display timetable based on selected group
function displayTimetable(selectedGroup = "A") {

    // Clear existing timetable
    timetableBody.innerHTML = "";

    // Filter courses for the selected group
    const filteredCourses = timetableData.filter(course => {
        return course.group === "all" ||
               course.group === selectedGroup;
    });

    // Display a message if no courses are available
    if (filteredCourses.length === 0) {

        timetableBody.innerHTML = `
            <tr>
                <td colspan="4">
                    No classes available for this group.
                </td>
            </tr>
        `;

        return;
    }

    // Display each course
    filteredCourses.forEach(course => {

        const row = document.createElement("tr");

        const details = [
            course.day,
            course.courseCode,
            course.time,
            course.venue
        ];

        details.forEach(detail => {

            const cell = document.createElement("td");
            cell.textContent = detail;

            row.appendChild(cell);

        });

        timetableBody.appendChild(row);

    });
}

// Initialise timetable
if (timetableBody && groupFilter) {

    // Display Group A by default
    displayTimetable(groupFilter.value);

    // Update timetable when group changes
    groupFilter.addEventListener("change", function () {

        displayTimetable(groupFilter.value);

    });

}

console.log("ClassHub timetable loaded successfully!");
