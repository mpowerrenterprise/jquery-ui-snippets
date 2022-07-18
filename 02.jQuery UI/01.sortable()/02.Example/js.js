$(document).ready(function () {

    $("#box1").sortable({

        connectWith:"#box2,#box3"

    });

    $("#box2").sortable({

        connectWith:"#box1,#box3"

    });

    $("#box3").sortable({

        connectWith:"#box1,#box2"
    });
});

//The sortable() aollows to sort within boxes.
//connectWith is used to connects with others.
//we can connect more at one time by using a comma.