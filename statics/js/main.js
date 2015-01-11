var main = function() {

  // $('.tech h2').mouseover(function(){
  //   $('.tech h2').text('Learn More, Be Better!');
  // });
  // $('.tech h2').mouseout(function(){
  //   $('.tech h2').text('Techinical Qualification');
  // });

  // $('.hobb h2').mouseover(function(){
  //   $('.hobb h2').text('Charging is important!');
  // });
  // $('.hobb h2').mouseout(function(){
  //   $('.hobb h2').text('Interest');
  // });


  $('.totop a').click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });

   $('.move a').click(function(ev) {
      ev.preventDefault();
      $('html, body').animate({
         scrollTop: $(this.hash).offset().top
      }, 600);
   });
}




$(document).ready(main);


$(window).scroll(function() {
   var navHeight = $('#top-nav').height();
   var pos = $(window).scrollTop() + navHeight;
   $('#top-nav-left').find('.active').removeClass('active');

   if($(window).scrollTop() + $(window).height() >= $(document).height()) {
      $('#top-nav-left > div:nth-child(5) > a').parent().addClass('active');
   } else if(pos >= $('#expe').position().top) {
      $('#top-nav-left > div:nth-child(4) > a').parent().addClass('active');
   } else if(pos >= $('#tech').position().top) {
      $('#top-nav-left > div:nth-child(3) > a').parent().addClass('active');
   } else if(pos >= $('#prof').position().top) {
      $('#top-nav-left > div:nth-child(2) > a').parent().addClass('active');
   } else if(pos >= $('#top').position().top) {
      $('#top-nav-left > div:nth-child(1) > a').parent().addClass('active');
   }
})



