$(document).ready(function () {

    $("#drag").draggable({

        containment: 'document',
        revert:true


    });

    $("#drop").droppable({//The droppable is the place that we want to drop.

        hoverClass: "border",
        tolerance: "intersect"//The tolerance intersect is the default.You don't have to put the element fully 50%.


    });

});