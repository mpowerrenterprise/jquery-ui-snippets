$(document).ready(function () {

    $("#date").datepicker({


        dateFormat: "dd/mm/yy",
        minDate: 0,//0 is the current day(minimum day).so we can't pick a date before the current date.
        maxDate: 20//20 is maximum days so we can't pick a date after the 20 days forward.

    });

});

//minDate: is used to define the minimum date.
//maxDate: is used to define the maximum date.
//We can put it in the "0" string format ot numerical format.
//Within the current day and 20 days forward.We can pick date

