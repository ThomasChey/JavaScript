//DEBUT JQUERY
$(document).ready(function(){
    $('.champ input').keyup(function(){
        var vide = false;

        $('.champ input').each(function(){
            if($(this).val().length == 0){
                vide = true;
            }
       })
       if(vide){
           $('.valid input').attr('disabled','disabled')
       }
       else{
           $('.valid input').removeAttr('disabled');
       }

    })
//FIN jQuery

});