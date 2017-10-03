$(document).ready(function(){
  // $('.parallax').parallax();

  var scrollHeight = $(document).height();
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();
  var offset=$("#stickytest").offset();

  $(window).scroll(function(event){
    var scrollTop = $(window).scrollTop();
    var scrollAmount = (scrollTop / (scrollHeight - windowHeight));
    console.log(Math.sin(scrollAmount * (Math.PI)));
    $("#penimg").css("left", Math.round(Math.sin(scrollAmount * (Math.PI)) * windowWidth));
    $("#penimg").css("top", 10 + Math.round(Math.sin(scrollAmount * (Math.PI)/2) * windowHeight));
    // $("#stickytest").css("top", (Math.sin((scrollAmount) * 90) * windowWidth));
  });
});

// (Math.sin((scrollAmount) * 180) * windowWidth)



// $(window).scroll(function(event)){
//   var image = document.querySelector("#stickytest");
//   var start = 0;
//   function sine() {
//     image.style.left = 50 * Math.sin(start) + 10 + "%"
//     start +=0.05
//   });
//   window.setInterval(sine, 1000/30)
// });
// });
