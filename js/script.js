// carrusel de fondo
document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".fondo-carrusel .slide");
    let index = 0;

    function cambiarImagen() {
        // quita clase active de todas
        slides.forEach(slide => slide.classList.remove("active"));

        // iguiente imagen
        slides[index].classList.add("active");

        // siguiente índice
        index = (index + 1) % slides.length;
    }

    // empieza la 1 imagen
    cambiarImagen();

    // cambia cada 4 seg
    setInterval(cambiarImagen, 4000);
});