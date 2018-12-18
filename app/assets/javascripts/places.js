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
  var mapOptions = {
    center: myCoords,
    zoom: 14
  };

  var mapAll = new google.maps.Map(document.getElementById('map-all'), mapOptions)

  var dynamicMarker = new google.maps.Marker({
    position: myCoords,
    animation: google.maps.Animation.DROP,
    map: mapAll,
    draggable: true,
    icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
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
    mapAll.panTo(dynamicMarker.getPosition());
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

  for(var i = 0; i < locations.length; i++){
    var marker = new google.maps.Marker({
      position: locations[i],
      map: mapAll,
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
  debugger
  for(var i = 0; i < foundLat.length; i++){
    var coordinate = {
      lat: parseFloat(foundLat[i].getAttribute("value")),
      lng: parseFloat(foundLong[i].getAttribute("value"))
    }
    foundLocations.push(coordinate)
  };


  for(var i = 0; i < foundLocations.length; i++){
    var infoWindow = new google.maps.InfoWindow({
      content: foundBody[i].getAttribute("value")
    });
    var marker = new google.maps.Marker({
      position: foundLocations[i],
      map: mapAll,
    });
    marker.addListener('click', function(){
      infoWindow.open(mapAll, marker);
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
  var mapOptions = {
    center: myCoords,
    zoom: 14
  };

  var map = new google.maps.Map(document.getElementById('map2'), mapOptions);
  var marker = new google.maps.Marker({
    position: myCoords,
    animation: google.maps.Animation.DROP,
    map: map,
    draggable: true,

  });

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
