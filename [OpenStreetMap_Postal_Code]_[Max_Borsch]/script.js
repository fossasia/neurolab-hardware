$(window).load(function() {

var long = 0;
var lat = 0;

function error (msg) {
    $("#result").text(msg);
}

function submit () {
    if (Number.isNaN(parseFloat($("#lat").val()))) { error("Postal Code must be a number!"); return; }
  
  var postal = parseFloat($("#lat").val());
  
    $.getJSON("https://nominatim.openstreetmap.org/?format=json&addressdetails=1&postalcode="+postal, function( data ) {
        $("#result").html("<b>Latitude:</b> " + data[0].lat + "<br /> <b>Longitude:</b> " + data[0].lon);
    });
}

$("#submit").click(submit);

});
