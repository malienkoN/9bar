$(document).ready(function () {

    /* Menu modal */
    let navToggle = $('#navToggle');
    let menuModal = $('#menuModal');

    navToggle.on('click', function (event) {
        event.preventDefault();

        $(this).toggleClass('active');
        $('.header__logo--first').toggleClass('hide');
        $('.header__logo--second').toggleClass('show');
        $('.header__right').toggleClass('delete');
        $('.header').toggleClass('clicked');
        $('body').toggleClass('lock');
        menuModal.toggleClass('show');
    });

    $(document).on('keydown', function (e) {
        if ( e.keyCode === 27 ) { // ESC
            if (menuModal.hasClass('show')) {

                $(navToggle).toggleClass('active');
                $('.header__logo--first').toggleClass('hide');
                $('.header__logo--second').toggleClass('show');
                $('.header__right').toggleClass('delete');
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

    $('.action__link-search__dropdown').click(function (e) {
        e.preventDefault();

        $('.search-dropdown').fadeToggle();
    })

    /* popup */
    let popupFade = $('.popup-fade');

    $('.popup-open').click(function() {
        popupFade.toggleClass('visible');
        $('body').toggleClass('lock');
        return false;
    });

    // Клик по ссылке "Закрыть".
    $('.popup-close').click(function() {
        $('body').toggleClass('lock');
        $(this).parents('.popup-fade').toggleClass('visible');
        return false;
    });

    // Закрытие по клавише Esc.
    $(document).on('keydown', function (e) {
        if ( e.keyCode === 27 ) { // ESC
            if (popupFade.hasClass('visible')) {

                $('body').toggleClass('lock');
                popupFade.toggleClass('visible');
            }
        }
    });

    // Клик по фону, но не по окну.
    popupFade.click(function(e) {
        if ($(e.target).closest('.popup').length === 0) {
            $('body').toggleClass('lock');
            $(this).toggleClass('visible');
        }
    });

    /* Recommendation slider */
    $('.recommendation-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev btn' aria-label='previous'><svg width='22' height='35' viewBox='0 0 22 35'><use xlink:href='img/sprite.svg#icon-slick-arrow-prev'></use></svg></button>",
        nextArrow: "<button type='button' class='slick-next btn' aria-label='next'><svg width='22' height='35' viewBox='0 0 22 35'><use xlink:href='img/sprite.svg#icon-slick-arrow-next'></use></svg></button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
        ]
    });

    /* Manufacturer slider */
    $('.manufacturer-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev btn' aria-label='previous'><svg width='22' height='35' viewBox='0 0 22 35'><use xlink:href='img/sprite.svg#icon-slick-arrow-prev'></use></svg></button>",
        nextArrow: "<button type='button' class='slick-next btn' aria-label='next'><svg width='22' height='35' viewBox='0 0 22 35'><use xlink:href='img/sprite.svg#icon-slick-arrow-next'></use></svg></button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
        ]
    });

    /* Reviews slider */
    $('.reviews-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev btn' aria-label='previous'><svg width='12' height='19' viewBox='0 0 12 19'><use xlink:href='img/sprite.svg#icon-slick-arrow-prev'></use></svg></button>",
        nextArrow: "<button type='button' class='slick-next btn' aria-label='next'><svg width='12' height='19' viewBox='0 0 12 19'><use xlink:href='img/sprite.svg#icon-slick-arrow-next'></use></svg></button>",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
        ]
    });
});

    /* Smooth scroll to the anchors */
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