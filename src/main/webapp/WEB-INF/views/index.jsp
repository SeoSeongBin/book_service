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
    <title>Document</title>
    
</head>
<body>
    <main>
        <section class="section_01">
            <div class="section_01_box">
                <h2>도서 검색</h2>
                <form action="/book/book">
                    <input type="text">
                </form>
            </div>
        </section>

        <section class="section_02">
            <h2>베스트 도서</h2>
            <div class="slider_box">
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="http://via.placeholder.com/200x200" alt="banner">
                        <h3>도서명</h3>
                        <p>줄거리</p>
                    </div>
                    <div class="swiper-slide">
                        <img src="http://via.placeholder.com/200x200" alt="banner">
                        <h3>도서명</h3>
                        <p>줄거리</p>
                    </div>
                    <div class="swiper-slide">
                        <img src="http://via.placeholder.com/200x200" alt="banner">
                        <h3>도서명</h3>
                        <p>줄거리</p>
                    </div>
                    <div class="swiper-slide">
                        <img src="http://via.placeholder.com/200x200" alt="banner">
                        <h3>도서명</h3>
                        <p>줄거리</p>
                    </div>
                    <div class="btn_area">
                        <div class="left_btn"></div>
                        <div class="right_btn"></div>
                    </div>

                </div>
            </div>
        </div>
        </section>
    </main>
</body>
</html>