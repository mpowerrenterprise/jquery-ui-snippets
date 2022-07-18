$(function () {//This is the shotcut for document load.

    $("#accordion").accordion({

        active: 1,//The active method specify the opened pane. 1 is the second pane. 0 is the first pane.
        animate:250//duration

    });

});

//the accordion takes the first html element as heading then the secound element will be the contant box.