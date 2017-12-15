/**
 * OUVRIR UN ITEM ET FERMER LES AUTRES
 * Etape 1 : quand on clique sur un h1, si celui ci n'a pas la class active, 
 * on ferme tous les p et on ouvre le p suivant le h1 cliqué
 * - si il a la class active, c'est qu'il est deja ouvert donc on fait rien
 
 * Etape 2 : on retire la class active de tous les h1 et on ajoute la class active sur 
 * le h1 cliqué
 * 
 * Etape 3 : on retire l'icon-down sur tous les h1 et on ajouter icon-right sur ts les h1
 * 
 * Etape 4 : on alterne les class icon-down et icon-right sur this h1 (celui cliqué) 
 */

'use strict';

$(function() {

    // start scope
    (function() {

        let question, answer;

        question = $('.accordeon h1');
        answer = $('.accordeon p');

        question.click(function() {
            if (!$(this).hasClass('active')) {
                // Etape 1
                answer.slideUp(600);
                $(this).next('p').slideDown(200);
                // Etape 2
                question.removeClass('active');
                $(this).addClass('active');
                // Etape 3
                question.find('span').removeClass('icon-arrow_drop_down').addClass('icon-navigate_next');
                // Etape 4 
                $(this).find('span').toggleClass('icon-arrow_drop_down icon-navigate_next')
            }
        });
    })();
    // end scope 
});