# The New Bonston Snippets

## 1. Draggable () snippets


### Example 1

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="jquery-ui.min.css" rel="stylesheet" type="text/css" />
        <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

    <h1 id="d" >Hello world</h1>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

```JavaScript
$(document).ready(function () {

    $("#d").draggable();//This single line of code make that element draggable.

});

//jQuery UI used to make user interface applications.
//jQuery UI is written in jQuery.
//It hsa many functions.
//We can make any application easily.
```
### Output

![Banner Image](github-content/example-1-0-output.gif/)

### Example 1

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="jquery-ui.min.css" rel="stylesheet" type="text/css" />
        <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

    <h1 id="d" >Hello world</h1>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#d").draggable({ axis: "x" });//This only allows to move Horizontally.

});

//jQuery UI used to make user interface applications.
//jQuery UI is written in jQuery.
//It hsa many functions.
//We can make any application easily.
```

### Output

![Banner Image](github-content/example-1-1-output.gif/)

### Example 2

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="jquery-ui.min.css" rel="stylesheet" type="text/css" />
        <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

    <h1 id="d" >Hello world</h1>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#d").draggable({ axis: "y" });//This only allows to move vertically.

});

//jQuery UI used to make user interface applications.
//jQuery UI is written in jQuery.
//It hsa many functions.
//We can make any application easily.
```

### Output

![Banner Image](github-content/example-1-2-output.gif/)

### Example 3

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

    <span id="d" >Hello World</span>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#d").draggable({ containment: 'document' });//This only allows to move within the document.

});

//jQuery UI used to make user interface applications.
//jQuery UI is written in jQuery.
//It hsa many functions.
//We can make any application easily.
```

### Output

![Banner Image](github-content/example-1-3-output.gif/)

### Example 4

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

    <span id="d" >Hello World</span>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#d").draggable({ containment: 'window' });//This only allows to move within the window.

});

//jQuery UI used to make user interface applications.
//jQuery UI is written in jQuery.
//It hsa many functions.
//We can make any application easily.
```

### Output

![Banner Image](github-content/example-1-4-output.gif/)

### Example 5

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

    <div id="box">

        <span id="d">Hello World</span>

    </div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#box {

    width:500px;
    height:500px;
    border:2px solid black;

}
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#d").draggable({ containment: 'parent' });//This only allows to move within the parent element.

});

//jQuery UI used to make user interface applications.
//jQuery UI is written in jQuery.
//It hsa many functions.
//We can make any application easily.

```

### Output

![Banner Image](github-content/example-1-5-output.gif/)

### Example 6

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

    <div id="box">

        <span id="d">Hello World</span>

    </div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#box {

    width:500px;
    height:500px;
    border:2px solid black;

}
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#d").draggable({ axis:"x",containment: 'parent' });//This only allows to move within the parent element horzontally.

});

//jQuery UI used to make user interface applications.
//jQuery UI is written in jQuery.
//It hsa many functions.
//We can make any application easily.

$(document).ready(function () {

    $("#d").draggable({ axis:"x",containment: 'parent' });//This only allows to move within the parent element horzontally.

});

//jQuery UI used to make user interface applications.
//jQuery UI is written in jQuery.
//It hsa many functions.
//We can make any application easily.
```

### Output

![Banner Image](github-content/example-1-6-output.gif/)

### Example 7

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

        <span id="d">Hello World</span>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#d").draggable({containment:[0,0,200,200]}); //{containment: [x1,y1 x2, y2] } x1 and y1 are the starting area. x2 and y2 are the end area.
                                                    //This only allows to move within this coordinans area.This will take an array format.
});

//jQuery UI used to make user interface applications.
//jQuery UI is written in jQuery.
//It hsa many functions.
//We can make any application easily.
```

### Output

![Banner Image](github-content/example-1-7-output.gif/)

### Example 8

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

        <span id="d">Hello World</span>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#d").draggable({ containment: [0, 0, 500, 500], cursor: "pointer", opacity: 0.5 });//The cursor is used to give cursors.
                                                                                         //opacity will change while we are dragging
});

//jQuery UI used to make user interface applications.
//jQuery UI is written in jQuery.
//It hsa many functions.
//We can make any application easily.
```

