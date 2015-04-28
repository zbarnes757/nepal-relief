(function () {

	var setBeneficiaryMap = function () {
		var longitude = $("#beneficiary-map").data('long');
		var latitude = $("#beneficiary-map").data('lat');

    L.mapbox.accessToken = 'pk.eyJ1Ijoic2FsdHkiLCJhIjoiN2lJeWI2ayJ9.okjWPSPMRHaMiTPEynHDbQ';
		beneficiaryMap = L.mapbox.map('beneficiary-map', 'mapbox.streets').setView([ latitude, longitude ], 15);

		var geoData = [{
      "type": "FeatureCollection",
      "features": [{
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [ longitude, latitude ]
      },
      "properties": {
        "marker-symbol": "library",
        "marker-size": "medium",
        "marker-color": "#d27591",
      }
    }],
    }];

    var myLayer = L.mapbox.featureLayer().addTo(beneficiaryMap);
    myLayer.setGeoJSON(geoData);

	}



	$(function() {
		setBeneficiaryMap();
	});

})();