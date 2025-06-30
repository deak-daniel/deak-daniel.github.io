const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
			entry.target.classList.remove("hidden");
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.getElementsByClassName('hidden');
console.log(hiddenElements);
for (let index = 0; index < hiddenElements.length; index++) {
    observer.observe(hiddenElements[index]);
}

window.addEventListener("scroll", function(event){

	if(this.window.innerWidth < 1024){
		var top = this.pageYOffset;

		var layers = document.getElementsByClassName("parallax");
		var layer, speed, yPos;
		for (var i = 0; i < layers.length; i++) {
			layer = layers[i];
			speed = layer.getAttribute('data-speed');
			var yPos = -(top * (speed/2) / 100);
			layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

		}
	}
	else{
		var top = this.pageYOffset;

		var layers = document.getElementsByClassName("parallax");
		var layer, speed, yPos;
		for (var i = 0; i < layers.length; i++) {
			layer = layers[i];
			speed = layer.getAttribute('data-speed');
			var yPos = -(top * speed / 100);
			layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

		}
	}
		
	});