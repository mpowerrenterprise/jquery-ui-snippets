$(document).ready(function () {

    $("#drag").draggable({

        containment: 'document',
        revert:true


    });

    $("#drop").droppable({//The droppable is the place that we want to drop.

        hoverClass: "border"//The hoverClass is used to give a class when we are hovering over it. 

    });

});