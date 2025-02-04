document.addEventListener("DOMContentLoaded", function () {
    // Run for files starting in summer_{anything}.html

    // if (!window.location.pathname.includes("summer_2025.html")) return;
    if (!window.location.pathname.match(/summer_[0-9]{4}\.html/)) return
    console.log("summer.js loaded");

    const toggleButtons = document.querySelectorAll('.project-header');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            if (event.target.tagName === "A") return;
            const projectDescription = this.closest('.project').querySelector('.project-description');
            const arrow = this.querySelector('.toggle-description');

            if (projectDescription.style.display === "none" || projectDescription.style.display === "") {
                projectDescription.style.display = "block";
                arrow.innerHTML = "&#x2191;"; // Up arrow
            } else {
                projectDescription.style.display = "none";
                arrow.innerHTML = "&#x2193;"; // Down arrow
            }
        });
    });
});
