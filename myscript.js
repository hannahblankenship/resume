$(document).ready(function(){

  $('.ex1').hover(function(){
    $('#sc1').css('background-color','magenta');
    $('#ss2').css('background-color','magenta');
  },
  function(){
    $('#sc1').css('background-color','none');
    $('#ss2').css('background-color','white');
  });
});
