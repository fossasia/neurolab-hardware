function checker() {
	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(main, showError);
    } else { 
        document.getElementById('result').innerHTML = "Retrieving Geolocation is not supported by this browser.";
    }
}


function main(position) {
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	var latlon = lat + "," + lon;
	var latSentence = "<p>Your current <b>Latitude</b> is " + lat + "</p>";
	var lonSentence = "<p>Your current <b>Longitude</b> is " + lon + "</p>";
	var img_url = 'http://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=15&size=500x400&sensor=false';
	var imgSentence = "<br><p>Your Location on a <b>Static Map</b> is:</p><img src='"+img_url+"'>"
	document.getElementById('result').innerHTML = latSentence + lonSentence + imgSentence;
}


function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('result').innerHTML = "<p>User denied the request for Geolocation. Please reset your settings. This is generally found near the URL bar of your Browser.</p><p>If you cannot find it, please use a search engine to find instructions to change your settings</p>"
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('result').innerHTML = "<p>Location information for you is unavailable. Please Try Again Later.</p>"
            break;
        case error.TIMEOUT:
            document.getElementById('result').innerHTML = "<p>The request to get user location timed out. Please Try Again.</p>"
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('result').innerHTML = "<p>An unknown error occurred. Please Try Again later.</p>"
            break;
    }
}