$(document).ready(function(){

  /* WD AM Experiences*/
  /* EX 1 */
  $('.ex1').hover(function(){
    $('#ss1a').css('background-color','magenta');
    $('#sw7').css('background-color','magenta');
    $('#sw8').css('background-color','magenta');
  },
  function(){
    $('#ss1a').css('background-color','transparent');
    $('#sw7').css('background-color','transparent');
    $('#sw8').css('background-color','transparent');
  });
  
  /* EX 2 */
  $('.ex2').hover(function(){
    $('#ss1a').css('background-color','magenta');
    $('#ss1').css('background-color','magenta');
    $('#ss2').css('background-color','magenta');
    $('#sw7').css('background-color','magenta');
    $('#sw8').css('background-color','magenta');
  },
  function(){
    $('#ss1a').css('background-color','transparent');
    $('#ss1').css('background-color','transparent');
    $('#ss2').css('background-color','transparent');
    $('#sw7').css('background-color','transparent');
    $('#sw8').css('background-color','transparent');
  });
  
    /* EX 3 */
  $('.ex3').hover(function(){
    $('#ss1').css('background-color','magenta');
    $('#ss2').css('background-color','magenta');
    $('#sw7').css('background-color','magenta');
      },
  function(){
    $('#ss1').css('background-color','transparent');
    $('#ss2').css('background-color','transparent');
    $('#sw7').css('background-color','transparent');
  });
  
      /* EX 4 */
  $('.ex4').hover(function(){
    $('#ss1').css('background-color','magenta');
    $('#ss2').css('background-color','magenta');
    $('#sw7').css('background-color','magenta');
      },
  function(){
    $('#ss1').css('background-color','transparent');
    $('#ss2').css('background-color','transparent');
    $('#sw7').css('background-color','transparent');
  });
  
});
