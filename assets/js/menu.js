document.addEventListener('DOMContentLoaded', function () {
    let button = document.getElementById('menu-toggler');
    let navbar = document.getElementById('navbar');

    button.addEventListener('click', function () {
        navbar.classList.toggle('open');
    })
})