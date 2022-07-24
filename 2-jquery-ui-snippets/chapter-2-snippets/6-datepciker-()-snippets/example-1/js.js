$(document).ready(function () {

    $("#startd").datepicker({

        showAnim: "slideDown",//The animation effect.
        dateFormat: "yy-mm-dd",//This is the format of the date we can use any symbol instead of -.
        numberOfMonths:3//This will show 3 months pane.
    });

    $("#endd").datepicker({

        showAnim: "slideDown",
        dateFormat: "mm-yy-dd",
        numberOfMonths:3

    });

});