$("document").ready(function(){
    let query = window.location.search;
    let param = new URLSearchParams(query);
    let seq = param.get('seq');
    getBookDetail(seq);
    getCommentList(seq, null, user_seq);
    getCommentBest(seq);
    
    
    $(".add").click(function(){
        if(user_seq == null || user_seq == '') {
            alert("로그인후 사용가능")
            return;
        }

        if(!confirm("등록하시겠습니까?")) return;

        let data = {
            cmi_ui_seq:user_seq,
            cmi_bi_seq:seq,
            cmi_summary:$(".commet_write_area_box textarea").val()
        }

        $.ajax({
            url:"/api/comment/comment_add",
            type:"put",
            contentType:"application/json",
            data:JSON.stringify(data),
            success:function(r) {
                alert(r.message);
                location.reload();
            }
        })
    });

        if(user_seq == null || user_seq == '') {
            $(".commet_write_area_box textarea").attr("disabled", true);
            return;
        }

    $("#report").click(function(){
        if(!confirm("신고하시겠습니까?")) return;
        let data = {
            cr_ui_seq:$(this).attr("ui-seq"),
            cr_cmi_seq:$(this).attr("cmi-seq"),
            cr_reason:$("#reson option:selected").val()
        }
        putInsertReport(data);
    })

})

function getBookDetail(seq) {
    $.ajax({
        url:"/api/book/book_detail?seq="+seq,
        type:"get",
        success:function(r) {
            console.log(r.pageInfo);
            $(".book_info").html("");
            let tag = ""
                tag =
                '<div class="book_info_wrap">'+
                    '<div class="book_img_area">'+
                        '<img src="/img/book/'+r.pageInfo.bimg_file_name+'" alt="">'+
                    '</div>'+
                    '<div class="book_info_area">'+
                        '<h3>'+r.pageInfo.bi_name+'</h3>'+
                        '<p>출간일 : '+r.pageInfo.bi_publication_dt+'</p>'+
                        '<p>저자 : '+r.pageInfo.bi_publisher+'</p>'+
                        '<p>도서관 : '+r.pageInfo.li_name+'</p>'+
                        '<p>장르 : '+r.pageInfo.ci_name+'</p>'+
                        '<p class="book_status">'+r.pageInfo.bi_status+'</p>'+
                    '</div>'+
                    '<div class="book_btn_area">'+
                        
                        '<button>목록으로</button>'+
                        '<button class="book_like">관심도서</button>'+
                    '</div>'+
                '</div>'+
                '<p>줄거리</p>'+
                '<p>'+r.pageInfo.si_summary+'</p>'
            $(".book_info").append(tag)

            $(".book_like").click(function(){
                if(user_seq == null || user_seq == ""){
                    alert("로그인후 사용가능합니다.");
                    return;
                }
                let data6 = {
                    blk_ui_seq:user_seq,
                    blk_bi_seq:seq
                }
                insertBookLike(data6)
            })

            if (r.pageInfo.bi_status == 1){
                $(".book_status").html("보유중")
            }else if (r.pageInfo.bi_status == 2) {
                $(".book_status").html("입고예정")
            }else {
                $(".book_status").html("분실")
            }

            selectBookLikeInfo(r.pageInfo.bi_seq)
            
        }
    })
}

function selectBookLikeInfo(seq) {
    $.ajax({
        url:"/api/book/book_detail/like_info?seq="+seq,
        type:"get",
        success:function(r) {

            console.log(r.likeList)
            for(let i=0; i < r.likeList.length; i++){

                let tag = ""
                if(user_seq != r.likeList[i].blk_ui_seq){
                    tag =
                    '<button>목록으로</button>'+
                    '<button class="book_like">관심도서</button>'
                    $(".book_btn_area").html("");
                }
                else {
                    tag =
                    '<button>목록으로</button>'+
                    '<button class="book_like_mod" blk-status="'+r.likeList[i].blk_status+'">관심도서</button>'
                    $(".book_btn_area").html("");
                }
                $(".book_btn_area").append(tag)
                if(r.likeList[i].blk_status == 0) {
                    $(".book_like_mod").attr("blk-status", 1);
                    $(".book_like_mod").html("관심도서")
                } else {
                    $(".book_like_mod").attr("blk-status", 0);
                    $(".book_like_mod").html("등록된 도서")
                }
            }
            $(".book_like").click(function(){
                if(user_seq == null || user_seq == ""){
                    alert("로그인후 사용가능합니다.");
                    return;
                }
                let data6 = {
                    blk_ui_seq:user_seq,
                    blk_bi_seq:seq
                }
                insertBookLike(data6)
            })

            $(".book_like_mod").click(function(){
                if($(".book_like_mod").attr("blk-status") == 1) {
                    $(".book_like_mod").attr("blk-status", 0)
                    $(".book_like_mod").html("등록된 도서")
                }else {
                    $(".book_like_mod").attr("blk-status", 1)
                    $(".book_like_mod").html("관심도서")
                }
                let data5 = {
                    blk_ui_seq:user_seq,
                    blk_status:$(this).attr("blk-status")
                }
                updateBookLike(data5)
            })
        }
    })
}

