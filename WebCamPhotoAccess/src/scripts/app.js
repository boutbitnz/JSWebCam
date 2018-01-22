$(document).ready(function() {
  // alert('ok');
	// document.addEventListener('DOMContentLoaded', function() {
	//     alert("Ready!");
	// }, false);

  // var idScanner = document.getElementById("idScanner");
	// var snap = document.getElementById("snap");
	// var video = document.getElementById('video');
	// var canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');
	
	que.innerHTML = 'Scan Id ?';
	snap.innerHTML = '<img src="src/img/camImg.png"/>';

	// $('#snap').on('click', videoConfirm);
	$('#snap').on('click', camVideo);
	
	// window.alert("Scan Id?");
 	// window.confirm("Take Photo?");
	function videoConfirm() {
		var txt;
	  if (confirm("Press a button!") == true) {
	      txt = "You pressed OK!";
	      canvasImg(video);
	  } else {
	      txt = "You pressed Cancel!";
	  }
	  document.getElementById("demo").innerHTML = txt;
	}

	// Grab elements, create settings, etc.
	// var canvas = document.getElementById('canvas');
 	function camVideo() {
		// Get access to the camera!
		if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
		    // Not adding `{ audio: true }` since we only want video now
		    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
		        video.src = window.URL.createObjectURL(stream);
		        video.play();
		    });
		}
	}
	// Trigger photo take
	document.getElementById("snap").addEventListener("click", function() {
		context.drawImage(video, 0, 0, 640, 480);
	});

	// Works good, but it is video vs. snap img
	// function canvas() {
	// 	window.open('http://Users/erb017/Dev/button/app.html/', '_blank');
	// 	if (navigator.getUserMedia) {
	// 	            navigator.getUserMedia(
	// 				// constraints
	// 	            {
	// 	                video: true,
	// 	                audio: true
	// 	            },
	// 				// successCallback
	// 				function (localMediaStream) {
	// 					var video = document.querySelector('video');
	// 	                video.src = window.URL.createObjectURL(localMediaStream);
	// 					// do whatever you want with the video
	// 	                video.play();
	// 	            },
	// 				// errorCallback
	// 				function (err) {
	// 	                console.log("The following error occured: " + err);
	// 	            });
	// 	        } else {
	// 	            alert("getUserMedia not supported by your web browser or Operating system version");
	// 	        }
 //  }

	// Hoovering options
	// btn.style.hover.animation = "shake 0.82s cubic-bezier(.36,.07,.19,.97) both";
	// btn.style.hover.transform = "translate3d(0, 0, 0)";
	// btn.style.hover.backface-visibility = "hidden";
	// btn.style.hover.perspective = 1000px;
	// btn.style.hover =

	// Mouse ober img options
	// btn.addEventListener('mouseover', function() {
	// 	btn.innerHTML = '<img src="src/img/camImgFocus.png"/>';
	//     // mouse is hovering over this element
	// });

	// btn.addEventListener('mouseout', function() {
	// 	btn.innerHTML = '<img src="src/img/camImg.png"/>';
	//     // mouse was hovering over this element, but no longer is
	// });
// });​
});







