$(document).ready(function () {


    $("#d").draggable({
        containment: "doument",
        revert: true,

        start: function () {//start is an event.

            $("#event").text("The dragging is started");

            //This will run when the dragging started.

        },


    });




});


//jQuery UI used to make user interface applications.
//jQuery UI is written in jQuery.
//It hsa many functions.
//We can make any application easily.

