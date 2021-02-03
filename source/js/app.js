$(document).ready(function () {

    /* Menu modal */
    let navToggle = $('#navToggle');
    let menuModal = $('#menuModal');

    navToggle.on('click', function (event) {
        event.preventDefault();

        $(this).toggleClass('active');
        $('.header__logo--first').toggleClass('hide');
        $('.header__logo--second').toggleClass('show');
        $('.header__right').fadeToggle();
        $('body').toggleClass('lock');
        menuModal.toggleClass('show');
    });

    $(document).on('keydown', function (e) {
        if ( e.keyCode === 27 ) { // ESC
            if (menuModal.hasClass('show')) {

                $(navToggle).toggleClass('active');
                $('.header__logo--first').toggleClass('hide');
                $('.header__logo--second').toggleClass('show');
                $('.header__right').fadeToggle();
                $('body').toggleClass('lock');
                menuModal.toggleClass('show');
            }
        }
    });

    /* Drop down */
    $('.action__link-dropdown').click(function (e) {
        e.preventDefault();

        $('.dropdown').fadeToggle();
        $('.action__icon-dropdown').toggleClass('rotate');
    });

    /* Recommendation slider */
    $('.recommendation-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev btn' aria-label='previous'><svg width='22' height='35' viewBox='0 0 22 35'><use xlink:href='img/sprite.svg#icon-slick-arrow-prev'></use></svg></button>",
        nextArrow: "<button type='button' class='slick-next btn' aria-label='next'><svg width='22' height='35' viewBox='0 0 22 35'><use xlink:href='img/sprite.svg#icon-slick-arrow-next'></use></svg></button>"
    });

    /* Manufacturer slider */
    $('.manufacturer-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev btn' aria-label='previous'><svg width='22' height='35' viewBox='0 0 22 35'><use xlink:href='img/sprite.svg#icon-slick-arrow-prev'></use></svg></button>",
        nextArrow: "<button type='button' class='slick-next btn' aria-label='next'><svg width='22' height='35' viewBox='0 0 22 35'><use xlink:href='img/sprite.svg#icon-slick-arrow-next'></use></svg></button>"
    });
});

{
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', event => {
            event.preventDefault();

            const blockID = anchor.getAttribute('href');
            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
}