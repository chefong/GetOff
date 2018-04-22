console.log("I'm running");

var userHours;
var userMinutes;
var userTimer;

chrome.storage.local.get(['savedDefaultHours', 'savedDefaultMinutes'], function(result) {
	userHours = result.savedDefaultHours;
	userMinutes = result.savedDefaultMinutes;

	//alert(userHours + " hours and " + userMinutes + " minutes");
	let time = convertTime(userHours, userMinutes);
	// alert(time);
	userTimer = setTimeout(alertUserCustom(userHours, userMinutes), time);
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
	let total = ((hours * 60) + minutes) * 60000;
	return total;
}