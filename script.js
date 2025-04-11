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
