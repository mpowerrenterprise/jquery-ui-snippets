$(document).ready(function () {

    $("#btnSave").click(function () {

        $("#dialog").attr("title", "Saved").text("It has been saved").dialog({

            buttons: {

                ok: function () {

                    $(this).dialog("close");//This means current ok event.
                    alert("MSG has been sent to server");
					
					//We can put the ajax request here or other things.
                },
                cancel: function () {

                    $(this).dialog("close");
                }
            }

        });

    });

});

//If you want to make any buttons in the dialog box.you need make an object called buttons{}
//inside the buttons{} object we can create our buttons "ok" or "cancel" like that.
//Each buttons should have a function like above.
//dialog("close") is to close the dialog box.