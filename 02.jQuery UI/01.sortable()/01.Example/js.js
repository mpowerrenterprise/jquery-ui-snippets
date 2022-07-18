$(document).ready(function () {

    $("#box1").sortable({

        connectWith:"#box2"

    });

    $("#box2").sortable({

        connectWith:"#box1"

    });

});

//The sortable() aollows to sort within boxes.
//connectWith is used to connects with others.