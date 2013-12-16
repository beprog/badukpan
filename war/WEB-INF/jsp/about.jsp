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
    <h2>12/13/2013 Updated</h2>
    <h2>Technical Paper</h2>
      <h3>Browser Compatibility</h3>
      <table>
        <caption>PC and Mobile Browser Test <span id="testDate">07/30/2013 updated</span>
        </caption>
        <thead>
          <tr>
            <th scope="col" rowspan="2">Func.</th>
            <th colspan="5">PC</th><th colspan="6" title="LG Optimus">Mobile</th>
          </tr>
          <tr>  
            <th scope="col" class="PC" title="Chrome 28.0.1500.72 m">Chrome</th>
            <th scope="col" class="PC" title="Safari 5.1.7">Safari</th>
            <th scope="col" class="PC" title="Firefox 22.0">FF</th>
            <th scope="col" class="PC" title="Opera 12.16">Opera</th>
            <th scope="col" class="PC" title="IE 8.0">IE</th>
            <th scope="col" class="Mobile" title="Chrome 8.0">Chrome</th>
            <th scope="col" class="Mobile" title="Safari 8.0">Safari</th>
            <th scope="col" class="Mobile" title="Firefox 22.0">FF</th>
            <th scope="col" class="Mobile" title="Opera 14.0.1074.58201">Opera</th>
            <th scope="col" class="Mobile" title="Swing 1.4">Swing</th>
            <th scope="col" class="Mobile" title="Baidu 2.2">Baidu</th>
          </tr>
        </thead>
        <tbody>  
          <tr class="critical">
            <td class="function">board</td>
            <td>O</td><td>O</td><td>O</td><td>O</td><td>O</td>
            <td>O</td><td>O</td><td>O</td><td>O</td><td>O</td><td>O</td>
          </tr>
          <tr class="critical">
            <td class="function">stone</td>
            <td>O</td><td>O</td><td>O</td><td>O</td><td>O</td>
            <td>O</td><td>O</td><td>X</td><td>O</td><td>O</td><td>O</td>
          </tr>
          <tr class="optional">
            <td class="function">guide</td>
            <td>O</td><td>O</td><td>X</td><td>O</td><td>O</td>
            <td>X</td><td>O</td><td>X</td><td>X</td><td>O</td><td>O</td>
          </tr>
        </tbody>
      </table>
    
      <table>
        <caption>Tablet</caption>
        <thead>
          <tr>
            <th scope="col" rowspan="2">Func.</th>
            <th colspan="2">Tablet</th>
          </tr>
          <tr>  
            <th scope="col" class="Tablet" title="unknown">Chrome</th>
            <th scope="col" class="Tablet" title="unknown">Safari</th>
          </tr>
        </thead>
        <tbody>  
          <tr class="critical">
            <td class="function">board</td>
            <td>O</td><td>O</td>
          </tr>
          <tr class="critical">
            <td class="function">stone</td>
            <td>X</td><td>X</td>
          </tr>
          <tr class="optional">
            <td class="function">guide</td>
            <td>O</td><td>O</td>
          </tr>
        </tbody>
      </table>

		<h2>Reference</h2>
		<ul>
		  <li>GoGui</li>
	    <ul>
	      <li>favicon.ico</li>
	      <li>wood.png</li>
	      <li>board variables</li>
	    </ul>
		</ul>
	</div><!-- end of container -->
  <jsp:include page="jspf/test.jsp" />
  <jsp:include page="jspf/js.jsp" />
</body>
</html>