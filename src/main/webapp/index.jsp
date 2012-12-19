<!DOCTYPE html>
<html>
<head>
	<title>Integration Testing with JQuery</title>
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
<% if ("true".equals(request.getParameter("debug"))) { %>
	<!-- Debug -->
	<script type="text/javascript" src="javascript/debug/closure-library/closure/goog/base.js"></script>
	<script type="text/javascript" src="javascript/debug/output/assert/JQueryExample-1.0-SNAPSHOT-assert.js"></script>
	<script type="text/javascript" src="javascript/debug/output/assertRequires/JQueryExample-1.0-SNAPSHOT-assert-requires.js"></script>
<% } else { %>
	<!-- Production -->
	<script type="text/javascript" src="javascript/compiled/JQueryExample-1.0-SNAPSHOT-min.js"></script>
<% } %>
	
</head>

<body>
	<script type="text/javascript">
		(function() {
			$("p").click(
				com.github.ClosureFrameworkJQueryExample.rotateColorFunction
			)
		})();
	</script>
	<p>If you click on me, I will change colors.</p>
</html>
