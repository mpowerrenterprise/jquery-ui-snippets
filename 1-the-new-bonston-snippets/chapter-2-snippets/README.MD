## 5. Accordion () Snippets

### Example 0

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

        <link href="jquery-ui.min.css" type="text/css" rel="stylesheet">

	</head>

<body>

<div id="a1">

    <h4><a href="#">Java</a></h4>

    <div>

        <h1>Java Programming</h1>
        <h4>Java is the best programming language It is vert easy to master</h4>
    </div>

    <h4><a href="#">C++</a></h4>

    <div>

        <h1>C++ Programming</h1>
        <h4>
            C++ is the traditional programming language.It is mainly used to develop not only website application even we can create opreating system in c++
        </h4>

    </div>

    <h4><a href="#">Python</a></h4>
    <div>

        <h1>Python is a simple programming language</h1>
        <h4>We can make many applications in python</h4>

    </div>
</div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#a1").accordion();

});

//The accordion() will pick up all elements form the html and make them as accordion.
//a1 is the id of a div element.
//in that div element i have some a tags and some other divs elements.
//jquery ui automatically make as an accordion if you applied the accordion() to the element.
```

### Output

![Banner Image](github-content/example-5-0-output.gif/)

### Example 1

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

        <link href="jquery-ui.min.css" type="text/css" rel="stylesheet">

	</head>

<body>

<div id="a1">

    <h4 id="j"><a href="#">Java</a></h4>

    <div>

        <h1>Java Programming</h1>
        <h4>Java is the best programming language It is vert easy to master</h4>
    </div>

    <h4><a href="#">C++</a></h4>

    <div>

        <h1>C++ Programming</h1>
        <h4>
            C++ is the traditional programming language.It is mainly used to develop not only website application even we can create opreating system in c++
        </h4>

    </div>

    <h4><a href="#">Python</a></h4>
    <div>

        <h1>Python is a simple programming language</h1>
        <h4>We can make many applications in python</h4>

    </div>
</div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### CSS

```CSS
#j {

    background-color:red;

}
    #j:active {

        background-color:palegreen;
    }
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#a1").accordion({

        icons: { "header": 'ui-icon-plus' }//This the way to add icons.

    });

});

//The accordion() will pick up all elements form the html and make them as accordion.

//We change or modify the default styles in css.
//I have changed the color of the the java heading in the css to red.
//I've added some css styles in the css go hat and see that.
```

### Output

![Banner Image](github-content/example-5-1-output.gif/)

### Example 2

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

        <link href="jquery-ui.min.css" type="text/css" rel="stylesheet">

	</head>

<body>

<div id="a1">

    <h4 id="j"><a href="#">Java</a></h4>

    <div>

        <h1>Java Programming</h1>
        <h4>Java is the best programming language It is vert easy to master</h4>
    </div>

    <h4><a href="#">C++</a></h4>

    <div>

        <h1>C++ Programming</h1>
        <h4>
            C++ is the traditional programming language.It is mainly used to develop not only website application even we can create opreating system in c++
        </h4>

    </div>

    <h4><a href="#">Python</a></h4>
    <div>

        <h1>Python is a simple programming language</h1>
        <h4>We can make many applications in python</h4>

    </div>
</div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#a1").accordion({

      event:"mouseover"//By using event we can change the user events.We can assign any events that we want.

    });

});

//The accordion() will pick up all elements form the html and make them as accordion.
```

### Output

![Banner Image](github-content/example-5-2-output.gif/)

### Example 3

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

        <link href="jquery-ui.min.css" type="text/css" rel="stylesheet">

	</head>

<body>

<div id="a1">

    <h4 id="j"><a href="#">Java</a></h4>

    <div>

        <h1>Java Programming</h1>
        <h4>Java is the best programming language It is vert easy to master</h4>
    </div>

    <h4><a href="#">C++</a></h4>

    <div>

        <h1>C++ Programming</h1>
        <h4>
            C++ is the traditional programming language.It is mainly used to develop not only website application even we can create opreating system in c++
        </h4>

    </div>

    <h4><a href="#">Python</a></h4>
    <div>

        <h1>Python is a simple programming language</h1>
        <h4>We can make many applications in python</h4>

    </div>
</div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#a1").accordion({

        collapsible: true,//by default one pane will be open to prevent that you can this collapsible:true So now you can close all panes.even one pane will be open it can be closed

    });

});

//The accordion() will pick up all elements form the html and make them as accordion.
```

### Output

![Banner Image](github-content/example-5-3-output.gif/)

### Example 4

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

        <link href="jquery-ui.min.css" type="text/css" rel="stylesheet">

	</head>

<body>

<div id="a1">

    <h4 id="j"><a href="#">Java</a></h4>

    <div>

        <h1>Java Programming</h1>
        <h4>Java is the best programming language It is vert easy to master</h4>
    </div>

    <h4><a href="#">C++</a></h4>

    <div>

        <h1>C++ Programming</h1>
        <h4>
            C++ is the traditional programming language.It is mainly used to develop not only website application even we can create opreating system in c++
        </h4>

    </div>

    <h4><a href="#">Python</a></h4>
    <div>

        <h1>Python is a simple programming language</h1>
        <h4>We can make many applications in python</h4>

    </div>
</div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#a1").accordion({

        collapsible:true,
        active:2//This will open the third pane. 0 is first.

    });

});

//The accordion() will pick up all elements form the html and make them as accordion.
```

### Output

![Banner Image](github-content/example-5-4-output.gif/)

### Example 5

#### HTML

```HTML
<!DOCTYPE html>

<html>

	<head>

		<title>This is the title</title>

        <link href="style.css" rel="stylesheet" type="text/css" />

        <link href="jquery-ui.min.css" type="text/css" rel="stylesheet">

	</head>

<body>

<div id="a1">

    <h4 id="j"><a href="#">Java</a></h4>

    <div>

        <h1>Java Programming</h1>
        <h4>Java is the best programming language It is vert easy to master</h4>
    </div>

    <h4><a href="#">C++</a></h4>

    <div>

        <h1>C++ Programming</h1>
        <h4>
            C++ is the traditional programming language.It is mainly used to develop not only website application even we can create opreating system in c++
        </h4>

    </div>

    <h4><a href="#">Python</a></h4>
    <div>

        <h1>Python is a simple programming language</h1>
        <h4>We can make many applications in python</h4>

    </div>
</div>

    <script src="jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="jquery-ui.min.js" type="text/javascript"></script>
    <script src="js.js" type="text/javascript"></script>

</body>

</html>
```

#### JavaScript

```JavaScript
$(document).ready(function () {

    $("#a1").accordion({

        collapsible:true,
        active:false//This will closed all of them.

    });

});

//The accordion() will pick up all elements form the html and make them as accordion.
```

### Output

![Banner Image](github-content/example-5-5-output.gif/)
