$(function () {

    function leStyle() {
        $("#nouvelles").css({
            color: 'red',
            fontWeight: 'bold',
        })
    }

    function Clignoter() {
        $("#nouvelles").animate({
            opacity: 0.05
        }, 500,
            function () {
                $("#nouvelles").css("opacity", 1)
                Clignoter();
            })

    };

    leStyle();
    Clignoter();

});