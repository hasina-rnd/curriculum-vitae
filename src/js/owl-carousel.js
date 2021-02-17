require('owl.carousel');

document.addEventListener('DOMContentLoaded', function () {
    $(".owl-carousel").owlCarousel({
        margin: 10,
        items: 2,
        loop: true,
        autoplay: true,
        dots: true,
        nav: true,
        navText: ['<button class="btn"><i class="fas fa-arrow-left"></i> Previous</button>', '<button class="btn">Next <i class="fas fa-arrow-right"></i></button>'],
        responsive: {
            500: {
                items: 1
            },
            1200: {
                items: 2
            }
        }
    });
});