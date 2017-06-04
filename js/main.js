var elHour,
	elMinute,
	elSecond,
	now = new Date();

document.addEventListener("DOMContentLoaded", function(){
	elHour = document.querySelector("#clock .hour");
	elMinute = document.querySelector("#clock .minute");
	elSecond = document.querySelector("#clock .second");
	
	elSecond.innerText = now.getSeconds();
	elMinute.innerText = now.getMinutes();
	elHour.innerText = now.getHours();
	
	setInterval(function(){
		var seconds = parseInt(elSecond.innerText) + 1;
		var minutes = parseInt(elMinute.innerText);
		var hours = parseInt(elHour.innerText);
		if( seconds >= 60 ) {
			seconds = 0;
			minutes = parseInt(elMinute.innerText) + 1;
		};
		if( minutes >= 60 ) {
			minutes = 0;
			hours = parseInt(elHour.innerText) + 1;
		};
		if( hours >= 24 ) {
			hours = 0;
		};
		if( seconds < 10 ) {
			seconds = "0" + seconds;
		};
		if( minutes < 10 ) {
			minutes = "0" + minutes;
		};
		if( hours < 10 ) {
			hours = "0"+ hours;
		};

		if( hours > 17 && hours < 24 ) {
				document.getElementById('greeting').innerText = "Watch the sunset and drink some wine.";
				document.body.style.backgroundImage = "url('js/sunset.jpg')";
			}
		else if( hours > 13 && hours < 18 ) {
				document.getElementById('greeting').innerText = "Go home for the afternoon";
				document.body.style.backgroundImage = "url('js/home.jpg')";
			}
		else if( hours > 10 && hours < 14 ) {
				document.getElementById('greeting').innerText = "Feed the fish their lunch";
				document.body.style.backgroundImage = "url('js/fish.jpg')";
			}
		else if( hours > 6 && hours < 11 ) {
				document.getElementById('greeting').innerText = "Wake up and meet Dennis at the beach";
				document.body.style.backgroundImage = "url('js/beach.jpg')";
			}
		else if( hours >= 0 && hours < 7 ) {
				document.getElementById('greeting').innerText = "Go to sleep already...";
				document.body.style.backgroundImage = "url('js/sleep.jpg')";
			}
		
			elSecond.innerText = seconds;
			elMinute.innerText = minutes;
			elHour.innerText = hours;

	},1000);

});
