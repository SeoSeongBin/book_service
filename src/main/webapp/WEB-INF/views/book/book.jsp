<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/include/header.jsp"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/book/book.css">
    <script src="/assets/js/book/book.js"></script>
    <title>Document</title>
</head>

<body>
    <main>
        <section class="section_01">
            <div class="section_01_wrap">
                <div class="section_01_box">
                    <h2>도서 검색</h2>
                    <form action="/book/book" id="search_form">
                        <input type="text" id="keyword">
                        <button type="submit">검색</button>
                    </form>
                </div>
            </div>
        </section>

        <section class="section_02">
            <div class="section_02_wrap">
                <h2>도서 리스트</h2>
                <div class="section_02_content">

<a href="/book/book_detail"></a>

                </div>
                <div class="page_area">

                </div>
            </div>


        </section>
    </main>
</body>

</html>