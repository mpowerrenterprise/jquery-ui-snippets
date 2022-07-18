$(document).ready(function () {

    $("#btnSave").click(function () {

        $("#dialog").attr("title", "Saved").text("It has been saved").dialog({

            buttons: {

                ok: function () {

                    $(this).dialog("close");//This means current function.
                    alert("MSG has been sent to server");
                },
                cancel: function () {

                    $(this).dialog("close");
                }
            },
            draggable:false,//User can't drag the dialog box.
            resizable:false//User can't rizse the dialog box.
        });

    });

});

//you can draggable:false so the user cannot dragg the dialog box.
//Make sure buttons{} is an entire object that is in the dialog main object.
//resizable:false user cannot resize the box.
//by default the user can resize or drag the dialog box.