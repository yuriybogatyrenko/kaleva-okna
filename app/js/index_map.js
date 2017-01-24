$(document).ready(function(){
   function initialize() {
			var secheltLoc = new google.maps.LatLng(55.750701, 37.617047); 
			var myMapOptions = {
				 zoom: 8
				,center: secheltLoc
				,mapTypeId: google.maps.MapTypeId.ROADMAP,
				scrollwheel: false,
				draggable: false,
				disableDefaultUI: true,
				styles:
					  [ { "featureType": "administrative", "elementType": "labels.text", "stylers": [ { "saturation": -100 }, { "visibility": "on" } ] },{ "featureType": "administrative", "elementType": "labels.text.stroke", "stylers": [ { "visibility": "off" } ] },{ "featureType": "road", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] },{ "featureType": "landscape", "stylers": [ { "saturation": -100 } ] },{ "featureType": "landscape.natural", "stylers": [ { "visibility": "off" } ] },{ "featureType": "road", "stylers": [ { "saturation": -100 }, { "lightness": 91 } ] },{ "featureType": "poi", "stylers": [ { "saturation": -100 }, { "visibility": "off" } ] },{ "featureType": "road.arterial", "stylers": [ { "visibility": "off" } ] },{ "featureType": "administrative.province", "stylers": [ { "visibility": "off" } ] },{ "featureType": "landscape", "stylers": [ { "visibility": "off" } ] },{ "featureType": "administrative", "elementType": "labels.text", "stylers": [ { "visibility": "on" }, { "lightness": 36 } ] },{ "featureType": "administrative", "elementType": "labels.text.stroke", "stylers": [ { "visibility": "off" } ] },{ "featureType": "transit", "stylers": [ { "visibility": "off" } ] },{ "featureType": "water", "elementType": "labels.text.stroke", "stylers": [ { "visibility": "off" } ] },{ "featureType": "water", "elementType": "labels.text.fill", "stylers": [ { "saturation": -100 }, { "lightness": 1 }, { "visibility": "off" } ] },{ "featureType": "water", "stylers": [ { "lightness": 7 } ] },{ "featureType": "administrative", "stylers": [ { "lightness": -29 } ] },{ "featureType": "administrative", "elementType": "labels.icon", "stylers": [ { "saturation": 100 }, { "hue": "#0091ff" }, { "weight": 0.1 }, { "visibility": "simplified" }, { "lightness": 100 } ] },{ } ]
			};
			
			var theMap = new google.maps.Map(document.getElementById("map-canvas"), myMapOptions);

			google.maps.event.addDomListener(window, 'resize', function() {
			    theMap.setCenter(secheltLoc);
			});
		}
   google.maps.event.addDomListener(window, 'load', initialize);
});