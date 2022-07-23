$(document).ready(function () {

    $("#date").datepicker({


        dateFormat:"dd/mm/yy"//Day month Year.
    });

});

//dateFormat: mm/dd/yy = month day year this is default.
//dateFormat: yy/mm/dd = year month day.
//dateFormat: dd/mm    = day month and so on.
//We can also use -  and any symbols instead of "/"
//We can also use white spaces for this.

//dateFormat: is used to defind the type of the datePicker.
//The datepicker() is used to make datepickers.