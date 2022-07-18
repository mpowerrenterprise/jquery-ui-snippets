$(document).ready(function () {

    $("#slider").slider({

        slide: function (event, ui) {

            $("#slideText").text(ui.value);
        },

        min: 100,//minimum value the starting point.
        max: 1000,//maxinum value the ending point.
        value: 250,//This is the current value that slider button stick in.
        step:5//This is the step that can be moved.by default 1
    });

});

//slider() makes an div as a slider.
//slide:function is output the values.Code is above.