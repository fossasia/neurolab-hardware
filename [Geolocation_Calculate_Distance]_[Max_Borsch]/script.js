$(window).load(function() {

var destination = "https://raw.githubusercontent.com/fossasia/fossasia-communities/master/Singapore/HackerspaceSG"

////////////////////////////////////////
////////////////////////////////////////

var destLat = 0;
var destLon = 0;
var destName = "";

/* https://www.wikiwand.com/en/Haversine_formula */
function calcDist (lat1, lon1, lat2, lon2) {
    var radius = 6371000; // earth's radius
  var r_lat1 = lat1 * (Math.PI / 180);
  var r_lat2 = lat2 * (Math.PI / 180);
  var r_deltaLat = (lat2 - lat1) * (Math.PI / 180);
  var r_deltaLon = (lon2 - lon1) * (Math.PI / 180);

  var a = Math.sin(r_deltaLat/2) * Math.sin(r_deltaLat/2) +
          Math.cos(r_lat1) * Math.cos(r_lat2) *
          Math.sin(r_deltaLon/2) * Math.sin(r_deltaLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return Math.ceil(radius * c);
}

function error (msg) {
    $("#result").text(msg);
}

function submit () {
    if (Number.isNaN(parseFloat($("#lat").val()))) { error("Latitude must be a number!"); return; }
  if (Number.isNaN(parseFloat($("#lon").val()))) { error("Longitude must be a number!"); return; }
  
  var lat = parseFloat($("#lat").val());
  var lon = parseFloat($("#lon").val());
  var distance = calcDist(lat, lon, destLat, destLon);
  
    $("#result").html("<b>Distance to " + destName + ": </b><br/>" + distance + " Kilometers");
}

// Gets the destinations from JSON specified.
function getDest () {
  $.getJSON(destination, function( data ) {
        destLat = data.location.lat;
    destLon = data.location.lon;
    destName = data.name;
    $("#submit").text ("Distance to: " + destName);
    });
}

function locate () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(pos) {
            $("#lat").val(pos.coords.latitude);
          $("#lon").val(pos.coords.longitude);
        });
    } else { 
        $("#result").html("Geolocation is not supported by this browser.");
    }
}

getDest ();
$("#submit").click(submit);
$("#locate").click(locate);

});
