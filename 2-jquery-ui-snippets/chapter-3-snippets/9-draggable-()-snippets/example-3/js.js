$(document).ready(function () {

    $("#box").draggable({

        start: function () {//This will work when the dragging is stated.


            $(this).css("background-color", "green");

        },

        stop: function () {//This will work when the dragging is stoped.

            $(this).css("background-color", "red");

        }
    });

});