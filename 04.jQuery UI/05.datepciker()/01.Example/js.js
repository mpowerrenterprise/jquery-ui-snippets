$(document).ready(function () {

    $("#startd").datepicker({

        showAnim: "slideDown",//The animation effect.
        dateFormat:"yy-mm-dd"//This is the format of the date we can use any symbol instead of -.
    });

    $("#endd").datepicker({

        showAnim: "slideDown",
        dateFormat:"mm-yy-dd"

    });

});