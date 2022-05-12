$(document).ready(function(){
  
  var skill_color = 'green';
  
  /* WD AM Experiences*/
  /* EX 1 */
  $('.ex1').hover(function(){
    $('#ssc').css('background-color', skill_color); /*communication highlight*/
    $('#sspm').css('background-color','magenta'); /*project management highlight*/
    $('#sst').css('background-color','magenta'); /*teamwork highlight*/
    $('#swm').css('background-color','magenta'); /*microsoft office highlight*/
    $('#sws').css('background-color','magenta'); /*salesforce highlight*/
  },
  function(){
    $('#ssc').css('background-color','transparent'); /*communication clear*/
    $('#sspm').css('background-color','transparent'); /*project management clear*/
    $('#sst').css('background-color','transparent'); /*teamwork clear*/
    $('#swm').css('background-color','transparent'); /*microsoft office clear*/
    $('#sws').css('background-color','transparent'); /*salesforce clear*/
  });
  
  /* EX 2 */
  $('.ex2').hover(function(){
    $('#ssc').css('background-color','magenta'); /*communication highlight*/
    $('#ssl').css('background-color','magenta'); /*leadership highlight*/
    $('#sspm').css('background-color','magenta'); /*project management highlight*/
    $('#sst').css('background-color','magenta'); /*teamwork highlight*/
    $('#swm').css('background-color','magenta'); /*microsoft office highlight*/
    $('#sws').css('background-color','magenta'); /*salesforce highlight*/
  },
  function(){
    $('#ssc').css('background-color','transparent'); /*communication clear*/
    $('#ssl').css('background-color','transparent'); /*leadership clear*/
    $('#sspm').css('background-color','transparent'); /*project management clear*/
    $('#sst').css('background-color','transparent'); /*teamwork clear*/
    $('#swm').css('background-color','transparent'); /*microsoft office clear*/
    $('#sws').css('background-color','transparent'); /*salesforce clear*/
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
