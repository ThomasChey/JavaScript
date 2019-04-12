// Ecrire un formulaire et rendre inactive le bouton d'envoie si les elements obligatoire du formulaire ne sont pas remplies

/* $(function(){

    $('input[type="submit"]').prop("disabled", true);

    $('input[type="text"]').keyup(function() {
        if($(this).val() != '' && $(this).val().length>=3){
            $('input[type="submit"]').prop('disabled', false);
        }
    });
}); */

// ******************** CORRECTION *********************

//DEBUT jQuery
$(document).ready(function(){
    $('.champ input').keyup(function(){
        var vide = false;

        $('.champ input').each(function(){
            if($(this).val().length == 0){
                vide = true;
            }
       })
       if(vide){
           $('.actions input').attr('disabled','disabled')
       }
       else{
           $('.actions input').removeAttr('disabled');
       }

    })
//FIN jQuery

});
