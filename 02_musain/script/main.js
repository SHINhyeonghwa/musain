
// MENU UNDERLINE 
$(function(){
    $('.gnb li a').on('mouseenter focus', function(){
        var bar = $(this).position().left;
        var widnum = $(this).width();
        $('span.bar').css({'left':bar + 'px', 'width':widnum + 'px', 'opacity':1});
    });
    $('.gnb li a').on('mouseleave', function(){
        $('span.bar').css({'left':0, 'width':0, 'opacity':0})
    });
});

// Scroll animation
$(function(){
    $('.animate').scrolla({
        mobile:true, //모바일 활성화
        once:true // 스크롤시 한번만 
    });
});








































