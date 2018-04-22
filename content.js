console.log("I'm running");

let userTimer = setInterval(alertUser, 5000);
var url;

chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
    url = tabs[0].url;
});

function alertUser() {
	alert("You have been on " + url + " for at least 10 minutes");
}