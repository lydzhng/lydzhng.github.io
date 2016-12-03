function unicornClick() {
	var poopImg = document.getElementById("poop")
	poopImg.className = "start-poop";
	setTimeout(function(){
		poopImg.className = "ground-poop";
	},99)
}
