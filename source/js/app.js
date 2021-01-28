$(document).ready(function () {

    /* Modal */
    // $('#navToggle').click(function () {
    //     $('.modal').fadeIn();
    //     return false;
    // });
    //
    // $('.modal__close').click(function () {
    //     $(this).parents('.modal').fadeOut();
    //     return false;
    // });
    //
    // $(document).keydown(function (e) {
    //     if (e.keyCode === 27) {
    //         e.stopPropagation();
    //         $('.modal').fadeOut();
    //     }
    // })
    let navToggle = $('#navToggle');
    let menuModal = $('#menuModal');
    let modalClose = $('.modal__close');

    navToggle.on('click', function (event) {
        event.preventDefault();

        menuModal.addClass('show');
    });

    modalClose.on('click', function (event) {
        event.preventDefault();

        menuModal.removeClass('show');
    });
});