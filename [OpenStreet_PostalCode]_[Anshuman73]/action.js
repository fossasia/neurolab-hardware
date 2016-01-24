function main(form) {
	var base_url = "http://nominatim.openstreetmap.org/search?format=json&postalcode=";
	var code = form.postalcode.value;
	var url = base_url + code
	var req = new XMLHttpRequest();
	req.open('GET', url, false);
	req.send();
	var stuff = req.responseText;
	var data = JSON.parse(stuff);
	if (data.length > 0) {
		var statement = "<h1>Result(s):</h1>";
		var ins;
		for (ins in data) {
			var latitude = data[ins].lat;
			var longitude = data[ins].lon;
			var officialName = data[ins].display_name;
			var num = parseInt(ins) + 1;
			var sentence = "<b>Result No. " + num + "</b><p>The place with postal code <em>"+ code + "</em> is known as <strong>" + officialName + "</strong></p><p>and has a <ins>Longitude</ins> of <em><b>" + longitude + "</b></em> and a <ins>Latitude</ins> of<em><b> " + latitude + "</b></em></p><br>";
			statement += sentence;
		}
		document.getElementById("result").innerHTML = statement;
	} else {
		document.getElementById("result").innerHTML = "<h3>The Postal Code submitted is invalid. Please Try Again with a different query</h3>";
	}
	
}


function keypress(e) {
	if (e.keyCode == 13) {
		main(this.form);
		return false;
	}
}