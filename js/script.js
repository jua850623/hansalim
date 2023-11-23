$(".gnb li").hover(
    function(){
        $(this).find(".sub").stop().slideDown();
    },
    function(){
        $(this).find(".sub").stop().slideUp();
    }
);
$(".han").hover(
    function(){
        $(this).find(".ssub").stop().slideDown();
    },
    function(){
        $(this).find(".ssub").stop().slideUp();
    }
);
$(".sal").hover(
    function(){
        $(this).find(".ssuub").stop().slideDown();
    },
    function(){
        $(this).find(".ssuub").stop().slideUp();
    }
);

$(".lim").hover(
    function(){
        $(this).find(".ssuubb").stop().slideDown();
    },
    function(){
        $(this).find(".ssuubb").stop().slideUp();
    }
);
$(".mul").hover(
    function(){
        $(this).find(".sssub").stop().slideDown();
    },
    function(){
        $(this).find(".sssub").stop().slideUp();
    }
);
$(".so").hover(
    function(){
        $(this).find(".sssuub").stop().slideDown();
    },
    function(){
        $(this).find(".sssuub").stop().slideUp();
    }
);
$(".bl").hover(
    function(){
        $(this).find(".sssuubb").stop().slideDown();
    },
    function(){
        $(this).find(".sssuubb").stop().slideUp();
    }
);
$(".story").hover(
    function(){
        $(this).find(".sssuuub").stop().slideDown();
    },
    function(){
        $(this).find(".sssuuub").stop().slideUp();
    }
);



$('.bxslider').bxSlider({
    infiniteLoop: false,
    hideControlOnEnd: true,
    slideWidth: 0



  });
  
  $(document).ready(function(){
    $(".slider").bxSlider();
  });


  $(".click").click(
    function(){
        $(".gnb2").toggleClass("on");
        
    }
  );


 