### Output

![Banner Image](github-content/example-1-8-output.gif/)

### Example 9

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

        <span id="d">Hello World</span>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#d").draggable({ containment: "doument",grid:[20,20]});//The grid is for giving some grid options for moving.

});

//jQuery UI used to make user interface applications.
//jQuery UI is written in jQuery.
//It hsa many functions.
//We can make any application easily.
```

### Output

![Banner Image](github-content/example-1-9-output.gif/)

### Example 10

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

        <span id="d">Hello World</span>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#d").draggable({ containment: "doument", revert: true});//The revert will move the element back to the original position while the dragging finished.

});

//jQuery UI used to make user interface applications.
//jQuery UI is written in jQuery.
//It hsa many functions.
//We can make any application easily.
```

### Output

![Banner Image](github-content/example-1-10-output.gif/)

### Example 11

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

        <span id="d">Hello World</span>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#d").draggable({ containment: "doument", revert: true, revertDuration: 5000 });//The revert will move the element back to the original position while the dragging finished.                                                                                      //The revertDuration is the duration

});

//jQuery UI used to make user interface applications.
//jQuery UI is written in jQuery.
//It hsa many functions.
//We can make any application easily.
```

### Output

![Banner Image](github-content/example-1-11-output.gif/)

### Example 12

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>
        <span id="d">Hello World</span>

    <div id="event"></div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#d").draggable({
        containment: "doument",
        revert: true,

        start: function () {//start is an event.

            $("#event").text("The dragging is started");

            //This will run when the dragging started.

        },

    });

});

//jQuery UI used to make user interface applications.
//jQuery UI is written in jQuery.
//It hsa many functions.
//We can make any application easily.
```

### Output

![Banner Image](github-content/example-1-12-output.gif/)

### Example 13

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

        <span id="d">Hello World</span>

    <div id="event"></div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#d").draggable({
        containment: "doument",
        revert: true,

        drag: function () {//start is an event.

            $("#event").text("The element is dragging ");

            //This will run while the element is dragging.
            //start event and the drag event are slightly same but they are not.
        },

    });

});

//jQuery UI used to make user interface applications.
//jQuery UI is written in jQuery.
//It hsa many functions.
//We can make any application easily.
```

### Output

![Banner Image](github-content/example-1-13-output.gif/)

### Example 14

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

        <span id="d">Hello World</span>

    <div id="event"></div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#d").draggable({
        containment: "doument",
        revert: true,

        drag: function () {//start is an event.

            $("#event").text("The element is dragging ");

            //This will run while the element is dragging.
            //start event and the drag event are slightly same but they are not.
        },
        stop: function () {//This will run when the dragging is stoped.

            $("#event").text("The dragging stoped");
            $("#event").css("color", "red");
        }

    });

});

//There are many events and other effects in jqueryui website.
//We can easily learn them without studing too much.
```

### Output

![Banner Image](github-content/example-1-14-output.gif/)

## 2. Droppable () snippets

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

    <span id="drag">Drag Me</span>

    <div id="drop">

    </div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#drop {

    width:300px;
    height:300px;
    border:2px solid red;
    position:relative;
    left:500px;
    top:200px;
}
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#drag").draggable({

        containment: 'document',
        revert:true

    });

    $("#drop").droppable({//The droppable is the place that we want to drop.

        drop: function () {//The drop is a function it works when we drop an element into it.

            alert("dropped");
        }
    });

});
```

### Output

![Banner Image](github-content/example-2-0-output.gif/)

### Example 1

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

    <span id="drag" style="z-index:10;">Drag Me</span>

    <div id="drop">

    </div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#drop {

    width:300px;
    height:300px;
    background-color:lightgray;
    position:relative;
    left:500px;
    top:200px;
    z-index:0;
}

.border {

    border:2px solid red;

}
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#drag").draggable({

        containment: 'document',
        revert:true

    });

    $("#drop").droppable({//The droppable is the place that we want to drop.

        hoverClass: "border"//The hoverClass is used to give a class when we are hovering over it.

    });

});
```

