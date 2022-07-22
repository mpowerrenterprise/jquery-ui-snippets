$(document).ready(function () {

    $("#date").datepicker({


        dateFormat: "dd/mm/yy",
        minDate: "-1m -15d",//we can pick a date before 1 month and 15 days back form the current date.
        maxDate:15//we can pick only 15 days forward.


    });

});


//minDate: is used to define the minimum date.
//maxDate: is used to define the maximum date.
//We can put it in the "0" string format ot numerical format
//minDate:-1m -15d means backward 1 month and 15 days.
//maxDate:15 forward


