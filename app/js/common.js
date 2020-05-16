$('.btn-burger').click(function () {
    $('.overlay').fadeIn();
    $('.mobile-menu').fadeIn();
});

$('.btn-close').click(function () {
    $('.mobile-menu').fadeOut();
    $('.overlay').fadeOut();
});

$('.dropItem').click(function () {
    $(this).find('.dropDown-menu').fadeToggle();
});

$(document).ready(function($){
    if($('.tab-content .row').find('.blog-box__wrap').length > 3){
        $('.links-more').click(function(e){
            e.preventDefault();
            $('.tab-content .row .blog-box__wrap:nth-child(n+4)').slideDown('');
        });
    }


});

$('.strategy-slider').slick({
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
});