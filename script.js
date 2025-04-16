document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    console.log("Dark mode script is running..."); // Debugging line

    // ✅ Apply Dark Mode if Stored in Local Storage
    function applyDarkMode() {
        const darkModeEnabled = localStorage.getItem("darkMode") === "enabled";
        body.classList.toggle("dark-mode", darkModeEnabled);
        if (darkModeToggle) {
            darkModeToggle.textContent = darkModeEnabled ? "🌞 Light Mode" : "🌙 Dark Mode";
        }
    }
    applyDarkMode(); // Run on page load

    // ✅ Dark Mode Toggle
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", function () {
            body.classList.toggle("dark-mode");
            const isDarkMode = body.classList.contains("dark-mode");

            localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
            this.textContent = isDarkMode ? "🌞 Light Mode" : "🌙 Dark Mode";

            showToast(isDarkMode ? "🌙 Dark Mode Activated!" : "☀️ Light Mode Activated!");
        });
    }

    // ✅ Toast Notification Function
    window.showToast = function (message) {
        const toast = document.getElementById("toast");
        if (!toast) return;

        toast.textContent = message;
        toast.style.opacity = "1";
        toast.style.transform = "translateY(0)";
        toast.style.display = "block";

        setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transform = "translateY(-20px)";
            setTimeout(() => { toast.style.display = "none"; }, 500);
        }, 3000);
    };
});
document.addEventListener("DOMContentLoaded", function () {
    function animateCount(id, start, end, duration) {
        let obj = document.getElementById(id);
        let range = end - start;
        let current = start;
        let increment = range / (duration / 30);
        let stepTime = Math.abs(Math.floor(duration / range));
        let timer = setInterval(() => {
            current += increment;
            obj.textContent = Math.floor(current) + "+";
            if (current >= end) {
                obj.textContent = end + "+";
                clearInterval(timer);
            }
        }, stepTime);
    }

    animateCount("users-count", 0, 10000, 1500);
    animateCount("questions-count", 0, 50000, 2000);
    animateCount("groups-count", 0, 1200, 1500);
});
