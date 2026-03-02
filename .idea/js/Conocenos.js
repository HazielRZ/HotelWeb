/* ================================================
   conocenos.js
   Guardar en: js/conocenos.js
   Requiere: Swiper 3 cargado antes en el HTML
================================================ */

var mySwiper = new Swiper(".swiper-container", {
    direction:           "vertical",
    loop:                true,
    pagination:          ".swiper-pagination",
    grabCursor:          true,
    speed:               1000,
    paginationClickable: true,
    parallax:            true,
    autoplay:            false,
    effect:              "slide",
    mousewheelControl:   1
});

/* Ocultar el hint de scroll después del primer cambio de slide */
var hint = document.querySelector('.scroll-hint');

mySwiper.on('slideChangeStart', function () {
    if (hint) {
        hint.style.opacity = '0';
        setTimeout(function () {
            hint.style.display = 'none';
        }, 600);
    }
});