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
 * FLECHES IMG SUIVANTE 
 * Etape 1 : compter le nombre d'img dans la galerie (variable)
 * Etape 2 : récupérer index de img cliquée dans la galerie (variable)
 * Etape 3 : quand on clique sur btn pour img suivante, récupérer la valeur 
 * de l'attribut src de l'img index++
 * Etape 4 : si l'index de l'img suivante est < au nombre total d'img dans 
 * la galerie, on incrémente l'index (variable indexImg), sinon on retourne
 * sur l'index 0 (variable indexImg = 0)
 * Etape 5 : remplacer la valeur de l'attribut src de .lightbox img par
 * la valeur de l'attribut src de l'img suivante dans la galerie (variable newSrc)
 * 
 * FLECHE IMG PRECEDENTE
 * Idem bouton next mais en décrémentant indexImg
 * 
 * FONCTION POUR FACTORISER LE CHANGEMENT D'IMG DANS LA LIGHTBOX
 * Etape 1 : créer une fonction qui remplace l'img dans la lightbox et l'appeler à chaque 
 * fois que nécessaire 
 * 
 * GENERER LES PUCES EN FONCTION DU NOMBRE D'IMAGES
 * Etape 1 : déclarer une variable qui contiendra un ensemble ul li 
 * Etape 2 : créer fonction pour générer l'ensemble ul li
 * Etape 3 : créer le bloc ul
 * Etape 4 : créer autant de li qu'il y a d'images dans la galerie
 * Etape 5 : Ajouter l'ensemble ul li dans le dom sous la lightbox
 * 
 * ACTIVER LA PUCE QUI CORRESPOND A L IMAGE CLIQUEE
 * Etape 1 : Créer fonction qui active une puce
 * - supprime class puce-active sur tous les li
 * - ajouter class puce-active sur le li qui a le meme index que indexImg
 * Etape 2 : Appeler la fonction quand on clique sur une img de la galerie
 * - appeler la fonction quand on clique sur les boutons next et before
 * 
 * CHANGER IMAGE QUAND ON CLIQUE SUR UNE PUCE
 * Etape 1 : récupérer index de puce cliquée et l'affecter à indexImg
 * Etape 2 : appeler changeImg() et activePuce()
 * 
 */
'use strict';

$(function() {

    let newSrc, nbImg, indexImg, listPuces;

    nbImg = $('.galerie img').length;

    changeImg = () => {
        newSrc = $('.galerie img').eq(indexImg).attr('src');
        $('.lightbox img').attr('src', newSrc);
    }

    generatePuces = () => {
        listPuces = '<ul class="list-puces">';
        for (let i = 0; i < nbImg; i++) {
            listPuces += '<li></li>';
        }
        listPuces += '</ul>';
        $(".lightbox .cadre").append(listPuces);
    }

    generatePuces();

    activePuce = () => {
        let list = $('.lightbox ul li');
        list.removeClass('puce-active');
        list.eq(indexImg).addClass('puce-active');
    }

    $('.galerie img').click(function() {
        indexImg = $('.galerie img').index($(this));
        changeImg();
        activePuce();
        $('.lightbox').fadeIn().css({ 'display': 'flex' });
    });

    $('.cadre .icon-close').click(function() {
        $('.lightbox').fadeOut();
    });

    $('.cadre .icon-navigate_next').click(function() {
        indexImg = (indexImg + 1) % nbImg;
        changeImg();
        activePuce();
    });

    $('.cadre .icon-navigate_before').click(function() {
        indexImg = ((indexImg - 1) + nbImg) % nbImg;
        changeImg();
        activePuce();
    });

    $('.lightbox li').click(function() {
        indexImg = $('.lightbox li').index($(this));
        changeImg();
        activePuce();
    });

});