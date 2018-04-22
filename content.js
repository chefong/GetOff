console.log("I'm running");

var userHours = 0;
var userMinutes = 0;
var userTimer;

chrome.storage.local.get(['savedDefaultHours', 'savedDefaultMinutes'], function(result) {
	if (result.savedDefaultHours == 0 && result.savedDefaultMinutes == 0){
		userHours = 0;
		userMinutes = .1;
	}
	if (result.savedDefaultHours == ""){
		userHours = 0;
	}
	else{
		userHours = result.savedDefaultHours;
	}
	if (result.savedDefaultMinutes == ""){
		userMinutes = 0;
	}
	else{
		userMinutes = result.savedDefaultMinutes;
	}

	//alert(userHours + " hours and " + userMinutes + " minutes");

	userTimer = setTimeout(alertUserCustom(userHours, userMinutes), convertTime(userHours, userMinutes));
})

function alertUserDefault() {
	alert("You have been on " + window.location.href + " for at least 10 minutes");
	window.location.replace("http://m.memegen.com/gy6mmd.jpg");
}

function alertUserCustom(userHours, userMinutes) {
	alert("You have been on " + window.location.href + " for at least " + userHours + " hour(s) and " + userMinutes + " minutes(s)");
	window.location.replace("http://m.memegen.com/gy6mmd.jpg");
}

function convertTime(hours, minutes) {
	return ((hours * 60) + minutes) * 60000;
}