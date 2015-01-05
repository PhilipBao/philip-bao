var main = function() {
  $('.btn').click(function() {
    var post = $('.status-box').val();
    $('<li>').text(post).prependTo('.posts');
    $('.status-box').val('');
    $('.counter').text('140');
    $('.btn').addClass('disabled'); 
  });
  
  $('.status-box').keyup(function() {
    var postLength = $(this).val().length;
    var charactersLeft = 140 - postLength;
    $('.counter').text(charactersLeft);
  
    if(charactersLeft < 0) {
      $('.btn').addClass('disabled'); 
    }
    else if(charactersLeft == 140) {
      $('.btn').addClass('disabled');
    }
    else {
      $('.btn').removeClass('disabled');
    }
  });
  
  $('.btn').addClass('disabled');

  $('.icon-menu').click(function() {
    if($('.menu').hasClass('toggled')){
      $('.menu').animate({
        left: "-285px"
      }, 200);

      $('body').animate({
        left: "0px"
      }, 200);
      $('.icon-menu').animate({
        left:"25px"
      }, 200);
      $('.menu').removeClass('toggled')
    }else{
      $('.menu').animate({
        left: "0px"
      }, 200);

      $('.icon-menu').animate({
        left:"300px"
      }, 200);

      $('body').animate({
        left: "285px"
      }, 200);
      $('.menu').addClass('toggled')
    }
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
    $('.menu').removeClass('toggled')
  });
  /*toggle down*/
  $(function() {

    var $sidebar   = $(".menu"),
        $menu1     = $(".icon-menu"),
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 0;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
              marginTop: 0
                /*marginTop: $window.scrollTop() - offset.top + topPadding-20*/
            });
            $menu1.stop().animate({
              marginTop: 0
                /*marginTop: $window.scrollTop() - offset.top + topPadding-20*/
            });
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            });
            $menu1.stop().animate({
                marginTop: 0
            });
        }
    });
    
  });


  $('.totop a').click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });

  $('.tech h2').mouseover(function(){
    $('.tech h2').text('Learn More, Be Better!');
  });
  $('.tech h2').mouseout(function(){
    $('.tech h2').text('Techinical Qualification');
  });

  $('.hobb h2').mouseover(function(){
    $('.hobb h2').text('Charging is important!');
  });
  $('.hobb h2').mouseout(function(){
    $('.hobb h2').text('Interest');
  });


}

$(document).ready(main);