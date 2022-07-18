$(document).ready(function () {

    $("#slider").slider({
        min: 100,
        max:1000,
        values: [250, 500, 63, 750],//values allows mutiple slider pins.
        slide: function (event, ui) {

            $("#slideText").text(ui.values[0]+" to "+ui.values[1]+" to "+ui.values[2]+" to "+ui.values[3]);

        }

    });

});