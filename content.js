console.log("I'm running");

let userTimer = setInterval(alertUser, 5000);

function alertUser() {
swal({
  title: 'Hey there!',
  text: "You have been on " + window.location.href + " for at least 10 minutes",
  type: 'warning',
  showCancelButton: false,
  confirmButtonColor: '#3085d6',
  confirmButtonText: "I don't need a break!"
}).then((result) => {
  
    window.location.replace("http://m.memegen.com/gy6mmd.jpg");
  
})
	// alert("You have been on " + siteURL + " for at least 10 minutes");
	//window.location.replace("http://m.memegen.com/gy6mmd.jpg");
}