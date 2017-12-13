/**
 * ACTIVER LA LIGHTBOX
 * Etape 1 : quand on clique sur une img on ouvre la lightbox
 * 
 * CLOSE LA LIGHTBOX
 * Etape 1 : quand on clique sur .cadre .icon-close on ferme la lightbox
 * 
 * REMPLACER IMG LIGHTBOX PAR IMG CLIQUEE
 * Etape 1 : Quand on clique sur une img de la galerie on récupère la 
 * valeur de son attribut src (variable)
 * Etape 2 : On remplace la valeur de l'attribut src de .lightbox img par 
 * la valeur de l'attribut src de l'img cliquée dans la galerie (variable)
 * 
 * FLECHES IMG SUIVANTE ET PREV
 * Etape 1 : compter le nombre d'img dans la galerie (variable)
 * Etape 2 : récupérer index de img cliquée dans la galerie (variable)
 * Etape 3 : quand on clique sur btn pour img suivante, récupérer la valeur 
 * de l'attribut src de l'img index+1
 */

$(function() {

    let newSrc;
    let ngImg;
    let indexImg;

    nbImg = $('.galerie img').length;

    $('.galerie img').click(function() {
        newSrc = $(this).attr('src');
        indexImg = $('.galerie img').index($(this));
        $('.lightbox img').attr('src', newSrc);
        $('.lightbox').fadeIn().css({ 'display': 'flex' });
    });

    $('.cadre .icon-close').click(function() {
        $('.lightbox').fadeOut();
    });

    $('.cadre .icon-navigate_next').click(function() {
        console.log($('.galerie img').eq(indexImg + 1).attr('src'));
    });

});