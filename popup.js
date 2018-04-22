// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

window.onload = function() {
	document.getElementById('save').onclick = function() {
		console.log("hi");
		var defaultHours = document.getElementById('Hours').value;
		var defaultMinutes = document.getElementById('Minutes').value;

		console.log(defaultHours);
		console.log(defaultMinutes);

		chrome.storage.local.set({'savedDefaultHours': defaultHours, 'savedDefaultMinutes': defaultMinutes}, function() {
		  	// alert("Success!");
		});

		chrome.storage.local.get('savedDefaultHours', function(result) {
			console.log("hours " + result.savedDefaultHours);
		})
	}
}