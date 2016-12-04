var unicorn = {}; 
unicorn.counter = 0;
var counterdiv = document.getElementById('counter')
counterdiv.innerHTML = unicorn.counter
function unicornClick() {
	var snd = new Audio("sounds/fart.wav");
	snd.play();
	var poopImg = document.getElementById("poop")
	poopImg.className = "start-poop";
	unicorn.counter++
	counterdiv.innerHTML = unicorn.counter
	setTimeout(function(){
		poopImg.className = "ground-poop";
	},99)
}
