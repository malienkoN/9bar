$(document).ready(function () {

    /* Menu modal */
    let navToggle = $('#navToggle');
    let menuModal = $('#menuModal');

    navToggle.on('click', function (event) {
        event.preventDefault();

        $(this).toggleClass('active');
        $('.header__logo--first').toggleClass('hide');
        $('.header__logo--second').toggleClass('show');
        $('body').toggleClass('lock');
        menuModal.toggleClass('show');
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();

            $(navToggle).toggleClass('active');
            $('.header__logo--first').toggleClass('hide');
            $('.header__logo--second').toggleClass('show');
            $('body').toggleClass('lock');
            menuModal.toggleClass('show');
        }
    });

    /* Drop down */
    $('.action__link-dropdown').click(function (e) {
        e.preventDefault();

        $('.dropdown').fadeToggle();
        $('.action__icon-dropdown').toggleClass('rotate');
    });

    // /* Smooth scroll */
    // $('.intro__scroll-down').click(function (event) {
    //     event.preventDefault();
    //
    //     $('html, body').animate({
    //         scrollTop: $($(this).attr('href')).offset().top + 'px'
    //     }, {
    //         duration: 1000,
    //         easing: 'swing'
    //     });
    //     return false;
    // })
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