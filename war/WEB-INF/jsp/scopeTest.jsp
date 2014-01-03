<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<jsp:include page="jspf/taglib.jsp" />
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <jsp:include page="jspf/css.jsp" />
	<title>Badukpan</title>
</head>
<body id="${view}Page">
	<div id="container">
		<jsp:include page="jspf/menu.jsp" />
	</div><!-- end of container -->	
  <jsp:include page="jspf/test.jsp" />
  <jsp:include page="jspf/js.jsp" />
<script type="text/javascript" src="js/ninja/scope-test.js"></script>
</body>
</html>