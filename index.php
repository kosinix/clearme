<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>jQuery Clearme Plugin</title>
	<meta name="description" content="jQuery Clearme Plugin" />
	<meta name="keywords" content="jQuery Clearme Plugin" />
	<link rel="stylesheet" type="text/css" media="all" href="css/style.css" />
	
	<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="js/clearme.js"></script>
	<script type="text/javascript">
	$(document).ready(function(){
		//example 1
		$('#example-1').clearme();
		
		//example 2
		$('#example-2').clearme({
			restoreValue:false//clears field on first click
		});
		
		//example 3
		$('#example-3').clearme({
			autocomplete:true//leave firefox default behavior
		});
		
		$('textarea').clearme();
	});
	</script>
</head>
<body>
	<div id="wrapper">
		<h1>jQuery Clearme Plugin</h1>
		<h2>PHP version to demonstrate fields on form submission</h2>
		<h3>Markup requirements</h3>
		<ul>
			<li>Field should be of type text or email or a textarea</li>
			<li>Field should have a title attribute for the watermark text.</li>
		</ul>
		<p>Example:</p>
		<pre>&lt;input <strong>type</strong>="text" <strong>title</strong>="Watermark text to show when field is empty" /&gt;</pre>
		<form id="form1" method="post" action="">
			<div class="entry-example">
				<h2>Example 1 - Default</h2>
				<pre>$('#example-1').clearme();</pre>
				<label for="example-1">First Name:</label>
				<input type="text" name="name" id="example-1" value="<?php echo $_POST['name']; ?>" title="Your name please..." />
			</div>
			
			<div class="entry-example">
				<h2>Example 2 - One time clear</h2>
				<p>Clears field on first click.</p>
				<pre>$('#example-2').clearme({
	restoreValue:false
});</pre>
				<label for="example-2">Email:</label>
				<input type="text" name="email" id="example-2" title="johndoe@email.com" value="<?php echo $_POST['email']; ?>" title="Your email please..." />
			</div>
			
			<div class="entry-example">
				<h2>Example 3 - Leave firefox behavior alone</h2>
				<p>Leave firefox default behavior, that is, the current value of fields are restored on page refresh and not the initial value. Try changing the value and hit refresh (F5). Notice the value typed will remain in firefox.</p>
				<pre>$('#example-3').clearme({
	autocomplete:true
});</pre>
				<label for="example-3">Last Name:</label>
				<input type="text" name="last_name" id="example-3" title="John Doe" value="<?php echo $_POST['last_name']; ?>" title="Your last name please..." />
			</div>
			
			<div class="entry-example">
				<h2>Example 4 - Textarea</h2>
				<p>Also applies to textareas</p>
				<pre>$('textarea').clearme();</pre>
				<label for="example-4">Message:</label><br />
				<textarea name="message" id="message" title="Your message here..." cols="30" rows="10"><?php echo $_POST['message'];?></textarea>
			</div>
			<input type="submit" />
		</form>
		
	</div>
	<!-- /wrapper -->
</body>
</html>
