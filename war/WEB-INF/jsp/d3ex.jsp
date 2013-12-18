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
  </div><!-- end of container -->
  <jsp:include page="jspf/test.jsp" />
  <jsp:include page="jspf/js.jsp" />

  <script type="text/javascript">
 	var dataset = [ 5, 10, 15, 20, 25 ];
 	
 	d3.select("body").selectAll("div")
 		.data(dataset)
 		.enter()
 		.append("div")
 		.attr("class", "bar");
 	/*
 	d3.select("body").selectAll("p")
 		.data(dataset)
 		.enter()
 		.append("p")
 		.text(function(d) {return "I can count up to " + d; })
 		.style("color", function(d){
 			if (d > 15) {
 				return "red";
 			} else {
 				return "black";q
 			}
 		});
 	*/
  </script>
</body>
</html>