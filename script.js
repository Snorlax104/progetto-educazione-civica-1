// Mostra/Nascondi soluzione
document.getElementById("showSolution").addEventListener("click", function() {
    const solution = document.getElementById("solution");
    solution.classList.toggle("hidden");
    this.textContent = solution.classList.contains("hidden") ? 
        "Come possiamo combatterle?" : "Nascondi risposta";
});

// Toggle Dark/Light Mode
document.getElementById("changeTheme").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});