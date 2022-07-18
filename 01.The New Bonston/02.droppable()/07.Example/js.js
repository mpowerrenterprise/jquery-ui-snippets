$(document).ready(function () {

    $(".names,.place").draggable({

        containment: "document",
        cursor: "pointer",
        revert:true


    });

    $("#drop").droppable({
        hoverClass: "border",
        tolerance: "pointer",//we can drop when mouse pointer hits the drop box.
        accept:".names",//This will only allow .name classes but place classes does not allow.

        over: function () {//This will works if something overs the drop box.

            $("#drop").text("Someting has over the drop box");
        },

        out: function () {//This will work something is got away form the drop box.

            $("#drop").text("Something has left form the drop box ");

        },

        drop: function () {//This will work if anyting drops in the box.

            alert("Dropped finished");

        }


    });

});