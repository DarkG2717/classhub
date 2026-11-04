
/* =================================
   CLASSHUB - CONTACTS JAVASCRIPT
   ================================= */

const contactsData = [
    {
        name: "Kael",
        role: "Class Representative",
        phone: "08088572089",
        initials: "K",
        color: "purple"
    },
    {
        name: "Havos",
        role: "Assistant Class Representative",
        phone: "08066247544",
        initials: "H",
        color: "blue"
    },
    {
        name: "Daniel",
        role: "Academic Coordinator",
        phone: "",
        initials: "D",
        color: "orange"
    },
    {
        name: "Amara",
        role: "Welfare Coordinator",
        phone: "",
        initials: "A",
        color: "pink"
    },
    {
        name: "Tobi",
        role: "CSC Course Representative",
        phone: "",
        initials: "T",
        color: "green"
    },
    {
        name: "Zara",
        role: "Mathematics Course Representative",
        phone: "",
        initials: "Z",
        color: "yellow"
    }
];

const contactsContainer = document.getElementById("contacts-container");

// Convert a Nigerian phone number into international format
function formatWhatsAppNumber(phone) {
    const digits = phone.replace(/\D/g, "");

    if (digits.startsWith("0")) {
        return "234" + digits.slice(1);
    }

    return digits;
}

// Display all contact cards
function displayContacts() {
    if (!contactsContainer) {
        console.error("Contacts container not found.");
        return;
    }

    contactsContainer.innerHTML = "";

    contactsData.forEach(contact => {
        const card = document.createElement("article");
        card.className = "contact-card";

        // Profile placeholder
        const avatar = document.createElement("div");
        avatar.className = `contact-avatar ${contact.color}`;
        avatar.textContent = contact.initials;

        // Contact information
        const name = document.createElement("h2");
        name.textContent = contact.name;

        const role = document.createElement("p");
        role.className = "contact-role";
        role.textContent = contact.role;

        // Contact number
        const phone = document.createElement("p");
        phone.className = "contact-phone";

        if (contact.phone) {
            phone.textContent = contact.phone;
        } else {
            phone.textContent = "Phone number not added yet";
        }

        // WhatsApp button
        if (contact.phone) {
            const whatsappButton = document.createElement("a");

            const whatsappNumber = formatWhatsAppNumber(contact.phone);

            whatsappButton.href =
                `https://wa.me/${whatsappNumber}`;

            whatsappButton.className = "whatsapp-button";
            whatsappButton.textContent = "Message on WhatsApp";
            whatsappButton.target = "_blank";
            whatsappButton.rel = "noopener noreferrer";

            card.appendChild(avatar);
            card.appendChild(name);
            card.appendChild(role);
            card.appendChild(phone);
            card.appendChild(whatsappButton);
        } else {
            const unavailable = document.createElement("p");
            unavailable.className = "contact-unavailable";
            unavailable.textContent = "Contact coming soon";

            card.appendChild(avatar);
            card.appendChild(name);
            card.appendChild(role);
            card.appendChild(phone);
            card.appendChild(unavailable);
        }

        contactsContainer.appendChild(card);
    });
}

displayContacts();

console.log("ClassHub Contacts loaded successfully!");
