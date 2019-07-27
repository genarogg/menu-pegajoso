$(document).ready(function(){
    var altura = $('.menu').offset().top;

    $(window).on('scroll', function(){
        if($(window).scrollTop() > altura){
            $('.menu').addClass('menu-fixed');
        }
        else{
            $('.menu').removeClass('menu-fixed');
        }
    });
});

window.onscroll = function (){
    // Obtenemos la posicion del scroll en pantall
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;

    // Realizamos alguna accion cuando el scroll este entre la posicion 300 y 400
    if(scroll > 300 && scroll < 400){
        console.log("Pasaste la posicion 300 del scroll");
    }
}