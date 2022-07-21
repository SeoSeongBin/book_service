$("document").ready(function(){
    const swiper = new Swiper('.swiper', {
        loop:true,
        autoplay:true,
        navigation: {
            nextEl: '.left_btn',
            prevEl: '.right_btn',
        },
        width:300
    });

})