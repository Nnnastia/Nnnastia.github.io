$(document).ready(function(){
    $('.nav__link').on('click', function(){
        let linkHreff = $(this).attr('href');
        let goTo = $(linkHreff).offset().top;
        $('html, body').animate({
            scrollTop: goTo
        }, 500)
        return false;
    });
    $(window).scroll(function(){
        let btn = $('.up__btm');
        if($(window).scrollTop()>600){
            btn.addClass('up-shown');
        } else{
            btn.removeClass('up-shown');
        }
    })
    $('.up__btm').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500)
        $(window).scrollTop()
        return false;
    })
})
