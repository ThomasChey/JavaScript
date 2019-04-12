$(function () {
    $('#button').on('mousedown', function (event) {
        if (event.which === 1) {
            $("#button").text("Clic gauche");
        }
        else if (event.which === 3) {
            $("#button").text("Clic droit");
        }
        else{
            $("#button").text("Clic molette");
        }
    });
});