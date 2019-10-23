$(document).ready(function(){
   $(window).scroll(function(){
       let w = $(window).width();
       let menu = $('#menu');
       if(w > 1024 && $(window).scrollTop() >= 600){
           menu.addClass('menu-fixed');
        } else if (w <= 1024 && $(window).scrollTop() >= 800){
           menu.addClass('menu-fixed');
        } else{
           menu.removeClass('menu-fixed');
       }
   });
    $(window).scroll(function(){
        if($(window).scrollTop() >= 890 && $(window).scrollTop() < 1000){

            let id = setInterval(progressBar, 10);
                function progressBar() {
                    let progressValue = $('.skillsValue__value').val();
                    let progressMax = $('.progress-max').each(function () {
                       parseInt($(this).html());
                    });
                    console.log(progressMax);
                    if (progressValue < progressMax) {
                        progressValue++;
                        $('.skillsValue__value').attr('value', progressValue);
                    } else {
                        clearInterval(id);
                    }

                }

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
});