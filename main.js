$(function() {

    $('.sea').hide();
            setInterval(function() {
                $(".main-image img:first-child").fadeOut(0).
                next(".main-image img:nth-child(2)").fadeIn(2000).
                end().
                appendTo(".main-image");
            }, 5000);

            $('.menu-bar li:nth-child(n+2)').hide();
            $('.menu-bar li:first-child').on('click', () => {
            $('.menu-bar li:nth-child(n+2)').slideToggle('slow');
            });
});