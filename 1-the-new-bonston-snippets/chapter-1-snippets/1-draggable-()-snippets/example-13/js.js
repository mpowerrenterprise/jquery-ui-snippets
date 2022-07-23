$(document).ready(function () {


    $("#d").draggable({
        containment: "doument",
        revert: true,

        drag: function () {//start is an event.

            $("#event").text("The element is dragging ");

            //This will run while the element is dragging.
            //start event and the drag event are slightly same but they are not.
        },


    });




});


//jQuery UI used to make user interface applications.
//jQuery UI is written in jQuery.
//It hsa many functions.
//We can make any application easily.

