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
//Display current date
  document.getElementById("date").innerHTML = months[m] + " " + d + ", " + y;
//Change prompt on date
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
  dailyPrompt();

// START scrolling prompts
  var prompts = ["swift", "divided", "poison", "underwater", "long", "sword",
          "shy", "crooked", "screech", "gigantic", "run", "shattered",
          "teeming", "fierce", "mystery", "fat", "graceful", "filthy",
          "cloud", "deep", "furious", "trail", "juicy", "blind", "ship",
          "squeak", "climb", "fall", "united", "found", "mask"];

  var todayDate = new Date();
  var dateNumber = todayDate.getDate();

  for (var index = 0; index < dateNumber; index++) {
    if ( index % 2 === 0) {
      $("#even-boxes").append("<div class='prompt-box'>" +
                                + (index + 1) + ". " + prompts[index] +
                              "</div>");
    } else {
      $("#odd-boxes").append("<div class='prompt-box'>" +
                               + (index + 1) + ". " + prompts[index] +
                             "</div>");
    }
  }

  $(window).scroll(function() {
    $(".prompt-box").each(function() {
      var boxTopPosition = $(this).offset().top;
      var boxOuterHeight = $(this).outerHeight();
      var windowFractionHeight = $(window).height()*0.66;
      var windowScrollTop = $(window).scrollTop();
      if (windowScrollTop > (boxTopPosition+boxOuterHeight-windowFractionHeight)){
        $(this).animate({
          opacity: 1,
        }, 1200, function() {
        }).addClass('animated pulse');
      }
    });
  });
//END scrolling prompts

//START scrolling pen image
  var scrollHeight = $(document).height();
  var windowWidth = ($(window).width());
  var windowHeight = $(window).height()/1.25;
  $(window).scroll(function(event){
    var splatHeight = $(document).height();
    var splatWidth = $(window).width();
    console.log(splatWidth);

    var scrollTop = $(window).scrollTop();
    var scrollAmount = (scrollTop / (scrollHeight - windowHeight));
    console.log(scrollAmount);
    var moveTop = 10 + Math.round(Math.sin(scrollAmount * (Math.PI)/2) * windowHeight);
    var moveLeft = Math.round(Math.sin(scrollAmount * (Math.PI)) * windowWidth);

    // START Splatter animation
    if (scrollAmount > 0.05 && scrollAmount < .07) {
      $("#splat1").fadeIn();
    }
    if (scrollAmount > .07) {
      $("#splat1").fadeOut();
    }

    if (scrollAmount > 0.15 && scrollAmount < .19) {
      if (splatWidth > 2400) {
        $("#splat2").removeClass("splat2-reg-window");
        $("#splat2").addClass("splat2-xbig-window");
      } else if (splatWidth > 1800) {
        $("#splat2").removeClass("splat2-reg-window");
        $("#splat2").addClass("splat2-big-window");
      }
      $("#splat2").fadeIn();
    }
    if (scrollAmount > .19) {
      $("#splat2").fadeOut();
    }

    if (scrollAmount > 0.3 && scrollAmount < .40) {
      $("#splat3").fadeIn();
    }
    if (scrollAmount > .40) {
      $("#splat3").fadeOut();
    }

    if (scrollAmount > 0.5 && scrollAmount < .55) {
      if (splatWidth > 1800) {
        $("#splat4").removeClass("splat4-reg-window");
        $("#splat4").addClass("splat4-big-window");
      }
      $("#splat4").fadeIn();
    }
    if (scrollAmount > .55) {
      $("#splat4").fadeOut();
    }
    // END Splatter animation

    //START Pen scroller
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
    if($(window).scrollTop() + $(window).height() > $(document).height() - 750) {
      $("#penimg").css("top", 750);
      $("#penimg").css("left", 150);
    }
    if($(window).scrollTop() + $(window).height() > $(document).height() - 500) {
      $("#footerimg").fadeIn("slow");
    }
    //END

  });

  $(window).scroll(function() {
    var aboutPosition = $("#about").offset().top;
    var windowHeight = $(window).height();
    var windowST = $(window).scrollTop();

    if (windowST > (aboutPosition - (windowHeight/2))) {
      $("#sticky-button").fadeIn();
    }
  });


//Display prompt brushstroke underline
  $(".display-prompt").mouseover(function(){
    $(".stroke").fadeIn(600);
  });
//Image Hover = Display Artist Name
  // $('.hover').mouseover(function() {
  //   $('.img-text').css("visibility","visible");
  // });
  //
  // $('.hover').mouseout(function() {
  //   $('.img-text').css("visibility","hidden");
  // });

  $('.hover1').mouseover(function() {
    $('.img-text1').css("visibility","visible");
  });

  $('.hover1').mouseout(function() {
    $('.img-text1').css("visibility","hidden");
  });

  $('.hover2').mouseover(function() {
    $('.img-text2').css("visibility","visible");
  });

  $('.hover2').mouseout(function() {
    $('.img-text2').css("visibility","hidden");
  });

  $('.hover3').mouseover(function() {
    $('.img-text3').css("visibility","visible");
  });

  $('.hover3').mouseout(function() {
    $('.img-text3').css("visibility","hidden");
  });

//Display prompt list & hide scrolling prompts
  $(".prompt-link").click(function(){
    $("#all-boxes").fadeOut();
    $("#prompts").fadeIn();
  });

  $(".prompt-link2").click(function(){
    $("#prompts").fadeOut();
    $("#all-boxes").fadeIn();
  });
});
