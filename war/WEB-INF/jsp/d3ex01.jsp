<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<jsp:include page="jspf/taglib.jsp" />
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <jsp:include page="jspf/css.jsp" />
  
  
  <style type="text/css">
  <!--
  	div.bar {
  		display: inline-block;
  		width: 16px;
  		height: 75px;
  		background-color: teal;
  		margin-right: 2px;
  	}
  //-->
  </style>
  
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
  	//bar chart
  	var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 
  	                  11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
  	var w = 500,
	    h = 100
	    barPadding = 1,
	    scale = 4,
	    textOffsetY = 12,
	    textOffsetX = 5;  	
	
  	var svg = d3.select("body")
  					.append("svg")
  					.attr("width", w)
  					.attr("height", h);
  	svg.selectAll("rect")
  		.data(dataset)
  		.enter()
  		.append("rect")
  		.attr({
  			x: function(d, i) { return i * (w / dataset.length); },
  			y: function(d) { return h - d * scale; },
  			width: w / dataset.length - barPadding,
  			height: function(d) { return d * scale; },
  			fill: function(d) { return "rgb(0, 0, " + (d * 10) + ")"; }
  		});
  	
  	svg.selectAll("text")
  		.data(dataset)
  		.enter()
  		.append("text")
  		.text(function(d) {
  			return d;
  		})
  		.attr({
  			x: function(d, i) { return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2; },
  			y: function(d) { return h - d * scale + textOffsetY; },
  			fill: "white"
  		})
  		.attr("font-family", "san-serif")
  		.attr("font-size", "11px")
  		.attr("text-anchor", "middle");

  </script>
</body>
</html>