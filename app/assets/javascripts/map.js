(function() {
  var renderMap = function(geoData) {
    L.mapbox.accessToken = 'pk.eyJ1Ijoic2FsdHkiLCJhIjoiN2lJeWI2ayJ9.okjWPSPMRHaMiTPEynHDbQ';

    var map = L.mapbox.map('index-map')
        .setView([27.73, 86.369], 8)
        .addLayer(L.mapbox.tileLayer('mapbox.dark'));

    var myLayer = L.mapbox.featureLayer().addTo(map);
    myLayer.setGeoJSON(geoData);

    // L.mapbox.featureLayer(geoData).on('load', function(e) {
    //     var clusterGroup = new L.MarkerClusterGroup();
    //     console.log(e);
    //     e.target.eachLayer(function(layer) {
    //         clusterGroup.addLayer(layer);
    //     });
    //     map.addLayer(clusterGroup);
    // });

    map.scrollWheelZoom.disable();

    myLayer.on('click', displayInfo);

  };


  var getAllBeneficiaries = function () {

    var $mapContainer = $("#index-map");
    if($mapContainer.length){
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
        "marker-symbol": "hospital",
        "marker-size": "large",
        "marker-color": "#AA3939",
      }
    }
    return feature;
  };

  var displayInfo = function(event) {
    event.layer.closePopup();
    var id = event.layer.feature.properties.title;
    var $info = $('#resource-info');
    $('#click-pin-display').hide();
    $.ajax({
      url: 'beneficiaries/' + id,
    }).done(function (beneficiaryData) {
      $info.html(displayResourceInfo(beneficiaryData));
    }).fail(function () {
      console.log("Something went wrong.");
    });

  };

  var displayResourceInfo = function(beneficiaryData) {
    var source   = $("#resource-template").html();
    var template = Handlebars.compile(source);
    var context = {
                    id: beneficiaryData.id,
                    description: beneficiaryData.description,
                    name: beneficiaryData.name,
                    requested_resources: beneficiaryData.requested_resources,
                  };
    var html    = template(context);
    return html
  };


  $(function() {
    getAllBeneficiaries();
  });

})();