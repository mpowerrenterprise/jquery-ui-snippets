$(document).ready(function () {

    $("#btnSave").click(function () {


        $("#dialog").attr("title", "Saved").text("It has been changed").dialog();


    });


});

//dialog() is used to make an dialog box.
//you need a div element fot a dialog box.
//The title attribute is the heading.
//The text() is the content or messagea.
//we can also give dicretly the title value and text value in the html.
//But here i heve put everthings as programmtically.
//We need to put the word dialog() before the div element that will automatically make a dialog box.