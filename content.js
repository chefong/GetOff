console.log("I'm running");

var userHours;
var userMinutes;
var userTimer;

chrome.storage.local.get(['savedDefaultHours', 'savedDefaultMinutes'], function(result) {
	if (!result.savedDefaultHours && !result.savedDefaultMinutes){
		console.log("hi");
		userHours = 0;
		userMinutes = 0.1;
	}
	else{
		if (!result.savedDefaultHours){
			userHours = 0;
		}
		else{
			userHours = result.savedDefaultHours;
		}
		if (!result.savedDefaultMinutes){
			userMinutes = 0;
		}
		else{
			userMinutes = result.savedDefaultMinutes;
		}
	}
	//alert(userHours + " hours and " + userMinutes + " minutes");
	
	let time = convertTime(userHours, userMinutes);
	// alert(time);
	console.log(userHours, userMinutes);
	userTimer = setTimeout(function() {
		alertUser(userHours, userMinutes)
	}, time);
	//userTimer = setTimeout(alertUserCustom(userHours, userMinutes), time);
	function alertUser(userHours, userMinutes) {
		var siteName = extractName(window.location.href);

		swal({
		  title: 'Hey there!',
		  text: "You have been on " + siteName + " for at least " + (userHours || "0") + " hour(s) and " + (userMinutes || "0") + " minute(s). It's probably time for a break.",
		  type: 'warning',
		  showCancelButton: false,
		  allowOutsideClick: false,
		  allowEscapeKey: false,
		  confirmButtonColor: '#3085d6',
		  confirmButtonText: "I don't need a break!"
		}).then((result) => {
		    window.location.replace("http://m.memegen.com/gy6mmd.jpg");
		})
	}
})

function convertTime(hours, minutes) {
	let total =(hours * 60 + parseFloat(minutes)) * 60000;
	console.log(total)
	return total;
}

function extractName(name) {
	var pos1 = name.search("www.");
	var pos2 = name.search(".com");

	return name.slice(pos1 + 4, pos2)
}