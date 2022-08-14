    // sticky header
    $(function(){
        $(window).scroll(function(){
          var winTop = $(window).scrollTop();
          if(winTop >= 100){
            $("nav").addClass("sticky");
          }else{
            $("nav").removeClass("sticky");
          }
        },)
           // sticky header
      
          //  climbup
          if ($(window).scrollTop() > 500) {
              $('.climbup').show();
          }
      
          $(window).scroll(function () {
              if ($(window).scrollTop() > 500) {
                  $('.climbup').show();
              } else {
                  $('.climbup').hide();
              }
          });
      
          $('.climbup').click(function () {
              $('html').animate({ scrollTop: 0 }, 'slow');
          });
      
          $('.climbup').hover(function () {
              $('.upper').animate({ "top": "-38%" }, 'fast');
              $('.lower').animate({ "top": "31%" }, 'fast');
          }, function () {
              $('.upper').animate({ "top": "31%" }, 'fast');
              $('.lower').animate({ "top": "100%" }, 'fast');
          });
      })       // climbup
    

