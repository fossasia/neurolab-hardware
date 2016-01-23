$(window).load(function() {

// First Default Location: Googleplex, Mountain View, CA
// Second Default Location: Singapore, China

/* https://www.wikiwand.com/en/Haversine_formula */
function calcDist(lat1, lon1, lat2, lon2) {
    var radius = 6371000; // earth's radius
    var r_lat1 = lat1 * (Math.PI / 180);
    var r_lat2 = lat2 * (Math.PI / 180);
    var r_deltaLat = (lat2 - lat1) * (Math.PI / 180);
    var r_deltaLon = (lon2 - lon1) * (Math.PI / 180);

    var a = Math.sin(r_deltaLat / 2) * Math.sin(r_deltaLat / 2) +
        Math.cos(r_lat1) * Math.cos(r_lat2) *
        Math.sin(r_deltaLon / 2) * Math.sin(r_deltaLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return Math.ceil(radius * c);
}

/* 360 degrees (longitude) in a full day, 
24 hours in a day, for every (24/360)=15 degrees longitude, 
time change is one hour */
function calcTime(lon1, lon2) {
    var t1 = lon1 * 24 / 360;
    var t2 = lon2 * 24 / 360;
    return Math.ceil((t2 - t1));
}

function error(msg) {
    $("#result").text(msg);
}

function submit() {
    if (Number.isNaN(parseFloat($("#lat").val()))) {
        error("Latitude must be a number!");
        return;
    }
    if (Number.isNaN(parseFloat($("#lon").val()))) {
        error("Longitude must be a number!");
        return;
    }
    if (Number.isNaN(parseFloat($("#lat2").val()))) {
        error("Latitude #2 must be a number!");
        return;
    }
    if (Number.isNaN(parseFloat($("#lon2").val()))) {
        error("Longitude #2 must be a number!");
        return;
    }

    var lat = parseFloat($("#lat").val());
    var lon = parseFloat($("#lon").val());
    var lat2 = parseFloat($("#lat2").val());
    var lon2 = parseFloat($("#lon2").val());

    var distance = calcDist(lat, lon, lat2, lon2);
    var timeChange = calcTime(lon, lon2);

    $("#result").html("<b>Distance: </b>" + distance + " Kilometers<br/><b>Time Change: </b>" + (timeChange > 0 ? '+' : '') + timeChange + " Hours");
}

$("#submit").click(submit);

});
