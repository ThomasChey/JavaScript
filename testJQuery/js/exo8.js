$(function () {
    $('#gauche').click(function () {
        $('.bloc').animate({
            "left": "-=50px"
        }, "slow")
    })

    $('#droite').click(function () {
        $('.bloc').animate({
            "left": "+=50px"
        }, "slow")
    })

    $('#haut').click(function () {
        $('.bloc').animate({
            "top": "-=50px"
        }, "slow")
    })

    $('#bas').click(function () {
        $('.bloc').animate({
            "top": "+=50px"
        }, "slow")
    })
 });