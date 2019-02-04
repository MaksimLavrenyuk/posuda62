
$(document).ready(function() {
    if (document.documentElement.clientWidth <= 991) {
    	document.getElementById('content').prepend(document.getElementById('header'));
        // инициализация бокового меню
        var snapper = new Snap({
            element: document.getElementById('content'),
            touchToDrag: true,
            tapToClose: true,
            disable: 'right',
            hyperextensible: false
        });
        $('.toggler').click(function() {
            snapper.open('left');
            
        });
 
    };
    if (document.documentElement.clientWidth > 991) {
        jQuery(function($) {
            //Поведение хедера при скролле
            var $nav = $('.header');
            var $win = $('#content');
            var $pageContent = $('.page-content');
            var $basket = $('.header__basket');
            var $iconBasket = $('#iconBasket');
            var headerNavdropdown = $('#headerNavdropdown');
            var headerBottomSection = $('.header-bottom-section');

            var winH = $win.height(); // Get the window height.
            $win.on("scroll", function() {
                if ($(this).scrollTop() > 0) {
                    headerBottomSection.hide();
                    $nav.addClass("fixed-header");
                    $pageContent.addClass('fixed-page-content');
                    $('#HeadFixedLine').append(document.getElementById('basketBlock'));
                    $('.dropfixed').append(document.getElementById('headerNavdropdown'));
                    $basket.addClass('header__basket_fixed');

                } else {
                    headerBottomSection.show();
                    $nav.removeClass("fixed-header");
                    $pageContent.removeClass('fixed-page-content');
                    $('#navbarSupportedContent').append(document.getElementById('basketBlock'));
                    $('#navbarSupportedContentUl').prepend(document.getElementById('headerNavdropdown'));
                    $basket.removeClass('header__basket_fixed');

                }
            }).on("resize", function() { // If the user resizes the window
                winH = $(this).height(); // you'll need the new height value
            });
        });
    };
});