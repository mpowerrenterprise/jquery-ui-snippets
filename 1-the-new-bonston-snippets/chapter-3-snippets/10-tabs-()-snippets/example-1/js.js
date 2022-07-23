$(document).ready(function () {

    $("#tabs").tabs({

        ajaxOptions: {

            error: function (xhr,index,status, anchor) {

                $(anchor.hash).text("Page Could not load");
            }


        }

    });

});

//Inside the ajaxOptions we can specify error and other options.
//If the php file has en error error function will run.
