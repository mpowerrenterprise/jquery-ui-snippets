$(document).ready(function () {

    $("#drag").draggable({

        containment: 'document',
        revert:true


    });

    $("#drop").droppable({//The droppable is the place that we want to drop.

        drop: function () {//The drop is a function it works when we drop an element into it.

            alert("dropped");
        }
    });

});