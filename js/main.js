$(document).ready(function() {
    $('.header-offer').slick({
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev header-slider-btn"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next header-slider-btn"><i class="fas fa-chevron-right"></i></button>'

      });
})