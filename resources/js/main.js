$(document).ready(function(){
    
    //  sticky header
    
    $(window).on('scroll',function(){
       var scroll = $(window).scrollTop();
        if (scroll<40){
            $(".sticky").removeClass("scroll-header");
        }else{
            $(".sticky").addClass("scroll-header");
        }
    });
    
    
    //    scrollTop 
    
    $(".click-top").click(function(){
       $("html,body").animate({scrollTop:0},1000); 
    });
    
    
    $(window).scroll(function(){
        var height = $(window).scrollTop();
        if (height>100){
            $(".click-top").fadeIn();
        }else{
            $(".click-top").fadeOut();
        }
    });
    
    
    
    
    
    //Skill Bar JS
    
    $('#bar1').barfiller({
        barColor: '#36c36e',
        tooltip: true,
    });
    $('#bar2').barfiller({
        barColor: '#108BF5',
        tooltip: true,
    });
    $('#bar3').barfiller({
        barColor: '#6071D1',
        tooltip: true,
    });
    $('#bar4').barfiller({
        barColor: '#E86161',
        tooltip: true,
    });
    $('#bar5').barfiller({
        barColor: '#6C2EB9',
        tooltip: true,
    });
    
    
    
    var mixer = mixitup('.mix-container'); 
    
    
});