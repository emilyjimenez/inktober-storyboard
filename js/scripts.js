//BACK END LOGIC
//Kyle Date Import part 1
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var n = new Date();
var y = n.getFullYear();
var m = n.getMonth();
var d = n.getDate();
//END Date Import part 1

//FRONT END LOGIC - USER INTERFACE
$(document).ready(function(){
  // $('.parallax').parallax();

//Kyle Testing Date Import part 2
  document.getElementById("date").innerHTML = months[m] + " " + d + ", " + y; //Display current date
//END part 2

//Kyle change prompt on date part 1
function dailyPrompt() {
    var prompt;
    switch (new Date().getDate()) {
        case 1:
            prompt = "Swift";
            break;
        case 2:
            prompt = "Divided";
            break;
        case 3:
            prompt = "Poison";
            break;
        case 4:
            prompt = "Underwater";
            break;
        case 5:
            prompt = "Long";
            break;
        case 6:
            prompt = "Sword";
            break;
        case 7:
            prompt = "Shy";
            break;
        case 8:
            prompt = "Crooked";
            break;
        case 9:
            prompt = "Screech";
            break;
        case 10:
            prompt = "Gigantic";
            break;
        case 11:
            prompt = "Run";
            break;
        case 12:
            prompt = "Shattered";
            break;
        case 13:
            prompt = "Teeming";
            break;
        case 14:
            prompt = "Fierce";
            break;
        case 15:
            prompt = "Mysterious";
            break;
        case 16:
            prompt = "Fat";
            break;
        case 17:
            prompt = "Graceful";
            break;
        case 18:
            prompt = "Filthy";
            break;
        case 19:
            prompt = "Cloud";
            break;
        case 20:
            prompt = "Deep";
            break;
        case 21:
            prompt = "Furious";
            break;
        case 22:
            prompt = "Trail";
            break;
        case 23:
            prompt = "Juicy";
            break;
        case 24:
            prompt = "Blind";
            break;
        case 25:
            prompt = "Ship";
            break;
        case 26:
            prompt = "Squeak";
            break;
        case 27:
            prompt = "Climb";
            break;
        case 28:
            prompt = "Fall";
            break;
        case 29:
            prompt = "United";
            break;
        case 30:
            prompt = "Found";
            break;
        case 31:
            prompt = "Mask";
            break;
        default:
            prompt = "Woops! Something went wrong. Please check the full prompt list for today's prompt.";
    }
    document.getElementById("dayPrompt").innerHTML = prompt;
}
//END part 1
//Kyle change prompt on date part 2
  dailyPrompt(); //Call dailyPrompy function on current date
//END part 2

  var scrollHeight = $(document).height();
  var windowWidth = ($(window).width());
  var windowHeight = $(window).height()/1.25;
  $(window).scroll(function(event){
    // $("#penimg").animate({opacity: 1}, 800, function(){});
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
    if($(window).scrollTop() + $(window).height() > $(document).height() - 750) {
        $("#penimg").css("top", 750);
        $("#penimg").css("left", 150);
      }
      if($(window).scrollTop() + $(window).height() > $(document).height() - 500) {
        $("#footerimg").fadeIn("slow");
      }

  });
  $(".display-prompt").mouseover(function(){
    $(".stroke").fadeIn(600);
  });

  // IMG HOVER TEXT CAPTION
  $('.hover').mouseover(function() {
    $('.text').css("visibility","visible");
  });

  $('.hover').mouseout(function() {
    $('.text').css("visibility","hidden");
  });
  // END IMAGE HOVER
});
