<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/include/header.jsp"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="/assets/js/user/join.js"></script>
    <title>Document</title>
</head>
<body>
    <main>
        <h2>회원가입</h2>
        <div class="user_info_input">
            <div class="id">
                <p>아이디</p>
                <input type="text" id="ui_id" placeholder="아이디">
            </div>
            <div class="pwd">
                <p>비밀번호</p>
                <input type="password" id="ui_pwd" placeholder="비밀번호">
            </div>
            <div class="name">    
                <p>이름</p>
                <input type="text" id="ui_name" placeholder="이름">
            </div>
            <div class="nickname">
                <p>닉네임</p>
                <input type="text" id="ui_nickname" placeholder="닉네임">
            </div>
            <div class="birth">
                <p>생년월일</p>
                <input type="text" id="ui_bir_dt" placeholder="생년월일" autocomplete='off'>
            </div>
            <div class="gen">
                <p>성별</p>
                <input type="radio" name="gen" value="1">남자
                <input type="radio" name="gen" value="2">여자
                <input type="radio" name="gen" value="3">선택안함
            </div>
            <div class="btn_area">
                <button id="join">회원가입</button>
                <button id="cancel">취소</button>
            </div>
        </div>
    </main>
</body>
</html>