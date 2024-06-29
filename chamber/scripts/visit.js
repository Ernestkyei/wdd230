document.addEventListener("DOMContentLoaded", function() {
    const visitMessage = document.getElementById('visit-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();

    if (lastVisit) {
        const daysBetweenVisits = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

        if (daysBetweenVisits < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (daysBetweenVisits === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${daysBetweenVisits} days ago.`;
        }
    } else {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    }

    localStorage.setItem('lastVisit', now);
});