function insertBookLike(data6) {
    $.ajax({
        url:"/api/book/book_like",
        type:"put",
        contentType:"application/json",
        data:JSON.stringify(data6),
        success:function(r) {
            location.reload();
        }
    })
}

function updateBookLike(data5) {
    $.ajax({
        url:"/api/book/book_like/update",
        type:"patch",
        contentType:"application/json",
        data:JSON.stringify(data5),
        success:function(r) {

        }
    })
}

function getCommentList(seq, page, ui_seq) {
    if(page == null || page == undefined) page = 1;
    $.ajax({
        url:"/api/comment/comment_list?seq="+seq+"&page="+page+"&ui_seq="+ui_seq,
        type:"get",
        success:function(r) {
            console.log(r.list)
            $(".commet_area").html("");

            for(let i = 0; i < r.list.length; i++){
                let tag = ""
                console.log(r.list[i].like_cnt)
                if(r.list[i].like_cnt == null) {
                    r.list[i].like_cnt = 0
                }

                
                if(r.list[i].cmi_ui_seq == user_seq){
                    if(r.list[i].cl_seq == null){
                        tag = 
                        '<div class="commet_area_box">'+
                            '<div class="user_id">'+r.list[i].ui_nickname+'</div>'+
                            '<div class="comment_text">'+r.list[i].cmi_summary+'</div>'+
                            '<input class="mod_comment_text" value="'+r.list[i].cmi_summary+'"></input>'+
                            '<button class="modify" mod="0" cmi-seq="'+r.list[i].cmi_seq+'">수정</button>'+
                            '<button class="mod_cancel">취소</button>'+
                            '<button class="delete" cmi-seq="'+r.list[i].cmi_seq+'">삭제</button>'+
                            '<a onclick="return:false" class="like" ui-seq="'+r.list[i].cmi_ui_seq+'" cmi-seq="'+r.list[i].cmi_seq+'">♡</a> '+'<span class="like_cnt">'+r.list[i].like_cnt+'</span>'+
                        '</div>'
                    }
                    else {
                        tag = 
                        '<div class="commet_area_box">'+
                            '<div class="user_id">'+r.list[i].ui_nickname+'</div>'+
                            '<div class="comment_text">'+r.list[i].cmi_summary+'</div>'+
                            '<input class="mod_comment_text" value="'+r.list[i].cmi_summary+'"></input>'+
                            '<button class="modify" mod="0" cmi-seq="'+r.list[i].cmi_seq+'">수정</button>'+
                            '<button class="mod_cancel">취소</button>'+
                            '<button class="delete" cmi-seq="'+r.list[i].cmi_seq+'">삭제</button>'+
                            '<a onclick="return:false" like-data="0" cl-seq="'+r.list[i].cl_seq+'" class="like_mod" ui-seq="'+r.list[i].cmi_ui_seq+'" cmi-seq="'+r.list[i].cmi_seq+'">'+r.list[i].cl_status+'</a> '+'<span class="like_cnt">'+r.list[i].like_cnt+'</span>'+
                        '</div>'
                    }
                }
                else {
                    if(r.list[i].cl_status != null && r.list[i].cl_ui_seq == user_seq && r.list[i].cl_cmi_seq == r.list[i].cmi_seq){
                    tag = 
                    '<div class="commet_area_box">'+
                        '<div class="user_id">'+r.list[i].ui_nickname+'</div>'+
                        '<div class="comment_text mod_num'+r.list[i].cmi_seq+'">'+r.list[i].cmi_summary+'</div>'+
                        '<button class="report" ui-seq="'+r.list[i].cmi_ui_seq+'" cmi-seq="'+r.list[i].cmi_seq+'">신고</button>'+
                        '<a onclick="return:false" like-data="0" class="like_mod" cl-seq="'+r.list[i].cl_seq+'" ui-seq="'+r.list[i].cmi_ui_seq+'" cmi-seq="'+r.list[i].cmi_seq+'">'+r.list[i].cl_status+'</a> '+'<span class="like_cnt">'+r.list[i].like_cnt+'</span>'+
                    '</div>'
                }else {
                    tag = 
                    '<div class="commet_area_box">'+
                        '<div class="user_id">'+r.list[i].ui_nickname+'</div>'+
                        '<div class="comment_text mod_num'+r.list[i].cmi_seq+'">'+r.list[i].cmi_summary+'</div>'+
                        '<button class="report" ui-seq="'+r.list[i].cmi_ui_seq+'" cmi-seq="'+r.list[i].cmi_seq+'">신고</button>'+
                        '<a onclick="return:false" class="like" ui-seq="'+r.list[i].cmi_ui_seq+'" cmi-seq="'+r.list[i].cmi_seq+'">♡</a> '+'<span class="like_cnt">'+r.list[i].like_cnt+'</span>'+
                    '</div>'
                    }
                }

                $(".commet_area").append(tag);

            }
            if(r.list.cl_status = 1){
                $(".like_mod").html("♥");
            } else if(r.list.cl_status = 0) {
                $(".like_mod").html("♡");
            }

            $(".like").click(function(){

                if(user_seq == null || user_seq == "") {
                    alert("로그인 이후 사용하실수있습니다.")
                    return;
                }

                let data2 = {
                    cl_ui_seq:user_seq,
                    cl_cmi_seq:$(this).attr("cmi-seq")
                }
                insertCommentLike(data2);
            });

            $(".like_mod").click(function(){
                let data3 = {
                    cl_seq:$(this).attr("cl-seq"),
                    cl_status:$(this).attr("like-data")
                }

                updateCommentLike(data3)
                if($(this).html() == "♥") {
                    $(this).html("♡");
                    $(this).attr("like-data", 1);
                } 
                else {
                    $(this).html("♥");
                    $(this).attr("like-data", 0);
                }
            });


            $(".modify").click(function(){
                if($(this).attr("mod") == 1) {
                    if(!confirm("수정하시겠습니까?")) return;
                    let data = {
                        cmi_seq:$(this).attr("cmi-seq"),
                        cmi_summary:$(this).prev(".mod_comment_text").val()
                    }
                    patchComment(data);
                }
                else {
                    $(this).attr("mod", 1);
                    $(this).html("수정하기");
                    $(this).prev(".mod_comment_text").show();
                    $(this).prev().prev(".comment_text").hide();
                    $(this).next(".mod_cancel").show();
                }
            });
            $(".mod_cancel").click(function(){
                $(".modify").attr("mod", 0);
                $(".modify").html("수정");
                $(".modify").prev(".mod_comment_text").hide();
                $(".modify").prev().prev(".comment_text").show();
                $(".modify").next(".mod_cancel").hide();
                $(".modify").attr("class", "modify")
            });

            $(".delete").click(function(){
                if(!confirm("삭제하시겠습니까?")) return;
                // alert($(this).attr("cmi-seq"));
                deleteComment($(this).attr("cmi-seq"))
            });

            $(".report").click(function(){
                getCommentInfo($(this).attr("cmi-seq"));
            });
        }
    });
}

