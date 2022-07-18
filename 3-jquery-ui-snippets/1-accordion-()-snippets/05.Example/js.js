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

        }

    });

});

//the accordion takes the first html element as heading then the secound element will be the contant box.