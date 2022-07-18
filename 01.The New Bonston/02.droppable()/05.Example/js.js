$(document).ready(function () {

    $("#drag").draggable({

        containment: 'document',
        revert:true


    });

    $("#drop").droppable({//The droppable is the place that we want to drop.

        hoverClass: "border",
        tolerance: "pointer"//The tolerance pointer works when the mouse pointer is touch the drop box.


    });

});