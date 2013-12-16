<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
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
    <div id="controller">
      <img id="goFirst" title="Go to beginning of game" src="img/goFirst.png" />
      <img id="goPrev10" title="Go ten moves backward" src="img/goPrev10.png" />
      <img id="goPrev" title="Go one move backward" src="img/goPrev.png" />
      <img id="goNext" title="Go one move forward" src="img/goNext.png" />
      <img id="goNext10" title="Go ten moves forward" src="img/goNext10.png" />
      <img id="goLast" title="Go to end of game" src="img/goLast.png" />
    </div><!-- end of controller -->         
  </div><!-- end of container -->
  <jsp:include page="jspf/test.jsp" />
	<jsp:include page="jspf/js.jsp" />
</body>
</html>