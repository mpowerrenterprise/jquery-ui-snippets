$(document).ready(function () {


    $("#d").draggable({
        containment: "doument",
        revert: true,

        drag: function () {//start is an event.

            $("#event").text("The element is dragging ");

            //This will run while the element is dragging.
            //start event and the drag event are slightly same but they are not.
        },
        stop: function () {//This will run when the dragging is stoped.

            $("#event").text("The dragging stoped");
            $("#event").css("color", "red");
        }

    });




});

//There are many events and other effects in jqueryui website.
//We can easily learn them without studing too much.