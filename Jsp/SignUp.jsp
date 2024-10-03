<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>SignUp</title>
  <link href="${pageContext.request.contextPath}/css/SignUpPage.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <h1 class="TitleLabel">MU:SE</h1>
  <form action="SignUpServlet" method="post"> <!-- SignUpServlet으로 폼 전송 -->
    <div class="ContentContainer">
      <div class="Spread">
        <label>ID</label>
        <input type="text" class="InputSetting" name="username">
      </div>
      <div class="Spread">
        <label>PW</label>
        <input type="password" class="InputSetting" name="password">
      </div>
      <div class="Spread">
        <label>PW Confirm</label>
        <input type="password" class="InputSetting" name="passwordConfirm">
      </div>
      <div class="Spread">
        <label>Email</label>
        <input type="email" class="InputSetting" name="email">
      </div>
      <div class="Spread">
        <label>Name</label>
        <input type="text" class="InputSetting" name="name">
      </div>
      <div class="Spread">
        <label>Favorite Genre 1</label>
        <select name="favoriteGenre1" class="InputSetting">
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="hiphop">Hip-hop</option>
          <option value="jazz">Jazz</option>
        </select>
      </div>
      <div class="Spread">
        <label>Favorite Genre 2</label>
        <select name="favoriteGenre2" class="InputSetting">
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="hiphop">Hip-hop</option>
          <option value="jazz">Jazz</option>
        </select>
      </div>
    </div>
    <button type="submit" class="ConfirmButton">Sign Up</button>
  </form>
</body>

</html>
