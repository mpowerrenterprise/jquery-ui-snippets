$(document).ready(function () {



    $("#btn").click(function () {

        var val = 0;//This is the value.

         inter = setInterval(function () {//every 50 milli second this function will run.

            val++;//increse one by one every 50 millisecond.

            $("#pb").progressbar({ value: val });//Dynamically change it's value.

            $("#p").text(val + "%");//This is for displaying purpose.

            if (val == 50) {//if the value hits 50 stop it.
                clearInterval(inter);
            }

        }, 50);

    });

    
});