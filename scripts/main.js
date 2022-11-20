// slider
const owl = $('.owl-carousel');

owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    items:3,
    startPosition: 1, 
    responsive : {
        640 : {
            margin: 15,
        },
        850 : {
            margin: 15,
        },
        1000 : {
            margin: 20,
        },
        1200 : {
            margin: 30,
        }
    }
});

$('.slider__btn--r').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.slider__btn--l').click(function() {
    owl.trigger('next.owl.carousel');
})


// menu icon
const navBtn = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");
const menuIcon = document.querySelector('.menu-icon');

navBtn.onclick = function(){
    nav.classList.toggle('nav--mobile')
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('no-scroll');
}
