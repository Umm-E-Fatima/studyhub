let appdata = {
    totalhours: 24,
    completedtasks: 12,
    activegoals: 3,
    focussessions: 8
};

function updatedashboard() {
    document.getElementById("total-hours").textContent = appdata.total-hours + "h";
    document.getElementById("completed-tasks").textContent = appdata.completed-tasks;
    document.getElementById("active-goals").textContent = appdata.active-goals;
    document.getElementById("focus-sessions").textContent = appdata.focus-sessions;
}

updatedashboard();
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".app-section");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);

        sections.forEach(section => section.style.display = "none");
        navLinks.forEach(link => link.classList.remove("active"));

        document.getElementById(targetId).style.display = "block";
        this.classList.add("active");
    });
});