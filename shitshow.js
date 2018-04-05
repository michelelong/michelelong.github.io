const shitshow = document.querySelector("#boxb");
const rainbows = document.querySelector("#boxc");
const hideRainbow = document.getElementById("boxc");
const hideShit = document.getElementById("boxb");
const headline = document.getElementsByClassName("headline")[0];
const meter = document.getElementById("meter");
let howBadIsIt = 0;

function animation(state) {
  if (state === "stop") {
    setTimeout(() => {
      meter.style.animationPlayState = "paused";
    }, 700);
  }
  if (state === "start") {
    meter.style.animationPlayState = "running";
  }
}

shitshow.addEventListener("click", function() {
  headline.textContent = "How bad was your day?";
  hideRainbow.className = "hidden";
  meter.className = "shit-meter";

  howBadIsIt -= 1;
  if (howBadIsIt === -1) {
    animation("start");
    animation("stop");
    hideShit.src = "poop-level1.png";
    headline.textContent = "Hm, that doesn't seem too bad.";
  }
  if (howBadIsIt === -2) {
    animation("start");
    animation("stop");
    hideShit.src = "poop-level2.png";
    headline.textContent = "Okay, it was bad, but it could have been worse!";
  }
  if (howBadIsIt === -3) {
    animation("start");
    animation("stop");
    hideShit.src = "poop-level3.png";
    headline.textContent = "Yikes, that's awful!";
  }
  if (howBadIsIt === -4) {
    animation("start");
    hideShit.className = "hidden";
    headline.textContent = "Oh, shit! Watch where you step!";
    document.body.className = "yuck";
    meter.className = "hidden";
  }
});

rainbows.addEventListener("click", function() {
  headline.textContent = "How nice was your day?";
  hideShit.className = "hidden center";
  meter.className = "rainbow-meter";
  howBadIsIt += 1;

  if (howBadIsIt === 1) {
    animation("start");
    animation("stop");
    hideRainbow.src = "rainbow-level1.png";
    headline.textContent = "A decent day, but nothing special.";
  }
  if (howBadIsIt === 2) {
    animation("start");
    animation("stop");
    hideRainbow.src = "rainbow-level2.png";
    headline.textContent = "That is nice. Good for you!";
  }
  if (howBadIsIt === 3) {
    animation("start");
    animation("stop");
    hideRainbow.src = "rainbow-level3.png";
    headline.textContent = "You have enough good fortune to share!";
  }
  if (howBadIsIt === 4) {
    animation("start");
    hideRainbow.className = "hidden";
    headline.textContent = "Your happiness is contagious!";
    document.body.className = "spew";
    meter.className = "hidden";
  }
});