function getCommentInfo(seq) {
    $.ajax({
        url:"/api/comment/report_info?seq="+seq,
        type:"get",
        success:function(r) {
            console.log(r.ComInfo);
            $("#report").attr("cmi-seq", r.ComInfo.cmi_seq);
            $("#report").attr("ui-seq", r.ComInfo.cmi_ui_seq);
        }
    })
}

function getCommentBest(seq) {
    $.ajax({
        url:"/api/comment/best?seq="+seq,
        type:"get",
        success:function(r) {
            $(".commet_best").html("")
            console.log(r.list);
            for(let i=0; i < r.list.length; i++){
                let tag = ""
                if(r.list[i].like_cnt == null) {
                    r.list[i].like_cnt = 0
                }

                if(r.list[i].cmi_ui_seq == user_seq){
                    if(r.list[i].cl_seq == null){
                        tag = 
                        '<div class="commet_area_box">'+
                            '<div class="user_id">'+r.list[i].ui_nickname+'</div>'+
                            '<div class="comment_text">'+r.list[i].cmi_summary+'</div>'+
                            '<input class="mod_comment_text" value="'+r.list[i].cmi_summary+'"></input>'+
                            '<button class="modify" mod="0" cmi-seq="'+r.list[i].cmi_seq+'">수정</button>'+
                            '<button class="mod_cancel">취소</button>'+
                            '<button class="delete" cmi-seq="'+r.list[i].cmi_seq+'">삭제</button>'+
                            '<a onclick="return:false" class="like" ui-seq="'+r.list[i].cmi_ui_seq+'" cmi-seq="'+r.list[i].cmi_seq+'">♡</a> '+'<span class="like_cnt">'+r.list[i].like_cnt+'</span>'+
                        '</div>'
                    }
                    else {
                        tag = 
                        '<div class="commet_area_box">'+
                            '<div class="user_id">'+r.list[i].ui_nickname+'</div>'+
                            '<div class="comment_text">'+r.list[i].cmi_summary+'</div>'+
                            '<input class="mod_comment_text" value="'+r.list[i].cmi_summary+'"></input>'+
                            '<button class="modify" mod="0" cmi-seq="'+r.list[i].cmi_seq+'">수정</button>'+
                            '<button class="mod_cancel">취소</button>'+
                            '<button class="delete" cmi-seq="'+r.list[i].cmi_seq+'">삭제</button>'+
                            '<a onclick="return:false" like-data="0" cl-seq="'+r.list[i].cl_seq+'" class="like_mod" ui-seq="'+r.list[i].cmi_ui_seq+'" cmi-seq="'+r.list[i].cmi_seq+'">'+r.list[i].cl_status+'</a> '+'<span class="like_cnt">'+r.list[i].like_cnt+'</span>'+
                        '</div>'
                    }
                }
                else {
                    if(r.list[i].cl_status != null && r.list[i].cl_ui_seq == user_seq && r.list[i].cl_cmi_seq == r.list[i].cmi_seq){
                    tag = 
                    '<div class="commet_area_box">'+
                        '<div class="user_id">'+r.list[i].ui_nickname+'</div>'+
                        '<div class="comment_text mod_num'+r.list[i].cmi_seq+'">'+r.list[i].cmi_summary+'</div>'+
                        '<button class="report" ui-seq="'+r.list[i].cmi_ui_seq+'" cmi-seq="'+r.list[i].cmi_seq+'">신고</button>'+
                        '<a onclick="return:false" like-data="0" class="like_mod" cl-seq="'+r.list[i].cl_seq+'" ui-seq="'+r.list[i].cmi_ui_seq+'" cmi-seq="'+r.list[i].cmi_seq+'">'+r.list[i].cl_status+'</a> '+'<span class="like_cnt">'+r.list[i].like_cnt+'</span>'+
                    '</div>'
                }else {
                    tag = 
                    '<div class="commet_area_box">'+
                        '<div class="user_id">'+r.list[i].ui_nickname+'</div>'+
                        '<div class="comment_text mod_num'+r.list[i].cmi_seq+'">'+r.list[i].cmi_summary+'</div>'+
                        '<button class="report" ui-seq="'+r.list[i].cmi_ui_seq+'" cmi-seq="'+r.list[i].cmi_seq+'">신고</button>'+
                        '<a onclick="return:false" class="like" ui-seq="'+r.list[i].cmi_ui_seq+'" cmi-seq="'+r.list[i].cmi_seq+'">♡</a> '+'<span class="like_cnt">'+r.list[i].like_cnt+'</span>'+
                    '</div>'
                    }
                }
                $(".commet_best").append(tag);
            }
        }
    })
}

function putInsertReport(data) {
    $.ajax({
        url:"/api/comment/report",
        type:"put",
        contentType:"application/json",
        data:JSON.stringify(data),
        success:function(r) {
            alert(r.msg);
        }

    })
}

function deleteComment(seq) {
    $.ajax({
        url:"/api/comment/delete?seq="+seq,
        type:"delete",
        success:function(r) {
            alert(r.msg);
            location.reload();
        }
    })
}

function patchComment(data) {
    $.ajax({
        url:"/api/comment/update",
        type:"patch",
        contentType:"application/json",
        data:JSON.stringify(data),
        success:function(r) {
            alert(r.msg);
            location.reload();
        }
    })
}

function insertCommentLike(data2) {
    $.ajax({
        url:"/api/comment/like",
        type:"put",
        contentType:"application/json",
        data:JSON.stringify(data2),
        success:function(r) {
            // console.log(data);
            location.reload();
        }
    })
}

function updateCommentLike(data3) {
    $.ajax({
        url:"/api/comment/like/update",
        type:"patch",
        contentType:"application/json",
        data:JSON.stringify(data3),
        success:function(r) {

        }
    })
}