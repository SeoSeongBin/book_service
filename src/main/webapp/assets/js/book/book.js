
    let book_keyword = "";
$("document").ready(function(){
    let query = window.location.search;
    let param = new URLSearchParams(query);
    let page = param.get('page');
    let keyword = param.get('keyword');
    // alert("연결확인")
    console.log(keyword);
    if(keyword != null) {
        getBookList(keyword, 1);
    } else {
        getBookList();
        $("#search_form").on("submit", function(e){
            e.preventDefault(); 
            getBookList ($("#keyword").val(), 1);
        });
    }

    // $.ajax({

    // })
})

function getBookList(keyword, page) {
    if(page == null || page == undefined) page = 1;
    if(keyword == null || keyword == undefined) keyword = "";
    $.ajax({
        url:"/api/book/book_list?page="+page+"&keyword="+keyword,
        type:"get",
        success:function(r) {
            console.log(r.list);
            console.log(r.keyword);
            console.log(r.pageCnt);
            $(".section_02_content").html("");
            for(let i=0; i < r.list.length; i++){
                let tag =
                '<div class="section_02_box">'+
                    '<div class="img_area">'+
                        '<img src="/img/book/'+r.list[i].bimg_file_name+'" alt="책 이미지">'+
                    '</div>'+
                    '<div class="info_area">'+
                        '<h3>'+r.list[i].bi_name+'<span>출간일</span></h3>'+
                        '<p>저자 : '+r.list[i].bi_publisher+'</p>'+
                        '<p>도서관 : '+r.list[i].li_name+'</p>'+
                        '<p>장르 : '+r.list[i].ci_name+'</p>'+
                        '<p>줄거리</p>'+
                        '<p>'+r.list[i].si_summary+'</p>'+
                    '</div>'+
                    '<a href="/book/book_detail?seq='+r.list[i].bi_seq+'">+</a>'
                '</div>';
                
                $(".section_02_content").append(tag);

            }
            $(".page_area").html("");
            for(let idx=0; idx < r.pageCnt; idx++){
                console.log(idx);
                let tag = 
                '<a href="#" onclick="return false;">'+(idx+1)+'</a>';
                $(".page_area").append(tag);
            }
            $(".page_area a").click(function(){
                let page = $(this).html();
                getBookList(book_keyword, page);
            })
        }
    })
}