### Output

![Banner Image](github-content/example-2-1-output.gif/)

### Example 2

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

    <span id="drag" style="z-index:10;">Drag Me</span>

    <div id="drop">

    </div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#drop {

    width:300px;
    height:300px;
    background-color:lightgray;
    position:relative;
    left:500px;
    top:200px;
    z-index:0;
}

.border {

    border:2px solid red;

}
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#drag").draggable({

        containment: 'document',
        revert:true

    });

    $("#drop").droppable({//The droppable is the place that we want to drop.

        hoverClass: "border",
        tolerance:"fit"//The tolerance fit means you have to put the element fully in the drop box.

    });

});
```

### Output

![Banner Image](github-content/example-2-2-output.gif/)

### Example 3

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

    <span id="drag" style="z-index:10;">Drag Me</span>

    <div id="drop">

    </div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#drop {

    width:300px;
    height:300px;
    background-color:lightgray;
    position:relative;
    left:500px;
    top:200px;
    z-index:0;
}

.border {

    border:2px solid red;

}
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#drag").draggable({

        containment: 'document',
        revert:true

    });

    $("#drop").droppable({//The droppable is the place that we want to drop.

        hoverClass: "border",
        tolerance: "intersect"//The tolerance intersect is the default.You don't have to put the element fully 50%.

    });

});
```

### Output

![Banner Image](github-content/example-2-3-output.gif/)

### Example 4

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

    <span id="drag" style="z-index:10;">Drag Me</span>

    <div id="drop">

    </div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#drop {

    width:300px;
    height:300px;
    background-color:lightgray;
    position:relative;
    left:500px;
    top:200px;
    z-index:0;
}

.border {

    border:2px solid red;

}
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#drag").draggable({

        containment: 'document',
        revert:true

    });

    $("#drop").droppable({//The droppable is the place that we want to drop.

        hoverClass: "border",
        tolerance: "pointer"//The tolerance pointer works when the mouse pointer is touch the drop box.

    });

});
```

### Output

![Banner Image](github-content/example-2-4-output.gif/)

### Example 5

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

    <span id="drag" style="z-index:10;">Drag Me</span>

    <div id="drop">

    </div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#drop {

    width:300px;
    height:300px;
    background-color:lightgray;
    position:relative;
    left:500px;
    top:200px;
    z-index:0;
}

.border {

    border:2px solid red;

}
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#drag").draggable({

        containment: 'document',
        revert:true

    });

    $("#drop").droppable({//The droppable is the place that we want to drop.

        hoverClass: "border",
        tolerance: "touch"//The tolerance touch works when it is touched the box.

    });

});
```

### Output

![Banner Image](github-content/example-2-5-output.gif/)

### Example 6

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

	</head>

<body>

    <span class="names">Joker</span><br />
    <span class="names">Hacker</span><br />

    <span class="place">US</span><br />
    <span class="place">UK</span><br />

    <div id="drop">

    </div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#drop {

    width:300px;
    height:300px;
    background-color:lightgray;
    position:relative;
    left:500px;
    top:200px;
    z-index:0;
    padding:20px;
}

.border {

    border:2px solid red;

}

.names, .place {

z-index:10;
}
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $(".names,.place").draggable({

        containment: "document",
        cursor: "pointer",
        revert:true

    });

    $("#drop").droppable({
        hoverClass: "border",
        tolerance: "pointer",//we can drop when mouse pointer hits the drop box.
        accept:".names",//This will only allow .name classes but place classes does not allow.

        over: function () {//This will works if something overs the drop box.

            $("#drop").text("Someting has over the drop box");
        },

        out: function () {//This will work something is got away form the drop box.

            $("#drop").text("Something has left form the drop box ");

        },

        drop: function () {//This will work if anyting drops in the box.

            alert("Dropped finished");

        }

    });

});
```

### Output

![Banner Image](github-content/example-2-6-output.gif/)
