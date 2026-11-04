
# ClassHub

### Everything your class needs, in one place.

ClassHub is a student-friendly academic portal designed to help classmates stay organised, access learning materials, view important announcements, and connect with class representatives.

The platform brings essential class information together in one simple and accessible website.

---

## Features

### 1. Personalised Welcome Page
- Simple username welcome screen.
- Remembers the student's username using browser local storage.
- Displays a personalised greeting on the homepage.
- Allows students to change their username.

### 2. Homepage Dashboard
- Clean and colourful interface.
- Quick links to all major sections.
- Easy navigation throughout the website.

### 3. Timetable
- Displays the weekly class timetable.
- Organised by days of the week.
- Includes course codes, course titles, venues and lecturers.
- Allows students to filter classes by day.

### 4. Study Notes
- Displays available course materials.
- Organised into individual course cards.
- Includes a search feature for finding study materials.
- Supports PDF document links.

### 5. Announcements and Activities
- Displays important class announcements.
- Includes assignments, tests, examinations and activities.
- Allows students to filter updates by category.
- Automatically hides expired announcements.
- Displays a message when no active updates are available.

### 6. Class Contacts
- Displays class representatives and other important contacts.
- Uses profile placeholders with initials.
- Includes WhatsApp contact buttons where phone numbers are available.

---

## Technologies Used

- HTML5 – Website structure.
- CSS3 – Styling and responsive layouts.
- JavaScript – Interactive features and dynamic content.
- Git and GitHub – Version control and project hosting.
- GitHub Pages – Website deployment.

---

## Project Structure

```text
classhub/
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── documents/
│
├── css/
│   ├── style.css
│   ├── timetable.css
│   ├── notes.css
│   ├── announcements.css
│   ├── contacts.css
│   └── login.css
│
├── js/
│   ├── main.js
│   ├── data.js
│   ├── timetable.js
│   ├── notes.js
│   ├── announcements.js
│   ├── contacts.js
│   └── login.js
│
├── index.html
├── timetable.html
├── notes.html
├── announcements.html
├── contacts.html
└── README.md
```

---

## How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/DarkG2717/classhub.git
```

2. Enter the project directory:

```bash
cd classhub
```

3. Start a local development server:

```bash
python -m http.server 8080 --bind 0.0.0.0
```

4. Open the website in your browser at:

```text
http://localhost:8080
```

---

## Website Deployment

ClassHub can be deployed using GitHub Pages.

To deploy:

1. Open the repository on GitHub.
2. Navigate to Settings.
3. Select Pages.
4. Choose Deploy from a branch.
5. Select the main branch and root folder.
6. Save your settings.

GitHub Pages will generate a public website link.

---

## Future Improvements

Planned improvements include:

- Administrator dashboard for managing website content.
- Easier uploading and management of PDF notes.
- Improved announcement management.
- More interactive student features.
- Secure administrator authentication.
- Improved accessibility and mobile experience.

---

## Important Notes

- The current username feature is for personalisation only and does not provide secure authentication.
- Sample timetable entries, announcements and contact roles may be fictional demonstration data.
- PDF links must point to documents that have actually been uploaded.
- Contact information should only be published with the relevant person's permission.

---

## Project Purpose

ClassHub was developed as a student-focused academic organisation platform to make accessing class information easier and more convenient.

**Built for our class.**
