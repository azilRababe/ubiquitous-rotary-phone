// tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// page transition
window.addEventListener("beforeunload", function (e) {
    e.preventDefault()
    document.body.classList.add("animate-out");
});
