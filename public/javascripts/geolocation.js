// create google map
function GoogleMap(position) {
	var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

	var map = new google.maps.Map(document.getElementById('map'), {
						zoom: 10,
						disableDefaultUI: true,	
						mapTypeId: google.maps.MapTypeId.ROADMAP,
					});

	var marker = new google.maps.Marker({
						map: map,
						position: location,
						animation: google.maps.Animation.DROP,
						title: "This is your location"
					});

	map.setCenter(location);
}

// show error if location can't be found
function showError() {
	alert("Location can't be found");
}

//execute geolocation
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(GoogleMap, showError);
}
else {
	alert("Your browser does not support Geolocation.");
}