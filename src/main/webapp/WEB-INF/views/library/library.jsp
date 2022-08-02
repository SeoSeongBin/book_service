<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/include/header.jsp"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/library/library.css">
    <script src="/assets/js/library/library.js"></script>
    <title>Document</title>
</head>
<body>
    <main>
        <section>
            <h2>도서관</h2>
            <div class="section_wrap">

                <div class="library_box">
                    <img src="http://via.placeholder.com/300x300" alt="">
                    <p>도서관이름</p>
                </div>

            </div>
            <div class="page_area">

            </div>
            
            <form action="/book/book" id="search_form">
                <input type="text" id="keyword">
                <button type="submit">검색</button>
            </form>
        </section>
    </main>
</body>
</html>