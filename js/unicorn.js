function unicornClick() {
	var snd = new Audio("sounds/fart.wav");
	snd.play();
	var poopImg = document.getElementById("poop")
	poopImg.className = "start-poop";
	setTimeout(function(){
		poopImg.className = "ground-poop";
	},99)
}
