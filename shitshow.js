const shitshow = document.querySelector(".boxb");
const rainbows = document.querySelector(".boxc");
const result = document.getElementById("result");

shitshow.addEventListener("click", function(){
	result.textContent = "I'm sorry! I hope tomorrow is better!";
	});
rainbows.addEventListener("click", function(){
	result.textContent = "That's great! Share your good fortune!";
	});
