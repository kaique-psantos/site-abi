$('#slider').nivoSlider();



$(document).ready(function () {
    var cabecalho = document.getElementById('cabecalho'); 
    window.addEventListener('scroll', function () {
        if (window.scrollY > 150) cabecalho.classList.add('cabecalho-scroll'); 
        else cabecalho.classList.remove('cabecalho-scroll');
    });
})();



