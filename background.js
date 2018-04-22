// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
});


// // Download the Node helper library from twilio.com/docs/node/install
// // These consts are your accountSid and authToken from https://www.twilio.com/console
// const accountSid = 'ACcb57f1e5c22c022077cf6418524459ed';
// const authToken = '7554d223eaa26791ff32778b37147e7d';
// const client = require('twilio')(accountSid, authToken);

// client.messages
//   .create({
//     body: "Welcome to the twilio zone!",
//     to: '+13107020225',
//     from: '+4245436366',
//   })
//   .then(message => process.stdout.write(message.sid));
