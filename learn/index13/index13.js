

$(document).ready(function () {
    $(".HIDE").click(function () {
        $(".text").hide(1000);
    });
    $(".SHOW").click(function () {
        $(".text").show(1000);
    });

    $(".CHANGE").click(function () {
        $(".text").toggle(1000);
    });
    
    $(".Out").on("click", function () {
        $(".P1").fadeOut(1000);
        $(".P3").fadeOut(1000);
        $(".P2").fadeOut(1000);
    });

    $(".In").on("click", function () {
        $(".P1").fadeIn(1000);
        $(".P3").fadeIn(1000);
        $(".P2").fadeIn(1000);
    });


    $(".Toggle").on("click", function () {
        $(".P1").fadeToggle(1000);
        $(".P3").fadeToggle(1000);
        $(".P2").fadeToggle(1000);
    });

    $(".To").on("click",function () {
        $("img").fadeTo(1000,0.3);
    })

    $(".SL").on("click",function () {
        $(".concent").slideToggle(1000);
    })


});