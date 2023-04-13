
var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();


var countdownInterval = setInterval(function() {

  
  var now = new Date().getTime();

  
  var timeRemaining = countDownDate - now;

  
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  
  document.getElementById("countdown").innerHTML =
    days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";

  
  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
