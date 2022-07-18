$(document).ready(function () {

    $("#make").on("click", makePra)//on() is like bind() and addEventListener() in Javascript.

    function makePra() {

        var p = $("<p  contenteditable='true' class='k'>Joker Hacker </p>");//I make elements like this.
        $("body").append(p);//I append this to the body element.

        $(".k").draggable();//The text can be draggable.
        
    }

 
   

});