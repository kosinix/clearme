jQuery Clearme Plugin
===================

Clears textbox and textarea fields on click

### Features

* Clears field on focus and returns the initial value if it loses focus and if field is empty. 
* Can be set to clear the field once on first click and remain blank after losing focus. 
* Automatically add css class uncleared and cleared to field so you can give different styles depending on field status. Class names changeable via plugin options.
* Turns off firefox autocomplete by default. This prevents problem with initial values on page refresh. Can be set to false.

### Tested

* IE7, IE8, Chrome 19, FF12, Safari 5.1.2 Windows, Opera 11.64


### How to Use

On your head add path to jquery and clearme. You may need to change the paths depending on your folder structure.
```
<html>
<head>
	<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="js/clearme.min.js"></script>
</head>
<body>
...
</body>
</html>
```

HTML markup requirements should be an input or a textarea element with a title attribute containing the watermark text. Input can be of type text, email, tel, url, search or number.
```
<html>
<body>
	<input class="clearme" type="text" title="Watermark text to display when field is empty" />
</body>
</html>
```

And clearme is now ready for use inside jquery document ready.
```
<html>
<head>
	...
	<script type="text/javascript">
		jQuery.ready(function($){
			$('.clearme').clearme();
		});
	</script>
</head>
<body>
...
</body>
</html>
```

### Links

* [Download Source Files with Examples](https://github.com/kosinix/clearme/zipball/master)
* [Plugin Site](http://kosinix.github.com/clearme)