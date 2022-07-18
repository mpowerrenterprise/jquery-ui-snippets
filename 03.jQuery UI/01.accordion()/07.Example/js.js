$(function () {//This is the shotcut for document load.

    $("#accordion").accordion({

        active: 1,//The active method specify the opened pane. 1 is the second pane. 0 is the first pane.
        animate: {//This is the animate full object.

            easing: "linear",//easing methoed.
            duration: 250,//duration
            down: {//This occurs when the pane is downing.

                easing: "easeOutBounce",//down easing method.
                duration:600//duration for downing.
            }

        },

        collapsible:true,//We can close all of the pane but by default we can't.

    });

    $("#control").click(function () {

        if ($("#control").attr("value") == "Disable") {

            $("#accordion").accordion("disable");//Dissable the accordion.
            $("#control").attr("value", "Enable");//Change the btn values to "Enable".

        } else {//Otherwise.

            $("#accordion").accordion("enable");//enable the accordion.
            $("#control").attr("value", "Disable");//Change the btn values to "Disable".
        }

    });//This is application is like on and off Switch.

});

//the accordion takes the first html element as heading then the secound element will be the contant box.