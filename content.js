console.log("I'm running");

// <<<<<<< HEAD
// let userTimer = setInterval(alertUser, 5000);

// function alertUser() {
// swal({
//   title: 'Hey there!',
//   text: "You have been on " + window.location.href + " for at least 10 minutes",
//   type: 'warning',
//   showCancelButton: false,
//   confirmButtonColor: '#3085d6',
//   confirmButtonText: "I don't need a break!"
// }).then((result) => {
  
//     window.location.replace("http://m.memegen.com/gy6mmd.jpg");
  
// })
// 	// alert("You have been on " + siteURL + " for at least 10 minutes");
// 	//window.location.replace("http://m.memegen.com/gy6mmd.jpg");
// =======
var userHours;
var userMinutes;
var userTimer;

chrome.storage.local.get(['savedDefaultHours', 'savedDefaultMinutes'], function(result) {
	userHours = result.savedDefaultHours;
	userMinutes = result.savedDefaultMinutes;

	//alert(userHours + " hours and " + userMinutes + " minutes");

	userTimer = setInterval(alertUserCustom(userHours, userMinutes), convertTime(userHours, userMinutes));
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