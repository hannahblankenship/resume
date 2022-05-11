$(document).ready(function(){

  $('.ex1').hover(function(){
    $('#sc1').css('background-color','yellow');
    $('#ss2').css('background-color','yellow');
  },
  function(){
    $('#sc1').css('background-color','magenta');
    $('#ss2').css('background-color','magenta');
  });
});
