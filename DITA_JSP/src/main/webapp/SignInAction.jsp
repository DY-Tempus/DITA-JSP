<%@ page contentType="text/html; charset=UTF-8" %>
<jsp:useBean id="mgr" class="db.UserMgr"/>
<%
    String id = request.getParameter("username");
    String pw = request.getParameter("password");
    String msg = "로그인에 실패 하였습니다.";
    boolean result = mgr.signIn(id, pw);
    
    if(result){
        session.setAttribute("idKey", id);
        msg = "로그인에 성공 하였습니다.";
%>
        <script>
            alert("<%=msg%>");
            location.href = "http://localhost:3000/";
        </script>
<%
    } else {
%>
        <script>
            alert("<%=msg%>");
            location.href = "SignIn.jsp";
        </script>
<%
    }
%>
