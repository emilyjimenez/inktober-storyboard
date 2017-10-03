$(document).ready(function(){
  // $('.parallax').parallax();


  var scrollHeight = $(document).height();
  var windowWidth = ($(window).width());
  var windowHeight = $(window).height()/1.25;
  $(window).scroll(function(event){

    var scrollTop = $(window).scrollTop();
    var scrollAmount = (scrollTop / (scrollHeight - windowHeight));
    // console.log(Math.sin(scrollAmount * (Math.PI)));
    var moveTop = 10 + Math.round(Math.sin(scrollAmount * (Math.PI)/2) * windowHeight);
    var moveLeft = Math.round(Math.sin(scrollAmount * (Math.PI)) * windowWidth);

    // $("#penimg").css("top", 10 + Math.round(Math.sin(scrollAmount * (Math.PI)/2) * windowHeight));
    // $("#penimg").css("left", Math.round(Math.sin(scrollAmount * (Math.PI)) * windowWidth));

    if (moveTop > 980) {
      $("#penimg").css("top", 980);
    } else {
      $("#penimg").css("top", Math.round(Math.sin(scrollAmount * (Math.PI)/2) * windowHeight));
    }
    if (moveLeft < 150) {
      $("#penimg").css("left", 150);
    } else {
      $("#penimg").css("left", Math.round(Math.sin(scrollAmount * (Math.PI)) * windowWidth));
    }
    // $("#stickytest").css("top", (Math.sin((scrollAmount) * 90) * windowWidth));
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
        $("#penimg").css("top", 750);
        $("#penimg").css("left", 150);
      }
  });
});
