let library_list = "";

$("document").ready(function(){
    getLibraryList();
    $("#search_form").on("submit", function(e){
        e.preventDefault(); 
        getLibraryList (1, $("#keyword").val());
    });

    // if(keyword != null) {
    //     getBookList (keyword, 1);
    // } else {
    //     getBookList();
    //     $("#search_form").on("submit", function(e){
    //         e.preventDefault(); 
    //         getBookList ($("#keyword").val(), 1);
    //     });
    // }

})

function getLibraryList(page, keyword) {
    if(page == null || page == undefined) page = 1;
    if(keyword == null || keyword == undefined) keyword = "";
$.ajax({
    url:"/api/library/library_list?page="+page+'&keyword='+keyword,
    type:"get",
    success:function(r) {
        console.log(r.list);
        $(".section_wrap").html("");
        for(let i=0; i < r.list.length; i++){
        tag = 
            '<div class="library_box">'+
                '<img src="/img/library/'+r.list[i].li_img_file+'" alt="">'+
                '<p>'+r.list[i].li_name+'</p>'+
            '</div>';

            $(".section_wrap").append(tag);
        }

        $(".page_area").html("");
        for(let i=0; i < r.pageCnt; i++) {
            tag2 =
            '<a href="#" onclick="return false;">'+(i+1)+'</a>'

            $(".page_area").append(tag2);
        }
        $(".page_area a").click(function(){
            let page = $(this).html();
            getLibraryList(library_list, page);
        })
    }
})
}