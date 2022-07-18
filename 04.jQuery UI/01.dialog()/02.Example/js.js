$(function () {//shortcut for ready Function.

    $("#dialogBox").dialog({
        autoOpen:false//by default autoOpen is sat to true.
    });

    $("#opener").on("click", function () {//on() is same as bind() and addEventListener() in JS.

        $("#dialogBox").dialog("open");//This will let the user to open the window.

    
        
        });

});