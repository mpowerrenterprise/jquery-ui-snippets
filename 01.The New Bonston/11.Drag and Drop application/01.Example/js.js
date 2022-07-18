$(document).ready(function () {
    


    $(".item").draggable({
        
    revert:true,
        
        start:function(){
            
            contant=$(this).text();//Globel variable.
        
        }
        
    }); 
    
    $("#box").droppable({
        
        hoverClass:"border",
        accept: ".item",
        drop: function () {

           
            $("#box").append(contant + "<br />");

        }
        
        
    });    
});