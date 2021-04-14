
var a = new Date();
document.getElementById("d_t2").innerHTML=a.toDateString();
var x = document.getElementById("location");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

var myVar = setInterval(myTimer, 1000); 
function myTimer() {
    var d = new Date();                   
    document.getElementById("d_t").innerHTML = d.toLocaleTimeString(); 
    } 
var a = new Date();
document.getElementById("d_t2").innerHTML=a.toDateString();