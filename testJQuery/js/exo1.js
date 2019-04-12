// INTERDIRE LE CLIC DROIT SUR UNE PAGE

$(function(){

$(document).contextmenu(function(clicDroit){
    clicDroit.preventDefault();
})
  
});




