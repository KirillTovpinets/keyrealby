$(document).ready(function(){
    $("#slick-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 5
    });
    $(".slick-track").addClass("d-flex");
    $(".slick-track").addClass("align-items-center");

    $("a[href^='#']").click(function(e){
        let target = $(this).attr("href");
        let from = $(target).offset().top;
        $(".nav-link.active").removeClass("active");
        $(this).addClass("active");
        $("html, body").animate({
            scrollTop: from
        }, 1000)
        return false;
    })

    $(window).scroll(function(){
        let top = $("#top").scrollTop();
        if(top > 450){
            $("header nav").css("background", "#333");
        }else{
            $("header nav").css("background", "transparent");
        }
    })
})