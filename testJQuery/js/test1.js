$(function(){

/* $contenu = $("#message").text()
alert($contenu)
$("#message").text("Hello World !"); */

$("button").mouseover( function (){
    $("#message2").animate({
        height:"toggle"
    },1000)
   
});
$a = $("a:first")
$a.attr("href", "http://www.monnouveaulien.com")
$a.text("Nouveau texte")

$a.hover(function(){
     $(this).css("color","red") 
     $(this).css("cursor","row-resize") 
},function(){
    $(this).css("color","blue") 
})
$a.click(function(event){
    event.preventDefault();
})
});