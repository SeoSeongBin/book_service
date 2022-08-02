$("document").ready(function(){
    $("#login_btn").click(function(){
        let data = {
            ui_id:$("#ui_id").val(),
            ui_pwd:$("#ui_pwd").val()
        }
        $.ajax({
            url:"/api/user/login",
            type:"post",
            contentType:"application/json",
            data:JSON.stringify(data),
            success:function(r) {
                alert(r.message);
                console.log(data);
                if(r.status) {
                    location.href = "/"
                }
            },
            error:function(err) {
                console.log(err.data);
                alert(err.responseJSON.message);
            }
        })
    })
})