$(document).ready(function(){
  // $('.parallax').parallax();
  // var offset=$("#stickytest").offset();
  // $(window).scroll(function(event){
  //   var st = $(this).scrollTop();
  //      console.log($(document).height()/4);
  //
  //   $("#stickytest").css("left", offset.left - st);
  //   $("#stickytest").css("left", st + offset.left);
  //   $("#stickytest").css("top", st + offset.top);
  // })
  var scrollheight = $(document).height();
  var windowheight = $(window).height();



  $(window).scroll(function(event){
    $('.scrollspy').scrollSpy();
    var scrollTop = $(window).scrollTop();
    var scrollamount = (scrollTop / (scrollheight-windowheight)) * 100;
    // if( scrollamount > 50) {
    //   $("#stickytest").css("right", "auto");
    //   console.log("what");
    // } else {
    $("#stickytest").css("left", scrollamount + "%");
    // }
  });
  // var offset=$("#stickytest").offset();
  // $(window).scroll(function(event){
  //   var st = $(this).scrollTop();
  //      console.log($(document).height()/4);
  //
  //   $("#stickytest").css("left", offset.left - st);
  //   $("#stickytest").css("left", st + offset.left);
  //   $("#stickytest").css("top", st + offset.top);
  // })
});
