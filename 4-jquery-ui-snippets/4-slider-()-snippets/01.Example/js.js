$(document).ready(function () {

    $("#slider").slider({

        slide: function (event, ui) {

            $("#slideText").text(ui.value);
        }
    });

});

//slider() makes an div as a slider.
//slide:function is output the values.Code is above.