// Code existant
console.log("Script chargé avec succès !");

// Fonction pour générer un calendrier basique
function renderCalendar() {
    const calendarDiv = document.getElementById("calendar");
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    
    // Affiche le mois et l'année actuels
 calendarDiv.innerHTML = `<h3>currentDate.toLocaleString('default',  month: 'long' ){currentYear}</h3>`;
    
    // Calcul du premier jour du mois
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const numDaysInMonth = lastDayOfMonth.getDate();
    const firstDay = firstDayOfMonth.getDay();
    
    // Créer une grille de calendrier
    let calendarGrid = "<div class='calendar-grid'>";
    
    // Ajouter des cases vides pour les jours avant le 1er du mois
    for (let i = 0; i < firstDay; i++) {
        calendarGrid += "<div class='empty-day'></div>";
    }

    // Remplir le calendrier avec les jours du mois
    for (let i = 1; i <= numDaysInMonth; i++) {
        calendarGrid += `<div class='day'>${i}</div>`;
    }

    calendarGrid += "</div>";
    calendarDiv.innerHTML += calendarGrid;
}

// Appeler la fonction pour afficher le calendrier
document.addEventListener("DOMContentLoaded", renderCalendar);

// Ajouter un événement
const eventForm = document.getElementById("event-form");
const eventTitle = document.getElementById("event-title");
const eventDate = document.getElementById("event-date");
const calendarDiv = document.getElementById("calendar");
 eventForm.addEventListener("submit", function(e) 
    e.preventDefault();

    const title = eventTitle.value;
    const date = eventDate.value;

    if (title        date) 
        // Créer un élément pour l'événement
        const eventElement = document.createElement("div");
        eventElement.classList.add("event");
        eventElement.innerHTML = `<strong>{title}</strong> le ${date}`;

        // Ajouter l'événement sous le calendrier
        const eventsSection = document.createElement("section");
        eventsSection.classList.add("events-section");
        eventsSection.innerHTML = "<h3>Événements à venir :</h3>";
        eventsSection.appendChild(eventElement);

        // Ajouter la section des événements après le calendrier
        calendarDiv.appendChild(eventsSection);

        // Réinitialiser le formulaire
        eventTitle.value = "";
        eventDate.value = "";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const eventForm = document.getElementById("event-form");
    const eventTitle = document.getElementById("event-title");
    const eventDate = document.getElementById("event-date");
    const calendarDiv = document.getElementById("calendar");

    // Affiche un calendrier simple
    const renderCalendar = () => {
        const currentDate = new Date();
        calendarDiv.innerHTML = `Aujourd'hui : ${currentDate.toDateString()}`;
    };

    // Ajouter un événement au calendrier
    eventForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const title = eventTitle.value; const date = eventDate.value;
        
        if (title        date) 
            const eventElement = document.createElement("div");
            eventElement.classList.add("event");
            eventElement.innerHTML = `<strong>{title}</strong> le ${date}`;
            calendarDiv.appendChild(eventElement);

            // Réinitialiser le formulaire
            eventTitle.value = "";
            eventDate.value = "";
        }
    });

    renderCalendar();
});
```
