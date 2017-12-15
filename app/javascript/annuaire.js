/**
 * QUAND ON CLIQUE SUR BTN EDITER
 * Etape 1 : passer les contenteditable a true pour la ligne
 * Etape 2 : get texts de la ligne 
 * Etape 3 : avec ajax on envoie les texts a un script php
 */

'use strict';

$(function() {

    // start scope
    (function() {

        let contents = new Array();

        $('.annuaire .icon-border_color').click(function() {
            $(this).parent('p')
                .parent('div')
                .parent('.line')
                .find('[contenteditable]')
                .each(function(index, contenu) {
                    console.log(index, contenu);
                    // console.log(contenu.textContent);
                    $(this).attr('contenteditable', 'true');
                    contents.push(contenu.textContent);
                });
            console.log(contents)
        });


    })();
    // end scope 

});