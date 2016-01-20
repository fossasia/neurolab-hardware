var longitude, latitude;
var displayText = document.getElementById("displayText")

function getLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {

            latitude = position.coords.latitude
            longitude = position.coords.longitude;

            displayLocation(latitude, longitude)
        });
    } else {
        displayText.innerHTML = "Geolocation is not supported on this browser";
    }
}

function displayLocation(latitude, longitude) {
    displayText.innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
}