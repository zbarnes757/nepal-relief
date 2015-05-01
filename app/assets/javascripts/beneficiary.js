(function () {

	var setBeneficiaryMap = function () {
		var $mapContainer = $("#beneficiary-map");
    if($mapContainer.length){
			var longitude = $mapContainer.data('long');
			var latitude = $mapContainer.data('lat');

	    L.mapbox.accessToken = 'pk.eyJ1Ijoic2FsdHkiLCJhIjoiN2lJeWI2ayJ9.okjWPSPMRHaMiTPEynHDbQ';
			beneficiaryMap = L.mapbox.map('beneficiary-map', 'mapbox.emerald').setView([ latitude, longitude ], 15);

			var geoData = [{
	      "type": "FeatureCollection",
	      "features": [{
	      "type": "Feature",
	      "geometry": {
	        "type": "Point",
	        "coordinates": [ longitude, latitude ]
	      },
	      "properties": {
	        "marker-symbol": "hospital",
	        "marker-size": "medium",
	        "marker-color": "#AA3939",
	      }
	    }],
	    }];

	    var myLayer = L.mapbox.featureLayer().addTo(beneficiaryMap);
	    myLayer.setGeoJSON(geoData);

		}
	}


	$(function() {
		setBeneficiaryMap();
	});

})();