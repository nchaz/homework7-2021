var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector('#play').addEventListener('click', function() {
	console.log("Play Video");
	var vid = document.querySelector("#user");
	var vol = document.querySelector("#volume");
	vol.innerHTML = video.vol * 100 + "%";
	vid.play()
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
		video.currentTime = 0
		console.log("Going back to beginning")
	}
});