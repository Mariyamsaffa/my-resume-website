$(function(){
  $('#menu-btn').on('click',function(){$('nav ul').toggleClass('open');});
  $('.card').hide().each(function(i){$(this).delay(120*i).fadeIn(500);});
  $('.mini').hover(function(){$(this).stop().animate({marginTop:'-4px'},150);},function(){$(this).stop().animate({marginTop:'0'},150);});
  $('#print-btn').on('click',function(){window.print();});
  $('#year').text(new Date().getFullYear());
});
