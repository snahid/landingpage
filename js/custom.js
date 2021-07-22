$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:2
      }
  }
})


 $(document).ready(function(){
    $("#barguricon").click(function(){
        if( $('#menus').css({top: "-200%"})){
            $('#menus').css({
                top: "100%"
            })
           $("#barguricon").css({
               display: "none"
           });
           $("#bargurhide").css({
            display: "block"
        });
        }
    });

    $("#bargurhide").click(function(){
        if( $('#menus').css({top: "100%"})){
            $('#menus').css({
                top: "-200%"
            })
            $("#barguricon").css({
                display: "block"
            });
            $("#bargurhide").css({
             display: "none"
         });
        }
    });


    $(window).scroll(function () {
        if ($(document).scrollTop() >= 100) {
            $('.navbar-menu-wrapper').addClass('navbar-fixed');
        } else {
            $('.navbar-menu-wrapper').removeClass('navbar-fixed');
        }
    });
 });