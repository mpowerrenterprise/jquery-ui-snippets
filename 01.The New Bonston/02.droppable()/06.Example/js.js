$(document).ready(function () {

    $("#drag").draggable({

        containment: 'document',
        revert:true


    });

    $("#drop").droppable({//The droppable is the place that we want to drop.

        hoverClass: "border",
        tolerance: "touch"//The tolerance touch works when it is touched the box.


    });

});