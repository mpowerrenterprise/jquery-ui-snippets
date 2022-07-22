$(document).ready(function () {

    $("#slider").slider({

        slide: function (event,ui) {

            $("#slider_value").html("&pound;"+ui.value);//We put $pound; so we must use html() not text() text() is for texts.


        }
    });

});

//slide is a function is to check the values and it takes two perameters like above.