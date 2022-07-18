$(document).ready(function () {

    $("#names").sortable({

        containment: "document",//I can move the elements within the document.
        cursor: "pointer",//It has pointer cursor.
        tolerance: "pointer",//when the pointer of the mouse hit the next element this will change.
        revert: true,//This will send the element to the normal position.
        opacity:0.5//This is opcity value.




    });

});

//The sortable() function is used for changing the potion of the elements.It is used for alinetmenting purpose.