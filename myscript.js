$(document).ready(function(){

  /* Highlighted Skills: */
  var highlight = ('background-color','magenta');
  /* var clr = css('background-color','transparent'); */
  
  /* WD AM Experiences*/
  /* EX 1 */
  $('.ex1').hover(function(){
    $('#ssc').css(highlight); /*communication*/
    $('#swm').css('background-color','magenta'); /*microsoft office highlight*/
    $('#sws').css('background-color','magenta'); /*salesforce highlight*/
  },
  function(){
    $('#ssc').css('background-color','transparent'); /*communication*/
    $('#swm').css('background-color','transparent'); /*microsoft office clear*/
    $('#sws').css('background-color','transparent'); /*salesforce clear*/
  });
  
  /* EX 2 */
  $('.ex2').hover(function(){
    $('#ssc').css('background-color','magenta'); 
    $('#ssl').css('background-color','magenta');
    $('#sspm').css('background-color','magenta');
    $('#swm').css('background-color','magenta');
    $('#sws').css('background-color','magenta');
  },
  function(){
    $('#ssc').css('background-color','transparent');
    $('#ssl').css('background-color','transparent');
    $('#sspm').css('background-color','transparent');
    $('#swm').css('background-color','transparent');
    $('#sws').css('background-color','transparent');
  });
  
  /* EX 3 */
  $('.ex3').hover(function(){
    $('#ssl').css('background-color','magenta');
    $('#ssp').css('background-color','magenta');
    $('#swm').css('background-color','magenta');
      },
  function(){
    $('#ssl').css('background-color','transparent');
    $('#ssp').css('background-color','transparent');
    $('#swm').css('background-color','transparent');
  });
  
  /* EX 4 */
  $('.ex4').hover(function(){
    $('#ssl').css('background-color','magenta');
    $('#ssp').css('background-color','magenta');
    $('#swm').css('background-color','magenta');
      },
  function(){
    $('#ssl').css('background-color','transparent');
    $('#ssp').css('background-color','transparent');
    $('#swm').css('background-color','transparent');
  });
  
});
