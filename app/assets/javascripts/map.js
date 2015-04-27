(function() {

  var renderMap = function() {
    L.mapbox.accessToken = 'pk.eyJ1Ijoic2FsdHkiLCJhIjoiN2lJeWI2ayJ9.okjWPSPMRHaMiTPEynHDbQ';
    var map = L.mapbox.map('map', 'mapbox.streets');
    map.setView([28.729, 84.133], 7);

    var myLayer = L.mapbox.featureLayer().addTo(map);
    myLayer.setGeoJSON(geoData);

    myLayer.on( 'click', displayInfo );
  };

  $(function() {
    renderMap();
  });

})();