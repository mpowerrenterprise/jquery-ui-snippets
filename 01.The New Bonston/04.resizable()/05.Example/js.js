$(document).ready(function () {

    $("#box").resizable({
        animate: true,//We have an animation
        animationDuration: "solw",//This is the duration of the animation.
        animateEasing: "linear",//This is type of the animation by default it is swing.
        autoHide: true,//autoHide hides the resize button when you over the element it will appear.
        grid:[20,20],//This is grid it will resize by 20 width and 20 height.
        ghost:true//This will show a shadow.

    });

});

//The resizable() function is used to make resizable boxes and elements.