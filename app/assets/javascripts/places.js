function mapStyle(){
  var styledMapType = new google.maps.StyledMapType (
    [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#523735"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#c9b2a6"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#dcd2be"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ae9e90"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#93817c"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#a5b076"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#447530"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#fdfcf8"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f8c967"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#e9bc62"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e98d58"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#db8555"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#806b63"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8f7d77"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#b9d3c2"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#92998d"
          }
        ]
      },
    ],
    {name: 'Styled Map'});
    return styledMapType
  };

function options(myCoords){
  var mapOptions = {
    center: myCoords,
    zoom: 14,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
              'styled_map']
    }
  };
  return mapOptions
};
// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js. ====================================================================================

function initMapAll() {
  //Checkin Marker
  var lat = document.getElementById('message_msg_lat').value;
  var lng = document.getElementById('message_msg_long').value;
  // if not defined create default position
  if (!lat || !lng){
    lat=45.520788;
    lng=-122.677645;
    document.getElementById('message_msg_lat').value = lat;
    document.getElementById('message_msg_long').value = lng;
  }
  var myCoords = new google.maps.LatLng(lat, lng);
  var map = new google.maps.Map(document.getElementById('map-all'), options(myCoords))


  map.mapTypes.set('styled_map', mapStyle());
  map.setMapTypeId('styled_map')

  var iconRed ={
    url: '/mapmarkerhighresred.png',
    scaledSize: new google.maps.Size(25, 36)
    }

  var dynamicMarker = new google.maps.Marker({
    position: myCoords,
    animation: google.maps.Animation.DROP,
    map: map,
    draggable: true,
    icon: iconRed,
    zIndex: 999
  });

  function refreshMarker(){
    var lat = document.getElementById('message_msg_lat').value;
    var lng = document.getElementById('message_msg_long').value;
    var myCoords = new google.maps.LatLng(lat, lng);
    dynamicMarker.setPosition(myCoords);
    map.setCenter(dynamicMarker.getPosition());
  }

  // when input values change call refreshMarker
  document.getElementById('message_msg_lat').onchange = refreshMarker;
  document.getElementById('message_msg_long').onchange = refreshMarker;

  // when marker is dragged update input values
  dynamicMarker.addListener('drag', function() {
    latlng = dynamicMarker.getPosition();
    newlat=(Math.round(latlng.lat()*1000000))/1000000;
    newlng=(Math.round(latlng.lng()*1000000))/1000000;
    document.getElementById('message_msg_lat').value = newlat;
    document.getElementById('message_msg_long').value = newlng;
  });

  // When drag ends, center (pan) the map on the marker position
  dynamicMarker.addListener('dragend', function() {
    map.panTo(dynamicMarker.getPosition());
  });

//Sent Messages Markers
  var allLat = document.getElementsByClassName('message_msg_lat');
  var allLng = document.getElementsByClassName('message_msg_long');
  var locations = []
  var markers = []

  for(var i = 0; i < allLat.length; i++){
    var coordinate = {
      lat: parseFloat(allLat[i].getAttribute("value")),
      lng: parseFloat(allLng[i].getAttribute("value"))
    }
    locations.push(coordinate)
  };

  var iconGrey ={
    url: '/mapmarkeradj.png',
    scaledSize: new google.maps.Size(36, 33)
  }

  for(var i = 0; i < locations.length; i++){
    var marker = new google.maps.Marker({
      position: locations[i],
      map: map,
      icon: iconGrey
  });
  markers.push(marker)
}

//Readable Messages
  var foundLat = document.getElementsByClassName('foundLat');
  var foundLong = document.getElementsByClassName('foundLong');
  var foundBody = document.getElementsByClassName('body');
  var fromName = document.getElementsByClassName('fromName');
  var foundLocations = []
  var foundMarkers = []
  var allNames = []
  for(var i = 0; i < foundLat.length; i++){
    var coordinate = {
      // lat: parseFloat(foundLat[i].getAttribute("value")),
      // lng: parseFloat(foundLong[i].getAttribute("value"))

      lat: parseFloat(foundLat[i].textContent),
      lng: parseFloat(foundLong[i].textContent)
    }
    foundLocations.push(coordinate)
  };

  var iconBlue = {
    url: 'mapmarkerhighresblue.png',
    scaledSize: new google.maps.Size(25, 36)
  }

  for(var i = 0; i < foundLocations.length; i++){
    var infoWindow = new google.maps.InfoWindow({
      content: foundBody[i].textContent
    });
    var marker = new google.maps.Marker({
      position: foundLocations[i],
      map: map,
      icon: '/mapmarkerhighresblue.png'
    });
    marker.addListener('click', function(){
      infoWindow.open(map, marker);
    });
    foundMarkers.push(marker)
  }
}

// ====================================================================================


function initMap2() {
  var lat = document.getElementById('message_msg_lat').value;
  var lng = document.getElementById('message_msg_long').value;
  // if not defined create default position

  if (!lat || !lng){
    lat=45.520788;
    lng=-122.677645;
    document.getElementById('message_msg_lat').value = lat;
    document.getElementById('message_msg_long').value = lng;
  }

  var myCoords = new google.maps.LatLng(lat, lng);

  var map = new google.maps.Map(document.getElementById('map-all'), options(myCoords));
  var marker = new google.maps.Marker({
    position: myCoords,
    animation: google.maps.Animation.DROP,
    map: map,
    draggable: true,

  });

  map.mapTypes.set('styled_map', mapStyle());
  map.setMapTypeId('styled_map');

  //refresh marker postion and recenter map on marker
  function refreshMarker(){
    var lat = document.getElementById('message_msg_lat').value;
    var lng = document.getElementById('message_msg_long').value;
    var myCoords = new google.maps.LatLng(lat, lng);
    marker.setPosition(myCoords);
    map.setCenter(marker.getPosition());
  }

  // when input values change call refreshMarker
  document.getElementById('message_msg_lat').onchange = refreshMarker;
  document.getElementById('message_msg_long').onchange = refreshMarker;

  // when marker is dragged update input values
  marker.addListener('drag', function() {
    latlng = marker.getPosition();
    newlat=(Math.round(latlng.lat()*1000000))/1000000;
    newlng=(Math.round(latlng.lng()*1000000))/1000000;
    document.getElementById('message_msg_lat').value = newlat;
    document.getElementById('message_msg_long').value = newlng;
  });

  // When drag ends, center (pan) the map on the marker position
  marker.addListener('dragend', function() {
    map.panTo(marker.getPosition());
  });
}

// ====================================================================================
