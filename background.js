// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
});
swal('any message')
// var userTime = setInterval(alertUser, 5000);
// var url;

// var userTime = setTimeout(alertUser, 5000);

// chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
//     url = tabs[0].url;
// });

// function alertUser() {
// 	alert("You have been on " + url + " for at least 10 minutes");
// }