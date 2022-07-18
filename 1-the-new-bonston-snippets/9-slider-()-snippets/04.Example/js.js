$(document).ready(function () {

    var min_val = 20;
    var max_val = 200;

    $("#slider").slider({

        min: min_val,//This is the minimum value
        max: max_val,//This the maximum value.
        range: true,//The range is use to give a certain ammount of values to choose from.
        values:[40,80],//I heve selected 40 to 80.



        slide: function (event,ui) {//This is the function to check the value dynamically.

            $("#slider_value").html("&pound;"+ui.values[0]+" &pound"+ui.values[1]);//ui.values[0] is the first slider button ui.values[1] is the second slider button.


        }
    });

});

//slide is a function is to check the values and it takes two perameters like above.
//But still we can select backward and forward.