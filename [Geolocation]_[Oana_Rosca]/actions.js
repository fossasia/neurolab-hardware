var sol = document.getElementById("result");

$("a").click(function(e) {
  e.preventDefault();
  getLocation();
});

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
    else {
      sol.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
  sol.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      sol.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      sol.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      sol.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      sol.innerHTML = "An unknown error occurred."
      break;
  }
}