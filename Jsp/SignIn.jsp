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
  <form action="SignInServlet" method="post"> <!-- SignInServlet으로 데이터 전송 -->
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
    <button type="submit" class="SignInButton">Sign In</button> <!-- 서버로 POST 전송 -->
  </form>
  <footer>
    <label class="ForgotPass">Forgot Password?</label>
  </footer>
</body>

</html>
