$(document).ready(function(){
  
  var skill_color = 'magenta';
  var skill_clear = 'transparent;
  
  /* WD AM Experiences*/
  /* EX 1 */
  $('.ex1').hover(function(){
    $('#ssc').css('background-color', skill_color); /*communication highlight*/
    $('#sspm').css('background-color', skill_color); /*project management highlight*/
    $('#sst').css('background-color', skill_color); /*teamwork highlight*/
    $('#swm').css('background-color', skill_color); /*microsoft office highlight*/
    $('#sws').css('background-color', skill_color); /*salesforce highlight*/
  },
  function(){
    $('#ssc').css('background-color', skill_clear); /*communication clear*/
    $('#sspm').css('background-color', skill_clear); /*project management clear*/
    $('#sst').css('background-color', skill_clear); /*teamwork clear*/
    $('#swm').css('background-color', skill_clear); /*microsoft office clear*/
    $('#sws').css('background-color', skill_clear); /*salesforce clear*/
  });
  
  /* EX 2 */
  $('.ex2').hover(function(){
    $('#ssc').css('background-color', skill_color); /*communication highlight*/
    $('#ssl').css('background-color', skill_color); /*leadership highlight*/
    $('#sspm').css('background-color', skill_color); /*project management highlight*/
    $('#sst').css('background-color', skill_color); /*teamwork highlight*/
    $('#swm').css('background-color', skill_color); /*microsoft office highlight*/
    $('#sws').css('background-color', skill_color); /*salesforce highlight*/
  },
  function(){
    $('#ssc').css('background-color', skill_clear); /*communication clear*/
    $('#ssl').css('background-color', skill_clear); /*leadership clear*/
    $('#sspm').css('background-color', skill_clear); /*project management clear*/
    $('#sst').css('background-color', skill_clear); /*teamwork clear*/
    $('#swm').css('background-color', skill_clear); /*microsoft office clear*/
    $('#sws').css('background-color', skill_clear); /*salesforce clear*/
  });
  
  /* EX 3 */
  $('.ex3').hover(function(){
    $('#ssl').css('background-color', skill_color);
    $('#ssp').css('background-color', skill_color);
    $('#swm').css('background-color', skill_color);
      },
  function(){
    $('#ssl').css('background-color', skill_clear);
    $('#ssp').css('background-color', skill_clear);
    $('#swm').css('background-color', skill_clear);
  });
  
  /* EX 4 */
  $('.ex4').hover(function(){
    $('#ssl').css('background-color', skill_color);
    $('#ssp').css('background-color', skill_color);
    $('#swm').css('background-color', skill_color);
      },
  function(){
    $('#ssl').css('background-color', skill_clear);
    $('#ssp').css('background-color', skill_clear);
    $('#swm').css('background-color', skill_clear);
  });
  
});
