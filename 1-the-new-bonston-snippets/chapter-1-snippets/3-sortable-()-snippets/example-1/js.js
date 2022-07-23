$(document).ready(function () {

    $("#names,#places").sortable({

        containment: "document",//I can move the elements within the document.
        cursor: "pointer",//It has pointer cursor.
        tolerance: "pointer",//when the pointer of the mouse hit the next element this will change.
        revert: true,//This will send the element to the normal position.
        opacity:0.5,//This is opcity value.
        connectWith: "#names,#places",//Now #names and #places has been connected together.We can move from #names to #places.
        update: function () {//This works when an element updates.

            var con=$(this).text()//This variable got the all texts.

            $("#sort").text(con);
        },
	




    });

});

//The sortable() function is used for changing the potion of the elements.It is used for alinetmenting purpose.
