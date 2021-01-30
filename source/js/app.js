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

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();

            $(navToggle).toggleClass('active');
            $('.header__logo--first').toggleClass('hide');
            $('.header__logo--second').toggleClass('show');
            $('.header__right').fadeToggle();
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