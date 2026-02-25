let appdata = {
    totalhours: 24,
    completedtasks: 12,
    activegoals: 3,
    focussessions: 8
};

function updatedashboard() {
    document.getElementById("total-hours").textContent = appdata.totalhours + "h";
    document.getElementById("completed-tasks").textContent = appdata.completedtasks;
    document.getElementById("active-goals").textContent = appdata.activegoals;
    document.getElementById("focus-sessions").textContent = appdata.focussessions;
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
// theme toggle btn logic
const themeToggleBtn=document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click",function(){
    document.body.classList.toggle("dark");
});