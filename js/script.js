
//jQuery functions///////////////////////////////
// lazy load from (http://jquery.eisbehr.de/lazy/)
$(function(){
  $(".lazy").Lazy();
});

$(document).ready(function () {
  //////////// delani stdio//////////////
  $("#delani").fadeOut(1000);
  $("#head").addClass("onLoad").fadeIn(2000);
  $("html, body").scrollTop(0);

 ////////////logo icons effect////////////////
  $(".text").hide();
  $(".whatDo").click(function () {
    $(this).children(".text").slideToggle(500);
    $(this).children(".hide-img").fadeToggle(500);
  });

  // website effects
  $(".down").removeClass("here");
  $(".up").mouseover(function () {
    $(this).children(".down").addClass("here");
  });
  $(".up").mouseleave(function () {
    $(this).children(".down").removeClass("here").fadeIn;
  });

  // form effect
  $("#submission").submit(function(event){
    var data_1 = $("input:first").val();
    var data_2 = $("input#mail").val();
    if(data_1 && data_2 != ""  ){
      $(".message").text("Thank you " + data_1 + "message received");
      $(".message").removeClass("error");
      $(".message").addClass("success");
    }else{
      $(".message").text("Error!! Please fill in all the details correctly");
      $(".message").addClass("error");
    }
    event.preventDefault();
  });

});
