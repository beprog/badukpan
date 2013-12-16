<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<jsp:include page="jspf/taglib.jsp" />
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <jsp:include page="jspf/css.jsp" />
	<title>Badukpan</title>
  <jsp:include page="jspf/excanvas.jsp" />
</head>
<body id="${view}Page">
	<div id="container"> 
		<jsp:include page="jspf/menu.jsp" />
    <jsp:include page="jspf/board.jsp" />
	</div><!-- end of container -->
  <jsp:include page="jspf/test.jsp" />
	<jsp:include page="jspf/js.jsp" />
</body>
</html>