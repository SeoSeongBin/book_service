<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/include/header.jsp"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/book/book_detail.css">
    <script>
        let user_seq = '${loginUser.ui_seq}';
    </script>
    <script src="/assets/js/book/book_detail.js"></script>
    <title>Document</title>
</head>
<body>
    <main>
        <h3 class="page_title">도서 상세정보</h3>
        <section class="book_info">
            <div class="book_info_wrap">
                <div class="book_img_area">

                </div>
                <div class="book_info_area">
                    <h3>책 제목</h3>
                    <p>저자 : </p>
                    <p>도서관 : </p>
                    <p>장르 : </p>
                    <p>줄거리</p>
                    <p>ㅁㄴㅇㅎ머ㅑㄴㅇ호ㅓㅑㅐㅈㅁ더ㅑㅐㅛㅈ대ㅑㅓㅛㅁㅂ</p>
                </div>
            </div>
            
        </section>
        <section class="comment">
            <div class="commet_best">
                <div class="commet_area_box">
                    <div class="user_id">
                        아이디
                    </div>
                    <div class="comment_text">
                        내용
                    </div>
                </div>
            </div>
            <div class="commet_area">
                <div class="commet_area_box">
                    <div class="user_id">
                        아이디
                    </div>
                    <div class="comment_text">
                        내용
                    </div>
                </div>
            </div>

            <div class="commet_write_area">
                <div class="commet_write_area_box">
                <div class="user_info">
                    ${loginUser.ui_nickname}
                </div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div class="btn_area">
                    <button class="add">등록</button>
                </div>
            </div>
        </section>

        <div class="report_popup">
            <div class="popup_box">
                <select id="reson">
                    <option value="1">비속어사용</option>
                    <option value="2">정치발언</option>
                    <option value="3">비하발언</option>
                </select>
                <button id="report">신고</button>
            </div>
        </div>
    </main>
</body>
</html>