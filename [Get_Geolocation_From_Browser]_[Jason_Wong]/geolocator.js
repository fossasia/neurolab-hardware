window.onload = function() {    
  var getLocation = function(event) {
      event.preventDefault();
      doStuff.resultBox.querySelector('.latitude').innerHTML = "<img src='loading.gif' width=50 alt='loading'>";
      doStuff.resultBox.querySelector('.longitude').innerHTML = "<img src='loading.gif' width=50 alt='loading'>";
      if(navigator.geolocation) { //if geolocation is supported
        var lat, lon;
        navigator.geolocation.getCurrentPosition(function(position){
          lat = position.coords.latitude;
          lon = position.coords.longitude;
          doStuff.placeInfo(lat, lon);
        });
      } else {
        doStuff.resultBox.querySelector('.latitude').innerHTML = 'not';
        doStuff.resultBox.querySelector('.longitude').innerHTML = 'supported';
      }
  }
  
  var placeInfo = function(latitude, longitude) {
    doStuff.resultBox.querySelector('.latitude').innerHTML = latitude.toFixed(4);
    doStuff.resultBox.querySelector('.longitude').innerHTML = longitude.toFixed(4);
  }
  
  //object oriented
  var doStuff = {
    submitbtn: document.getElementById('submit'),
    resultBox: document.getElementById('result'),
    getLocation: getLocation,
    placeInfo: placeInfo
  }
  
    doStuff.submitbtn.addEventListener('click', doStuff.getLocation, false);
}