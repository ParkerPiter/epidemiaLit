// Set the date we're counting down to
var countDownDate = new Date("2023-05-01T00:00:00Z").getTime();

// Update the countdown every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the countdown date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML = "Lanzamiento en " + days + "d " +
        hours + "h " + minutes + "m " + seconds + "s";

    // If the countdown is finished, display "Lanzado!"
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Lanzado!";
    }
}, 1000);

// Set social media links
document.getElementById("facebook-link").href = "https://www.facebook.com/";
document.getElementById("twitter-link").href = "https://twitter.com/";
document.getElementById("instagram-link").href = "https://www.instagram.com/";