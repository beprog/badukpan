<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<jsp:include page="../jspf/taglib.jsp" />
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <jsp:include page="../jspf/css.jsp" />
  
  
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
  <jsp:include page="../jspf/excanvas.jsp" />
</head>
<body id="${view}Page"> 
  <div id="container"> 
    <jsp:include page="../jspf/menu.jsp" />
  </div><!-- end of container -->
  <jsp:include page="../jspf/test.jsp" />
  <jsp:include page="../jspf/js.jsp" />

  <script type="text/javascript">
  	//bar chart
  	var dataset = [ [ 5, 20 ],
  	                  [ 480, 90 ],
  	                  [ 250, 50 ],
  	                  [ 100, 33 ],
  	                  [ 330, 95 ],
  	                  [ 410, 12 ],
  	                  [ 475, 44 ],
  	                  [ 25,  67 ],
  	                  [ 85,  21 ],
  	                  [ 220, 88 ]
  					];
  	var w = 500,
	    h = 100,
	    padding = 20;
  	var xScale = d3.scale.linear()
  							.domain([0, d3.max(dataset, function(d) { return d[0]; })])
  							.range([padding, w - padding * 2]),
  		yScale = d3.scale.linear()
  							.domain([0, d3.max(dataset, function(d) { return d[1]; })])
  							.range([padding, h - padding])
	
  	var svg = d3.select("body")
  					.append("svg")
  					.attr("width", w)
  					.attr("height", h);
  	svg.selectAll("circle")
  		.data(dataset)
  		.enter()
  		.append("circle")
  		.attr({
  			cx: function(d) { return xScale(d[0]); },
  			cy: function(d) { return yScale(d[1]); },
  			r: function(d) { return Math.sqrt(d[0] / 5)}
  		});
  	svg.selectAll("text")
  		.data(dataset)
  		.enter()
  		.append("text")
  		.text(function(d) {
  			return d[0] + "," + d[1];
  		})
  		.attr({
  			x: function(d) { return xScale(d[0]); },
  			y: function(d) { return yScale(d[1]); }
  		})
  		.attr("font-family", "sans-serif")
  		.attr("font-size", "11px")
  		.attr("fill", "red");
  	
  	svg.append("g")
  		.call(d3.svg.axis()
  				.scale(xScale)
  				.orient("bottom"));
  </script>
</body>
</html>