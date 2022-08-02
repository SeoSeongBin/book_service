$("document").ready(function(){
    selectUserInfo(user_seq);
})

function selectUserInfo(seq) {
    $.ajax({
        url:"/api/user/user_info?seq="+seq,
        type:"get",
        success:function(r) {
            console.log(r.userInfo);
            $(".id_area").html("");
            let IdTag = 
            '<p>아이디</p>'+
            '<input type="text" value="'+r.userInfo.ui_id+'" disabled>';
            $(".id_area").append(IdTag);
            
            $(".name_area").html("");
            let NameTag =
            '<p>이름</p>'+
            '<input type="text" value="'+r.userInfo.ui_name+'">'
            $(".name_area").append(NameTag);

            $(".nickname_area").html("");
            let nickNameTag =
            '<p>닉네임</p>'+
            '<input type="text" value="'+r.userInfo.ui_nickname+'">'
            $(".nickname_area").append(nickNameTag);

            $(".birthday_area").html("");
            let BirthTag =
            '<p>생년월일</p>'+
            '<input type="text" value="'+r.userInfo.ui_bir_dt+'">'
            $(".birthday_area").append(BirthTag);

            $(".birthday_area input").datepicker({
                dateFormat:"yy-mm-dd",
                monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
                monthNamesShort:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
                dayNames:["일","월","화","수","목","금","토"],
                daynamesShort:["일","월","화","수","목","금","토"],
                dayNamesstun:["일","월","화","수","목","금","토"],
                yearSuffix:"년",
                showMonthAfterYear:true,
                changeYear:true,
                changeMonth:true
            });

            $(".gen_area").html("");
            let GenTag =
            '<p>성별</p>'+
            '<input class="man" type="radio" name="gen" value="1">남자'+
            '<input class="no_man" type="radio" name="gen" value="2">여자'+
            '<input class="no_gen" type="radio" name="gen" value="3">선택안함'
            $(".gen_area").append(GenTag);
            $(".gen_area input").eq(r.userInfo.ui_gen-1).prop("checked", true);

            $(".btn_area").html("")
            let Btn_tag =
            '<button id="cancel">돌아가기</button>'+
            '<button id="modify">수정</button>';
            $(".btn_area").append(Btn_tag);

            $("#modify").click(function(){
                if(!confirm("수정하시겠습니까?")) return;

                if(isEmpty($(".pwd_area input").val())) {
                    alert("비밀번호를 올바르게 입력하세요");
                    return;
                }

                if(isEmpty($(".name_area input").val())) {
                    alert("이름을 올바르게 입력하세요");
                    return;
                }
                let data = {
                    ui_seq:user_seq,
                    ui_pwd:$(".pwd_area input").val(),
                    ui_name:$(".name_area input").val(),
                    ui_nickname:$(".nickname_area input").val(),
                    ui_bir_str:$(".birthday_area input").val(),
                    ui_gen:$(".gen_area input:checked").val()
                }
    
                updateUserInfo(data);
            })


        },
        error:function(err) {
                if(confirm("로그인하지 않으셧습니다."))
                return history.back();
        }
    })
}

function updateUserInfo(data) {
    $.ajax({
        url:"/api/user/update",
        type:"patch",
        contentType:"application/json",
        data:JSON.stringify(data),
        success:function(r) {
            alert(r.message);
            location.reload();
        }
    })
}