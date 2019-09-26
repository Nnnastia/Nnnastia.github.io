$(document).ready(function(){
   $(window).scroll(function(){
       let w = $(window).width();
       if(w > 1024 && $(window).scrollTop() >= 600){
            $('#menu').addClass('menu-fixed');
        } else if (w <= 1024 && $(window).scrollTop() >= 800){
            $('#menu').addClass('menu-fixed');
        } else{
            $('#menu').removeClass('menu-fixed');
       }
   });
   $('.nav__link').on('click', function(){
       let hreffAttr = $(this).attr('href');
       let goTo = $(hreffAttr).offset().top;
       $('html, body').animate({
            scrollTop: goTo
        }, 600);
       return false;
   });
   $('.headerText__link').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.portfolio').offset().top
        }, 600);
    });
   $('.logo__link').on('click', function (){
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });
})