$(function(){

    $('.bouton').on("click", function(){
        var one = $(".one").html()
        var two = $(".two").html()
        $(".one").html(two)
        $(".two").html(one)

    });
 

});