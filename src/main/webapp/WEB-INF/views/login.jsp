<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/include/header.jsp"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/user/login.css">
    <script src="/assets/js/user/login.js"></script>
    <title>Document</title>
</head>
<body>
    <main>
        <section>
            <h2>로그인</h2>
            <div class="id">
                <input type="text" id="ui_id" placeholder="아이디">
            </div>
            <div class="pwd">
                <input type="password" id="ui_pwd" placeholder="비밀번호">
            </div>
            <button id="login_btn">로그인</button>
        </section>
    </main>
</body>
</html>