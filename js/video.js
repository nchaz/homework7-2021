var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector('#play').addEventListener('click', function() {
	console.log("Play Video");
	video.play()
	var vol = document.querySelector("#volume");
	vol.innerHTML = video.vol * 100 + "%";
	
	// slider?
});

document.querySelector("#pause").addEventListener('click', function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener('click', function() {
	video.playbackRate *= .95;
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener('click', function() {
	video.playbackRate /= .95;
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener('click', function() {
	if (video.currentTime + 15 >= video.duration) {
		console.log("Original location " + video.currentTime)
		video.currentTime = 0
		console.log("Going back to beginning")
	}
	else {
		console.log("Original location " + video.currentTime)
		video.currentTime += 15
		console.log("New location " + video.currentTime)
	}
});

document.querySelector("#mute").addEventListener('click', function() {
	
	var mute = document.getElementById("mute")
	console.log("vol");
	if (mute.HTML == "Mute") {
		mute.innerHTML = "Mute";
		video.muted = false;
	}
	else  {
		mute.innerHTML = "Unmute";
		video.muted = true
	}
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	vol.innerHTML = this.value + "%";
	console.log(video.volume);
});
