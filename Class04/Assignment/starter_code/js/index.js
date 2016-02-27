$(document).ready(function() {
  $('.readmore').click(function(){
    $('#show-this-on-click').slideDown();
    $('.readmore').hide();
    $('.readless').show();
    event.preventDefault();
  });
  $('.readless').click(function(){
    $('#show-this-on-click').slideUp();
    $('.readless').hide();
    $('.readmore').show();
    event.preventDefault();
  });
  $('.learnmore').click(function(){
    $('#learnmoretext').slideDown();
    $('.learnmore').hide();
    event.preventDefault();
  });
});
  
  

 // document.getElementById('stopButton').onclick = illuminateRed;
//document.getElementById('slowButton').onclick = illuminateYellow;
//document.getElementById('goButton').onclick = illuminateGreen;
  

   // function onClick('.readmore'){
   // $('#show-this-on-click').slideDown();
  //  $('.readmore').hide();
  //  $('.readless').show();
 //   event.preventDefault();
  //});
//  $('.readless').onClick(function(){
//    $('#show-this-on-click').slideUp();
 //   $('.readless').hide();
 //   $('.readmore').show();
//    event.preventDefault();
//  });
 // $('.learnmore').onClick(function(){
 //   $('#learnmoretext').slideDown();
  //  $('.learnmore').hide();
  //  event.preventDefault();
//  });
//});

//The following is shown by default:

 // var moretext = "Show more >";
  v//ar lesstext = "Show less";

//$(function(){ 

    //$('.readmore').onClick(function(event){ 
       // event.preventDefault(); 
       // $('#show-this-on-click').slideDown(); 
//});

//});















