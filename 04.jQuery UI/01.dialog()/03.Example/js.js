$(function () {//shortcut for ready Function.

    $("#dialogBox").dialog({
     
        show: {//This works when the dialog box is showen.

            effect: "fade",
            duration:1500
        },

        hide: {//This works when the dialog box is hidden.

            effect: "fade",
            duration:2000

        }


    });

   

});