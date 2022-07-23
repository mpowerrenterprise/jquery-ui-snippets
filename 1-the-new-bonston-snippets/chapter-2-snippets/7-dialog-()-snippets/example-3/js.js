$(document).ready(function () {

    $("#btnSave").click(function () {


        $("#dialog").text("This is a message").attr("title", "Saved").dialog({

            buttons: {//These are the buttons.

                Ok: function () {

                    $(this).dialog("close");
                    alert("MSG has been sent");

                },
                Cancel: function () {

                    $(this).dialog("close");

                }

            },
            draggable: false,//no draggable
            resizable: false,//no resizable
            show:"bounce"//show is the animation type.


        });

    });
});

//There are lots of animation types in the jquery ui document.
//Go and study everything.