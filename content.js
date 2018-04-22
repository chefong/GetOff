console.log("I'm running");

let userTimer = setInterval(alertUser, 5000);
var siteURL;

chrome.tabs.query({'active': true, 'currentWindow': true}, function(tabs) {
    siteURL = window.location;
});

function alertUser() {
	alert("You have been on " + siteURL + " for at least 10 minutes");
	window.location.replace("http://m.memegen.com/gy6mmd.jpg");
}