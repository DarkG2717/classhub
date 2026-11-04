
/* =================================
   CLASSHUB - TIMETABLE JAVASCRIPT
   ================================= */

// Get the timetable table body and day filter
const timetableBody = document.getElementById("timetable-body");
const dayFilter = document.getElementById("day-filter");

// Function to display timetable courses
function displayTimetable(selectedDay = "all") {
    // Clear the existing table content
    timetableBody.innerHTML = "";

    // Filter courses according to the selected day
    const filteredCourses = selectedDay === "all"
        ? timetableData
        : timetableData.filter(course => course.day === selectedDay);

    // Display a message if no courses are available
    if (filteredCourses.length === 0) {
        timetableBody.innerHTML = `
            <tr>
                <td colspan="6">No classes scheduled for this day.</td>
            </tr>
        `;
        return;
    }

    // Create a table row for each course
    filteredCourses.forEach(course => {
        const row = document.createElement("tr");

        const details = [
            course.day,
            course.time,
            course.courseCode,
            course.courseTitle,
            course.venue,
            course.lecturer
        ];

        details.forEach(detail => {
            const cell = document.createElement("td");
            cell.textContent = detail;
            row.appendChild(cell);
        });

        timetableBody.appendChild(row);
    });
}

// Display all courses when the page loads
if (timetableBody && dayFilter) {
    displayTimetable();

    // Update the timetable when a day is selected
    dayFilter.addEventListener("change", () => {
        displayTimetable(dayFilter.value);
    });
}
