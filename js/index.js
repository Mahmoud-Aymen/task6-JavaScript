/// <reference typescc=c"../@types/jquery/">


$('.openNav').on('click',function(){
  $('.sideBar').animate({width:'250px'} , 100)
  $("a").css("display" , "block")
  $('.openNav').css("width" , "200")
})

$('.closebtn').on('click',function(){
  $('.sideBar').animate({width:'0px'} , 100)
  $("a").css("display" , "none")
})


$(".toggel").on("click" , function(){
      let curentText = $(this).next(".inner");
    $(".inner").not(curentText).slideUp(1000);
    curentText.slideToggle(1000);
})


let countDownDate = new Date("Jan 5, 2025 15:37:25").getTime();
let x = setInterval(function() {
  let now = new Date().getTime();
  
  let distance = countDownDate - now;
  
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  $(".days").text(days + "d");
  $(".hours").text(hours + "h");
  $(".minutes").text(minutes + "m");
  $(".seconds").text(seconds + "s");
  

  if (distance < 0) {
    clearInterval(x);
    $(".days").text("0d");
    $(".hours").text("0h");
    $(".minutes").text("0m");
    $(".seconds").text("0s");
  }
}, 1000);



  $('Textarea').on('input', function() {
    var text = $(this).val();
    var remainingChars = 100 - text.length;
    $('#charCount').text(remainingChars + ' characters remaining');
    if (text.length > 100) {
      $(this).val(text.substring(0, 100));
    }
  });



