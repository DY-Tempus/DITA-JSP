<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>FirstPage</title>
  <link href="${pageContext.request.contextPath}/css/FirstPage.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <div class="MainLogo">
    <img src="${pageContext.request.contextPath}/images/logo.png" alt="Main Logo">
  </div>
  <div class="SideWideAlign">
    <h3 class="SignInUp" onclick="location.href='SignIn.jsp'">Sign In</h3>
    <h3 class="SignInUp" onclick="location.href='SignUp.jsp'">Sign Up</h3>
  </div>
  <script src="${pageContext.request.contextPath}/javascript/FirstPage.js"></script>
</body>

</html>
