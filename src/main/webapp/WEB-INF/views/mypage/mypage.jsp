<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/include/header.jsp"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/book/book.css">
    <script>
        let user_seq = '${loginUser.ui_seq}';
    </script>
    <script src="/assets/js/user/mypage.js"></script>
    <title>Document</title>
</head>

<body>
    <main>
        <h2>My Page</h2>
        <div class="myinfo">
            <div class="myinfowrap">
                <div class="id_area">
                    <p>ID</p>
                    <input type="text" value="아이디">
                </div>
                <div class="pwd_area">
                    <p>비밀번호</p>
                    <input type="password">
                </div>
                <div class="name_area">
                    <p>이름</p>
                    <input type="text">
                </div>
                <div class="nickname_area">
                    <p>닉네임</p>
                    <input type="text">
                </div>
                <div class="birthday_area">
                    <p>생년월일</p>
                    <input type="text">
                </div>
                <div class="gen_area">
                    <p>성별</p>
                    <input type="radio" name="gen" value="1">남자
                    <input type="radio" name="gen" value="2">여자
                    <input type="radio" name="gen" value="3">선택안함
                </div>
                <div class="btn_area">
                    
                </div>
            </div>
        </div>
    </main>
</body>

</html>