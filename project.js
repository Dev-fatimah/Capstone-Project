// document.getElementById("homeReserve").addEventListener("click", function () {
//     location.href = "./booking.html"
// });
const buttons = document.querySelectorAll('[data-link]');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const page =button.dataset.link;
        window.location.href = page;
    });
}); 