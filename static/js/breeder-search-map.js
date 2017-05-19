// JavaScript for Google Maps API on breeder search results page. 

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: {lat: 37.5100571, lng: -117.967836}
  });
  var geocoder = new google.maps.Geocoder();

  var addresses = $(".address").map(function () {
      return $(this).data("address");
  });
  for (var i = 0; i < addresses.length; i++) {
      geocodeAddress(geocoder, map, addresses[i], i+1);
    }

  var zipcode = $("#zipcode").text();
  if (zipcode) {
    geocodeZip(map, zipcode);
  }


}

function geocodeAddress(geocoder, resultsMap, address, num) {
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      var marker = new google.maps.Marker({
        position: results[0].geometry.location,
        label: String(num),
        map: resultsMap
      });
      console.log(results[0].formatted_address);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function geocodeZip(resultsMap, zipcode) {
  var geocoder_zip = new google.maps.Geocoder();
  geocoder_zip.geocode({'address': zipcode}, function(results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
    }
  });
}