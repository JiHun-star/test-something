$(function(){

  let t = 0;

  $('.btn').on('click',function(){
    ++t;
    if (t % 2 == 0) {
      $(this).text('start');
      $(this).css('backgroundColor', '#242424');
      $(this).css('fontWeight', 'normal');
    }else {
      $(this).text('stop');
      $(this).css('backgroundColor', 'red');
      $(this).css('fontWeight', 'bold');
    }
    $('.box').toggleClass('slide');
  });

});