<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
  <h1>Badukpan</h1>
  <ul id="menu">
    <li><a href="/index.do" <c:if test="${view == 'index'}">class="active"</c:if>>Home</a></li>
    <li><a href="/login.do" <c:if test="${view == 'login'}">class="active"</c:if>>Login</a></li>
    <li><a href="/bout.do" <c:if test="${view == 'bout'}">class="active"</c:if>>Bout</a></li>
      <!-- <ul>
        <li>vs COM</li>
        <li>vs 사람</li>
      </ul> -->
    <li><a href="/review.do" <c:if test="${view == 'review'}">class="active"</c:if>>Review</a></li>
    <li><a href="/option.do" <c:if test="${view == 'option'}">class="active"</c:if>>Option</a></li>
    <li><a href="/about.do" <c:if test="${view == 'about'}">class="active"</c:if>>About</a></li>
      <!-- <ul>
        <li>대국, 정석정보 관리</li>
        <li>접속 통계</li>
      </ul> -->
  </ul>