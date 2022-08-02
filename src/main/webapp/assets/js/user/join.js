$("document").ready(function(){
    $("#join").click(function(){
        if(!confirm("회원가입 하시겠습니까?")) return;

        let data = {
            ui_id:$("#ui_id").val(),
            ui_name:$("#ui_name").val(),
            ui_pwd:$("#ui_pwd").val(),
            ui_bir_dt:$("#ui_bir_dt").val(),
            ui_nickname:$("#ui_nickname").val(),
            ui_gen:$(".gen input:checked").val()
        }
        $.ajax({
            url:"/api/user/join",
            type:"put",
            contentType:"application/json",
            data:JSON.stringify(data),
            success:function(r) {
                console.log(r.data);
                alert(r.message);
                location.href = "/";
            },
            error:function(err) {
                alert(err.message);
            }
            
        })
    })
});