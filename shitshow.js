const shitshow = document.querySelector("#boxb");
const rainbows = document.querySelector("#boxc");
const hideRainbow = document.getElementById("boxc");
const hideShit = document.getElementById("boxb");
const headline = document.getElementsByClassName("headline")[0];
let howBadIsIt = 0;

shitshow.addEventListener("click", function() {
  headline.textContent = "How bad was your day?";
  hideRainbow.style.display = "none";
  howBadIsIt -= 1;
  if (howBadIsIt === -1) {
    headline.textContent = "Hm, that doesn't seem too bad.";
  }
  if (howBadIsIt === -2) {
    headline.textContent = "Okay, it was bad, but it could have been worse!";
  }
  if (howBadIsIt === -3) {
    headline.textContent = "Yikes, that's awful!";
  }
  if (howBadIsIt === -4) {
    headline.textContent = "Oh, shit! Watch where you step!";
    hideShit.style.display = "none";
    document.body.className = "yuck";
  }
});

rainbows.addEventListener("click", function() {
  howBadIsIt += 1;
  headline.textContent = "How nice was your day?";
  hideShit.style.display = "none";
  if (howBadIsIt === 1) {
    headline.textContent = "A decent day, but nothing special.";
  }
  if (howBadIsIt === 2) {
    headline.textContent = "That is nice. Good for you!";
  }
  if (howBadIsIt === 3) {
    headline.textContent = "You have enough good fortune to share!";
  }
  if (howBadIsIt === 4) {
    document.body.className = "spew";
    headline.textContent = "Your happiness is contagious!";
    hideRainbow.style.display = "none";
  }
});
