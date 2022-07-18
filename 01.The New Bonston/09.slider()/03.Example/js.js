$(document).ready(function () {

    var min_val = 20;
    var max_val = 200;

    $("#slider").slider({

        min: min_val,//This is the minimum value
        max: max_val,//This the maximum value.
        step:5,//setp is the step that we want to go.


        slide: function (event,ui) {//This is the function to check the value dynamically.

            $("#slider_value").html("&pound;"+ui.value);//We put $pound; so we must use html() not text() text() is for texts.


        }
    });

});

//slide is a function is to check the values and it takes two perameters like above.