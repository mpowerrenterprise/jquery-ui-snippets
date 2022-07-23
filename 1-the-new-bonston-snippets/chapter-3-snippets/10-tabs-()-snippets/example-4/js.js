$(document).ready(function () {

    $("#tabs").tabs().find(".btns").sortable();

});

//The sortable() allows the user to rearrange the btns dynamically.
//We have only apply this sortable() method to btns
//We have used find() method to find the .btns