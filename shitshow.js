let shitshow;

function check_day() {

    let goesWell = "That's great! Share your good fortune!";
    let goesBoom = "I'm sorry! I hope tomorrow is better!";

    if (shitshow == true) {
        document.getElementById("result").innerHTML = goesBoom;
    } else if (shitshow == false) {
        document.getElementById("result").innerHTML = goesWell;
    }
}
