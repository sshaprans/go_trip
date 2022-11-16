const owl = $('.owl-carousel');

owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    item:3,
    startPosition: 1, 
});

$('.slider__btn--r').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.slider__btn--l').click(function() {
    owl.trigger('next.owl.carousel');
})

