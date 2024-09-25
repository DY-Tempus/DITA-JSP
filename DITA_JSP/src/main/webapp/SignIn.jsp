<%@page import="entity.UserBean"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>SignIn</title>
  <link href="${pageContext.request.contextPath}/css/SignInPage.css" rel="stylesheet" type="text/css" />
</head>
  <script>
    function submitLogin() {
    	if (document.frm.username.value == "") {
			alert("아이디를 입력해 주세요.");
			document.frm.username.focus();
			return;
		}
		if (document.frm.password.value == "") {
			alert("비밀번호를 입력해 주세요.");
			document.frm.password.focus();
			return;
		}
		document.frm.submit();
    }
  </script>
<body>
  <h2 class="TitleLabel">MU:SE</h2>
  <form name="frm" method="post" action="SignInAction.jsp">
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
  <input class="SignInButton" type="button" value="Sign In" onclick="submitLogin()">

  <script src="${pageContext.request.contextPath}/javascript/SignInPage.js"></script>
</form>
</body>

<footer>
  <label class="ForgotPass">Forgot Password?</label>
</footer>
<form name="hfrm" method="post" action="SignInAction.jsp">
</form>
</html>
