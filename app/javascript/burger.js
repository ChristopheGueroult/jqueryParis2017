/**
 * Quand on clique sur icon-dehaze (burger), on passe 
 * le nav en display block avec une animation
 */

$(function() {

    $('body>header span').click(function() {
        $('nav').slideToggle();
    });

});