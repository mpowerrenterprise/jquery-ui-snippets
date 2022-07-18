$(document).ready(function () {


    $("#btnSave").click(function () {

        $("#dialog").attr("title", "saved").text("HelloWorld").dialog({

            buttons: {//buttons

                ok: function () {

                    $(this).dialog("close");

                }
            },
            draggable: false,//no draggable
            resizable: false,//no resizable
            show: "fadeIn",//fadeIn aniamtion
            modal:true//This is goning to make the background as transprent.cann't click or accsess anything in the bacground.

        });

    });

});