$(document).ready(function () {

    var min_val = 20;
    var max_val = 100;

    $("#slider").slider({

        min: min_val,//This is the minimum value
        max: max_val,//This the maximum value.
       



        slide: function (event,ui) {//This is the function to check the value dynamically.

            $("#slider_value").html(ui.value);//ui.values[0] is the first slider button ui.values[1] is the second slider button.


        },
        orientation:"vertical"//This will make the slider bar as vertical.
    });

});

//slide is a function is to check the values and it takes two perameters like above.
//But still we can select backward and forward.