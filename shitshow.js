var shitshow;
var goesWell = "That's great! Share your good fortune!";
var goesBoom = "I'm sorry! I hope tomorrow is better!";

function check_day() {
    if (shitshow == true) {
        document.getElementById("result").innerHTML = goesBoom;
    } else if (shitshow == false) {
        document.getElementById("result").innerHTML = goesWell;
    }
}
