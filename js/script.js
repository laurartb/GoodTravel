// carrusel de fondo
document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".fondo-carrusel .slide");
    let index = 0;

    function cambiarImagen() {
        slides.forEach(slide => slide.classList.remove("active"));

        slides[index].classList.add("active");

        index = (index + 1) % slides.length;
    }

    // empieza la 1 imagen
    cambiarImagen();
    // cambia cada 4 seg
    setInterval(cambiarImagen, 4000);
});




// menú hamburguesa con jquery

$(document).ready(function() {
    const $menuToggle = $('#menu-toggle');
    const $menu = $('#menu');

    $menuToggle.click(function() {
        $menu.toggleClass('show');

        if ($menu.hasClass('show')) {
            $menuToggle.text('✕'); // Cambia a ícono de cerrar
        } else {
            $menuToggle.text('☰'); // Cambia a ícono de menú
        }
    });
});

    