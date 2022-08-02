<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/include/header.jsp"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/index/index.css">
    <script src="/assets/js/index/slick.js"></script>
    <script src="/assets/js/index/index.js"></script>
    <title>Document</title>
    
</head>
<body>
    <main>
        <section class="section_01">
            <div class="section_01_box">
                <h2>도서 검색</h2>
                    <input id="keyword">
                    <button id="search">검색</button>
            </div>
        </section>

        <section class="section_02">
            <h2>베스트 도서</h2>
            <div class="tab_menu">
                <div class="tab_menu_button">
                    <!-- <button cate-seq="">전체</button> -->
                </div>
                <div class="book_area">
                    <div class="book_info" onclick="location.href='';">
                        <div class="book_img">
                            <img src="http://via.placeholder.com/300x330" alt="">
                        </div>
                        <div class="book_name">
                            <p>책이름</p>
                            <p>줄거리</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</body>
</html>