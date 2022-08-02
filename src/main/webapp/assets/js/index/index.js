$("document").ready(function(){
    $("#search").click(function(){
        let link='/book/book?page=1&keyword='+$("#keyword").val();
        $(location).attr('href', link);
    });

    selectCateList();

})

function selectCateList(seq) {
    $.ajax({
        url:"/api/book/mainList",
        type:"get",
        success:function(r) {
            console.log(r.cateList);
            for(let i=0; i<r.cateList.length; i++) {
                tag =
                '<button cate-seq="'+r.cateList[i].ci_seq+'">'+r.cateList[i].ci_name+'</button>'

                $(".tab_menu_button").append(tag);
            }

            selectBestBookList(1);

            $(".tab_menu_button button").eq(0).addClass("on")

            $(".tab_menu_button button").click(function(){
                let btn_seq = $(this).attr("cate-seq");
                selectBestBookList(btn_seq)
                $(".tab_menu_button button").removeClass("on");
                $(this).addClass("on");
            })
        }
    })
}

function selectBestBookList(seq) {
    $.ajax({
        url:"/api/book/mainList?seq="+seq,
        type:"get",
        success:function(r) {
            console.log(r.BookBestList);
            $(".book_area").html("");
            for(let i=0; i < r.BookBestList.length; i++) {
                let href = "'/book/book_detail?seq="+r.BookBestList[i].bi_seq+"'"
                console.log(href)
                let tag = 
                '<div class="book_info" onclick="location.href='+href+'";>'+
                    '<div class="book_img">'+
                        '<img src="/img/book/'+r.BookBestList[i].bimg_file_name+'" alt="">'+
                    '</div>'+
                    '<div class="book_name">'+
                        '<p>'+r.BookBestList[i].bi_name+'</p>'+
                        '<p>'+r.BookBestList[i].si_summary+'</p>'+
                    '</div>'+
                '</div>'
                $(".book_area").append(tag);
            }
        }
    })
}