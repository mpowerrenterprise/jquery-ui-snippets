$(document).ready(function () {

    $("#drag").draggable({

        containment: 'document',
        revert:true


    });

    $("#drop").droppable({//The droppable is the place that we want to drop.

        hoverClass: "border",
        tolerance:"fit"//The tolerance fit means you have to put the element fully in the drop box.

    });

});