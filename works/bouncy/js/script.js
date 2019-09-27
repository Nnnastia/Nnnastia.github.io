$(document).ready(function(){

    $('#portfolio-filter a').on('click',function(){
        let dataAttr = $(this).attr('data-name');
        $('.portfolio_column__item').addClass('portfolio-item-hidden');
        $('.'+dataAttr).removeClass('portfolio-item-hidden');
        console.log(dataAttr);
        $('.'+dataAttr).css('display','block');
        return false;
    });
   
      $(window).scroll(function(){
        let goTop = $('#go-top');
        if ($(window).scrollTop() >= 300){
            $(goTop).fadeIn('slow');
        } else{
            $(goTop).fadeOut('slow');
        }
    });
    $('#go-top').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 900);
        return false;
    });

    $('.details_icons__item').on('click',function(){
        $(this).addClass('details-icons-item-active');
        $('.details_icons__item').not(this).removeClass('details-icons-item-active');
       

        return false;
    });

	$('.owl-carousel').owlCarousel({
        // autoplay:true,
        // autoplayTimeout:5000,
        // autoplayHoverPause:true,
        loop:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }

    });
    $('#owl-one').owlCarousel({
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true
    });
   
});

 // $('.portfolio_wrap__grid').imagesLoaded( function(){
        // $('.portfolio_wrap__grid').masonry({
        //     itemSelector:'.portfolio_wrap__grid_item',
        //     gutter: 5
        // });
    // });