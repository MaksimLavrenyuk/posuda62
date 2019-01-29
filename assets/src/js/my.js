// Импортируем header
//= header/header.js

// Импортируем modal-feedback
//= modal-feedback/modal-feedback.js

// Импортируем filter
//= order/order.js

// Импортируем filter
//= comment/comment.js

// Импортируем filter
//= scroll-on-top/scroll-on-top.js


$(document).ready(function() {
    $('[name="phone"]').mask("+7 (999) 999-99-99");
});
//прелоудер
$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});