(function() {
  var renderMap = function(geoData) {
    L.mapbox.accessToken = 'pk.eyJ1Ijoic2FsdHkiLCJhIjoiN2lJeWI2ayJ9.okjWPSPMRHaMiTPEynHDbQ';
    var map = L.mapbox.map('map', 'mapbox.streets')
        .setView([27.73, 86.369], 8);

    var myLayer = L.mapbox.featureLayer().addTo(map);
    myLayer.setGeoJSON(geoData);
    
    // L.mapbox.featureLayer().addTo(map).setGeoJSON(geoData).on('ready', function(e) {
    //     var clusterGroup = new L.MarkerClusterGroup();
    //     e.target.eachLayer(function(layer) {
    //         clusterGroup.addLayer(layer);
    //     });
    //     map.addLayer(clusterGroup);
    // });

    // map.scrollWheelZoom.disable();

  };


  var getAllBeneficiaries = function () {
    var geoData = [{
      "type": "FeatureCollection",
      "features": [],
    }];

    $.ajax({
      url: '/beneficiaries',
    }).done(function (beneficiaryData) {
      for (x in beneficiaryData ) {
        geoData[0].features.push(createFeatureObject(beneficiaryData[x]));
      }
      renderMap(geoData);
    }).fail(function () {
      console.log("Something went wrong.");
    });
  }

  var createFeatureObject = function (beneficiary) {
    var feature = {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [ beneficiary.longitude, beneficiary.latitude ]
      },
      "properties": {
        "title": beneficiary.id,
        "marker-symbol": "library",
        "marker-size": "medium",
        "marker-color": "#d27591",
      }
    }
    return feature;
  };
  
  var ajaxGeoData = function() {
    // TODO: GET Api GeoData
    return $.get();
  };

  // .success Render MAP

  var displayInfo = function() {

  };


  $(function() {
    getAllBeneficiaries();
  });

})();