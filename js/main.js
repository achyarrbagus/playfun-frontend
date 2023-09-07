$( document ).ready(function() {
    new Swiper('.swiper-main', {
        loop: true,
        slidesPerView: 1.35,
        centeredSlides: false,
        spaceBetween : 16,
        speed: 500,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });

    new Swiper('.swiper-popular', {
        loop: true,
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween : 16,
        speed: 500,
        autoplay: {
            delay: 4000,
        },
    });

    if ($('body').find('.section--last').length > 0){ 
        $('.content').css('padding-bottom', '0');
    }
});

$('.button-favorite').click(function() {
    $(this).toggleClass('active');

    if($('.button-favorite').hasClass('active')) {
        alert('Game added to favorite');
    } else {
        alert('Game removed from favorite')
    }
})

$('#search').click(function() {
    $('.header-search').slideToggle();
})

$( window ).on('load', function(){
    $('.loader').fadeOut('slow');
});