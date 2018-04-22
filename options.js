// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function saveDefaultTimer() {
  console.log(document.getElementById("Hours").value);
  console.log(document.getElementById("Minutes").value);
  while (document.getElementById("Hours").value < 0){
    alert("please enter a number 0 or greater");
  }
  while (document.getElementById("Minutes").value < 0 || document.getElementById('Minutes').value > 60 ){
    alert("please enter a number 0 or greater but no more than 60");
  }
  var defualtHours = document.getElementById("Hours").value;
  var defaultMinutes = document.getElementById("Minutes").value;
  chrome.storage.sync.set({
    savedDefualtHours: defualtHours
    savedDefualtMinutes: defaultMinutes
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById("status");
    status.textContent = "Options saved.";
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

document.getElementById("save").addEventListener("click", saveDefualtTimer, false);


