(function() {

  var geoTestShit = [{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [28.415, 83.382]
      },
      "properties": {
        "title": "Books for America",
        "marker-symbol": "library",
        "marker-size": "medium",
        "marker-color": "#d27591",
        "description": "Located in Dupont Circle, this used books store has a heart. Through your purchases they have donated over $5.4 million worth of books and materials to organizations throughout the U.S. Specifically they work to build libraries in schools, shelters, and prisons, to give the joy of reading to people in need. <a href='http://www.booksforamerica.org/' class='store-link' target='_blank'>Website</a>",
        },
      }
    ]
}]

  var ajaxGeoData = function() {
    // TODO: GET Api GeoData
    return $.get();
  };

  // .success Render MAP

  var displayInfo = function() {

  };

  var renderMap = function() {
    L.mapbox.accessToken = 'pk.eyJ1Ijoic2FsdHkiLCJhIjoiN2lJeWI2ayJ9.okjWPSPMRHaMiTPEynHDbQ';
    var map = L.mapbox.map('map', 'mapbox.streets');
    map.setView([28.729, 84.133], 7);

    var myLayer = L.mapbox.featureLayer().addTo(map);
    myLayer.setGeoJSON(geoTestShit);

    myLayer.on( 'click', displayInfo );
  };

  $(function() {
    renderMap();
  });

})();