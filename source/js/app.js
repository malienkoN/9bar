$(document).ready(function () {

    /* Menu Modal */
    let navToggle = $('#navToggle');
    let menuModal = $('#menuModal');

    navToggle.on('click', function (event) {
        event.preventDefault();

        $(this).toggleClass('active');
        $('.header__logo--first').toggleClass('hide');
        $('.header__logo--second').toggleClass('show');
        menuModal.toggleClass('show');
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();

            $(navToggle).toggleClass('active');
            $('.header__logo--first').toggleClass('hide');
            $('.header__logo--second').toggleClass('show');
            menuModal.toggleClass('show');
        }
    });

    /* Drop Down */
    $('.action__link-dropdown').click(function (e) {
        e.preventDefault();

        $('.dropdown').fadeToggle();
        $('.action__icon-dropdown').toggleClass('rotate');
    });
});