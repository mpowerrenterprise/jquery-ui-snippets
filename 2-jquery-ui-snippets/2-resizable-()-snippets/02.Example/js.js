$(document).ready(function () {


    $("#box").resizable({

        handles:"n,e,s,w,ne,se,sw,nw"//All sites
    }).draggable({//This allows to drag the div element.


        start: function () {//when dragging is started.

            $(this).css("background-color", "green");

        },

        stop: function () {//when dragging is stoped.

            $(this).css("background-color", 'red');
        }
    });

});

//resizable() allows to resize things like this.