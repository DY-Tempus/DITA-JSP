<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>SignIn</title>
  <link href="${pageContext.request.contextPath}/css/SignInPage.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <h2 class="TitleLabel">MU:SE</h2>
  <div class="IDPWContainer">
    <div class="ContentContainer">
      <label class="FontSetting">ID</label>
      <input type="text" class="InputSetting" name="username">
    </div>
    <div class="ContentContainer">
      <label class="FontSetting">PW</label>
      <input type="password" class="InputSetting" name="password">
    </div>
  </div>
  <button class="SignInButton" onclick="submitLogin()">Sign In</button>
  <script>
    function submitLogin() {
      document.location.href = "Home.jsp";
    }
  </script>
  <script src="${pageContext.request.contextPath}/javascript/SignInPage.js"></script>
</body>

<footer>
  <label class="ForgotPass">Forgot Password?</label>
</footer>

</html>
