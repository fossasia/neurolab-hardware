window.onload = function() {    
    getLocation = function(event) {
        event.preventDefault();
        
        //store elements in variables to improve efficiency
        var resultBox = document.getElementById('result');
        var codeElement = document.getElementById('postalcode');
        var countryVal = document.getElementById('country').value;
        var value = codeElement.value;
        
        //new XML quest
        var request = new XMLHttpRequest();

        var url = 'http://nominatim.openstreetmap.org/search?format=xml&country=' + countryVal + '&postalcode='+value; // For now it'll only be for United States
        //When it's ready, do this
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) { 
                var response = request.responseXML; 
				var places = response.getElementsByTagName("place");
				
                var placeData = response.getElementsByTagName("place")[0];
                var lat = placeData.getAttribute("lat");
                var lon = placeData.getAttribute("lon");
                var displayName = placeData.getAttribute("display_name");
                resultBox.querySelector('.latitude').innerHTML = "<strong>Latitude:</strong> " + lat
                resultBox.querySelector('.longitude').innerHTML = "<strong>Longitude:</strong> " + lon;
                resultBox.querySelector('.display_name').innerHTML = displayName;
            }
        }
        
        //open and send data
        request.open('GET', url, true);
        request.send();
    }
    
    submitbtn = document.getElementById('submit');
    //when submit button is clicked, activate the getLocation function
    submitbtn.addEventListener('click', getLocation, false);
}