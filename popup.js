// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// document.getElementById('save').addEventListener('click', saveDefaultTimer);

// function saveDefaultTimer() {

//   console.log("hi");
//   var defaultHours = document.getElementById('Hours').value;
//   var defaultMinutes = document.getElementById('Minutes').value;

//   console.log(defaultHours);
//   console.log(defaultMinutes);

//   chrome.storage.local.set({
//     'savedDefaultHours': defaultHours,
//     'savedDefaultMinutes': defaultMinutes
//   }, function() {
//     // Update status to let user know options were saved.
//     // var status = document.getElementById('status');
//     // status.textContent = "Options saved.";
//     // setTimeout(function() {
//     //   status.textContent = '';
//     // }, 750);
//     alert("Success!");
//   });
// }

window.onload = function() {
	document.getElementById('save').onclick = function() {
		console.log("hi");
		var defaultHours = document.getElementById('Hours').value;
		var defaultMinutes = document.getElementById('Minutes').value;

		console.log(defaultHours);
		console.log(defaultMinutes);

		chrome.storage.local.set({'savedDefaultHours': defaultHours, 'savedDefaultMinutes': defaultMinutes}, function() {
		  	alert("Success!");
		});

		chrome.storage.local.get('savedDefaultHours', function(result) {
			console.log("hours " + result.savedDefaultHours);
		})
	}
}