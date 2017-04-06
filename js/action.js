(function () {
    var $back = $(".back");
    var $sm = $(".show img");
    var $da1 = $(".downArrow1");
    
    $da1.animate({
        opacity: 1
    },2500);
    $(function () {
        $(window).scrollTop(0);   //刷新页面时返回顶部
    });
    $(window).bind("scroll",function(){
        var top = $(this).scrollTop();//当前窗口的滚动距离
        if(top>760){
            $back.show();
        }
        if(top<=760){
            $back.hide();
        }
    });
    $back.mouseenter(function () {
        $(this).css("opacity",0.4);
    });
    $back.mouseleave(function () {
        $(this).css("opacity",1);
    });
    $back.click(function () {
        $("html,body").animate({scrollTop:0}, 500);
        $(this).hide().css("opacity",0);
    });

    $(function () {
        $('div.pinch-zoom').each(function () {
            new RTP.PinchZoom($(this), {});
        });
    });
    
    var clickNumber = 0;
    var windowTiaojian = ($(window).width());
    $sm.click(function(){
        if (windowTiaojian>=800) {
            if(clickNumber %2 == 0){
                $(this).animate({
                    width: "100%"
                },1000)
            }else{
                $(this).animate({
                    width: "65%"
                },500)
            }
        }
        clickNumber ++;
    });
    if (windowTiaojian>=800) {
        $sm.mouseleave(function () {
            $(this).animate({
                width: "65%"
            },500);
            clickNumber = 0;
        });
    }

    if (windowTiaojian>=800) {
        $sm.mouseleave(function () {
            $(this).animate({
                width: "65%"
            },500);
            clickNumber = 0;
        });
    }

    if (windowTiaojian < 800) {
        $("img").css("pointer-events","none") 
    }
})();
