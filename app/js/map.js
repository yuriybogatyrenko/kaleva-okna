$(document).ready(function(){
   function initialize() {
			var secheltLoc = new google.maps.LatLng(55.750701, 37.617047); 
			var secheltLoc2 = new google.maps.LatLng(55.833697, 37.517352);
			var secheltLoc3 = new google.maps.LatLng(55.857145, 37.622630); 
			var secheltLoc4 = new google.maps.LatLng(55.783407, 37.766494); 
			var secheltLoc5 = new google.maps.LatLng(55.698212, 37.774784);
			var secheltLoc6 = new google.maps.LatLng(55.633505, 37.664949);
			var secheltLoc7 = new google.maps.LatLng(55.650946, 37.532988);
			var secheltLoc8 = new google.maps.LatLng(55.716838, 37.484018); 
			var secheltLoc9 = new google.maps.LatLng(55.8, 37.420);
			var secheltLoc10 = new google.maps.LatLng(55.980952, 37.172534);
			var secheltLoc11 = new google.maps.LatLng(55.601142, 37.349312);
			var secheltLoc12 = new google.maps.LatLng(55.490978, 37.309165);
			var secheltLoc13 = new google.maps.LatLng(55.686440, 37.897467);
			var secheltLoc14 = new google.maps.LatLng(55.817224, 37.965979);
			var secheltLoc15 = new google.maps.LatLng(55.833504, 37.317009);
			var secheltLoc16 = new google.maps.LatLng(55.666064, 37.268725);
			var secheltLoc17 = new google.maps.LatLng(55.549589, 37.699312);
			var secheltLoc18 = new google.maps.LatLng(55.920210, 37.765497);
			var secheltLoc19 = new google.maps.LatLng(55.894803, 37.444634);
			var secheltLoc20 = new google.maps.LatLng(55.431028, 37.546106);

			var myMapOptions = {
				 zoom: 10
				,center: secheltLoc
				,mapTypeId: google.maps.MapTypeId.ROADMAP,
				scrollwheel: false,
				styles:
					  [
					   {
						stylers:
						 [
						  { saturation: -100 },
						  { lightness: 30 }
						 ]
					   }
					  ]
			};
			
			var theMap = new google.maps.Map(document.getElementById("map-canvas"), myMapOptions);

			var image = {
			url: 'images/beachflag.png',
			// This marker is 20 pixels wide by 32 pixels tall.
			size: new google.maps.Size(20, 32),
			// The origin for this image is 0,0.
			origin: new google.maps.Point(0,0),
			// The anchor for this image is the base of the flagpole at 0,32.
			anchor: new google.maps.Point(0, 32)
		  };
			
			var marker = new google.maps.Marker({
				map: theMap,
				draggable: false,
				position: secheltLoc,
				visible: true,
				icon: {
					url: 'images/marker.png',
					size: null
				},
			});
			
			var marker2 = new google.maps.Marker({
				map: theMap,
				draggable: false,
				position: secheltLoc2,
				visible: true,
				icon: {
					url: 'images/marker.png',
					size: null
				},
			});

			var marker3 = new google.maps.Marker({
				map: theMap,
				draggable: false,
				position: secheltLoc3,
				visible: true,
				icon: {
					url: 'images/marker.png',
					size: null
				},
			});

			var marker4 = new google.maps.Marker({
				map: theMap,
				draggable: false,
				position: secheltLoc4,
				visible: true,
				icon: {
					url: 'images/marker.png',
					size: null
				},
			});
			var marker5 = new google.maps.Marker({
				map: theMap,
				draggable: false,
				position: secheltLoc5,
				visible: true,
				icon: {
					url: 'images/marker.png',
					size: null
				},
			});
			var marker6 = new google.maps.Marker({
				map: theMap,
				draggable: false,
				position: secheltLoc6,
				visible: true,
				icon: {
					url: 'images/marker.png',
					size: null
				},
			});
			var marker7 = new google.maps.Marker({
				map: theMap,
				draggable: false,
				position: secheltLoc7,
				visible: true,
				icon: {
					url: 'images/marker.png',
					size: null
				},
			});
			var marker8 = new google.maps.Marker({
				map: theMap,
				draggable: false,
				position: secheltLoc8,
				visible: true,
				icon: {
					url: 'images/marker.png',
					size: null
				},
			});
			var marker9 = new google.maps.Marker({
				map: theMap,
				draggable: false,
				position: secheltLoc9,
				visible: true,
				icon: {
					url: 'images/marker.png',
					size: null
				},
			});
			var marker10 = new google.maps.Marker({
				map: theMap,
				draggable: false,
				position: secheltLoc10,
				visible: true,
				icon: {
					url: 'images/marker.png',
					size: null
				},
			});
			var marker11 = new google.maps.Marker({
				map: theMap,
				draggable: false,
				position: secheltLoc11,
				visible: true,
				icon: {
					url: 'images/marker.png',
					size: null
				},
			});
			var marker12 = new google.maps.Marker({
				map: theMap,
				draggable: false,
				position: secheltLoc12,
				visible: true,
				icon: {
					url: 'images/marker.png',
					size: null
				},
			});
			var marker13 = new google.maps.Marker({
				map: theMap,
				draggable: false,
				position: secheltLoc13,
				visible: true,
				icon: {
					url: 'images/marker.png',
					size: null
				},
			});
			var marker14 = new google.maps.Marker({
				map: theMap,
				draggable: false,
				position: secheltLoc14,
				visible: true,
				icon: {
					url: 'images/marker.png',
					size: null
				},
			});
			var marker15 = new google.maps.Marker({
				map: theMap,
				draggable: false,
				position: secheltLoc15,
				visible: true,
				icon: {
					url: 'images/marker.png',
					size: null
				},
			});
			var marker16 = new google.maps.Marker({
				map: theMap,
				draggable: false,
				position: secheltLoc16,
				visible: true,
				icon: {
					url: 'images/marker.png',
					size: null
				},
			});
			var marker17 = new google.maps.Marker({
				map: theMap,
				draggable: false,
				position: secheltLoc17,
				visible: true,
				icon: {
					url: 'images/marker.png',
					size: null
				},
			});
			var marker18 = new google.maps.Marker({
				map: theMap,
				draggable: false,
				position: secheltLoc18,
				visible: true,
				icon: {
					url: 'images/marker.png',
					size: null
				},
			});
			var marker19 = new google.maps.Marker({
				map: theMap,
				draggable: false,
				position: secheltLoc19,
				visible: true,
				icon: {
					url: 'images/marker.png',
					size: null
				},
			});
			var marker20 = new google.maps.Marker({
				map: theMap,
				draggable: false,
				position: secheltLoc20,
				visible: true,
				icon: {
					url: 'images/marker.png',
					size: null
				},
			});
			var boxTextStyle = "cursor:pointer; color: #fff; font-size:15px; padding: 16px 20px;";

			var boxText = document.createElement("div");
			boxText.setAttribute('data-need-mail', 'sales@okna-ru.org');
			boxText.style.cssText = boxTextStyle;
			boxText.innerHTML = "Центральный административный округ";

			var boxText2 = document.createElement("div");
			boxText2.setAttribute('data-need-mail', 'sao@okna-ru.org');
			boxText2.style.cssText = boxTextStyle;
			boxText2.innerHTML = "Северный административный округ";

			var boxText3 = document.createElement("div");
			boxText3.setAttribute('data-need-mail', 'sao@okna-ru.org');
			boxText3.style.cssText = boxTextStyle;
			boxText3.innerHTML = "Северо-восточный административный округ";

			var boxText4 = document.createElement("div");
			boxText4.setAttribute('data-need-mail', 'vao@okna-ru.org');
			boxText4.style.cssText = boxTextStyle;
			boxText4.innerHTML = "Восточный административный округ";

			var boxText5 = document.createElement("div");
			boxText5.setAttribute('data-need-mail', 'vao@okna-ru.org');
			boxText5.style.cssText = boxTextStyle;
			boxText5.innerHTML = "Юго-восточный административный округ";

			var boxText6 = document.createElement("div");
			boxText.setAttribute('data-need-mail', 'uao@okna-ru.org');
			boxText6.style.cssText = boxTextStyle;
			boxText6.innerHTML = "Южный административный округ";

			var boxText7 = document.createElement("div");
			boxText7.setAttribute('data-need-mail', 'zao@okna-ru.org');
			boxText7.style.cssText = boxTextStyle;
			boxText7.innerHTML = "Юго-западный административный округ";

			var boxText8 = document.createElement("div");
			boxText8.setAttribute('data-need-mail', 'zao@okna-ru.org');
			boxText8.style.cssText = boxTextStyle;
			boxText8.innerHTML = "Западный административный округ";

			var boxText9 = document.createElement("div");
			boxText9.setAttribute('data-need-mail', 'sao@okna-ru.org');
			boxText9.style.cssText = boxTextStyle;
			boxText9.innerHTML = "Северо-западный административный округ";

			var boxText10 = document.createElement("div");
			boxText10.setAttribute('data-need-mail', 'sao@okna-ru.org');
			boxText10.style.cssText = boxTextStyle;
			boxText10.innerHTML = "Зеленоградский административный округ";

			var boxText11 = document.createElement("div");
			boxText11.setAttribute('data-need-mail', 'uao@okna-ru.org');
			boxText11.style.cssText = boxTextStyle;
			boxText11.innerHTML = "Новомосковский административный округ";

			var boxText12 = document.createElement("div");
			boxText12.setAttribute('data-need-mail', 'uao@okna-ru.org');
			boxText12.style.cssText = boxTextStyle;
			boxText12.innerHTML = "Троицкий административный округ";

			var boxText13 = document.createElement("div");
			boxText13.setAttribute('data-need-mail', 'vao@okna-ru.org');
			boxText13.style.cssText = boxTextStyle;
			boxText13.innerHTML = "Люберцы";

			var boxText14 = document.createElement("div");
			boxText14.setAttribute('data-need-mail', 'vao@okna-ru.org');
			boxText14.style.cssText = boxTextStyle;
			boxText14.innerHTML = "Балашиха";

			var boxText15 = document.createElement("div");
			boxText15.setAttribute('data-need-mail', 'sao@okna-ru.org');
			boxText15.style.cssText = boxTextStyle;
			boxText15.innerHTML = "Красногорск";

			var boxText16 = document.createElement("div");
			boxText16.setAttribute('data-need-mail', 'zao@okna-ru.org');
			boxText16.style.cssText = boxTextStyle;
			boxText16.innerHTML = "Одинцово";

			var boxText17 = document.createElement("div");
			boxText17.setAttribute('data-need-mail', 'uao@okna-ru.org');
			boxText17.style.cssText = boxTextStyle;
			boxText17.innerHTML = "Видное";

			var boxText18 = document.createElement("div");
			boxText18.setAttribute('data-need-mail', 'vao@okna-ru.org');
			boxText18.style.cssText = boxTextStyle;
			boxText18.innerHTML = "Мытищи";

			var boxText19 = document.createElement("div");
			boxText19.setAttribute('data-need-mail', 'sao@okna-ru.org');
			boxText19.style.cssText = boxTextStyle;
			boxText19.innerHTML = "Химки";

			var boxText20 = document.createElement("div");
			boxText20.setAttribute('data-need-mail', 'uao@okna-ru.org');
			boxText20.style.cssText = boxTextStyle;
			boxText20.innerHTML = "Подольск";

			var myOptions = {
				 content: boxText
				,disableAutoPan: false
				,maxWidth: 0
				,pixelOffset: new google.maps.Size(-150, -50)
				,zIndex: null
				,boxStyle: { 
				  background: "#F58320"
				  ,width: "auto"
				 }
				,closeBoxMargin: "10px 2px 2px 2px"
				,closeBoxURL: ""
				,infoBoxClearance: new google.maps.Size(1, 1)
				,isHidden: false
				,pane: "floatPane"
				,enableEventPropagation: false
			};
			var myOptions2 = {
				 content: boxText2
				,disableAutoPan: false
				,maxWidth: 0
				,pixelOffset: new google.maps.Size(-120, -50)
				,zIndex: null
				,boxStyle: { 
				  background: "#F58320"
				  ,width: "auto"
				 }
				,closeBoxMargin: "10px 2px 2px 2px"
				,closeBoxURL: ""
				,infoBoxClearance: new google.maps.Size(1, 1)
				,isHidden: false
				,pane: "floatPane"
				,enableEventPropagation: false
			};

			var myOptions3 = {
				 content: boxText3
				,disableAutoPan: false
				,maxWidth: 0
				,pixelOffset: new google.maps.Size(-150, -50)
				,zIndex: null
				,boxStyle: { 
				  background: "#F58320"
				  ,width: "auto"
				 }
				,closeBoxMargin: "10px 2px 2px 2px"
				,closeBoxURL: ""
				,infoBoxClearance: new google.maps.Size(1, 1)
				,isHidden: false
				,pane: "floatPane"
				,enableEventPropagation: false
			};

			var myOptions4 = {
				 content: boxText4
				,disableAutoPan: false
				,maxWidth: 0
				,pixelOffset: new google.maps.Size(-120, -50)
				,zIndex: null
				,boxStyle: { 
				  background: "#F58320"
				  ,width: "auto"
				 }
				,closeBoxMargin: "10px 2px 2px 2px"
				,closeBoxURL: ""
				,infoBoxClearance: new google.maps.Size(1, 1)
				,isHidden: false
				,pane: "floatPane"
				,enableEventPropagation: false
			};

			var myOptions5 = {
				 content: boxText5
				,disableAutoPan: false
				,maxWidth: 0
				,pixelOffset: new google.maps.Size(-150, -50)
				,zIndex: null
				,boxStyle: { 
				  background: "#F58320"
				  ,width: "auto"
				 }
				,closeBoxMargin: "10px 2px 2px 2px"
				,closeBoxURL: ""
				,infoBoxClearance: new google.maps.Size(1, 1)
				,isHidden: false
				,pane: "floatPane"
				,enableEventPropagation: false
			};

			var myOptions6 = {
				 content: boxText6
				,disableAutoPan: false
				,maxWidth: 0
				,pixelOffset: new google.maps.Size(-120, -50)
				,zIndex: null
				,boxStyle: { 
				  background: "#F58320"
				  ,width: "auto"
				 }
				,closeBoxMargin: "10px 2px 2px 2px"
				,closeBoxURL: ""
				,infoBoxClearance: new google.maps.Size(1, 1)
				,isHidden: false
				,pane: "floatPane"
				,enableEventPropagation: false
			};

			var myOptions7 = {
				 content: boxText7
				,disableAutoPan: false
				,maxWidth: 0
				,pixelOffset: new google.maps.Size(-140, -50)
				,zIndex: null
				,boxStyle: { 
				  background: "#F58320"
				  ,width: "auto"
				 }
				,closeBoxMargin: "10px 2px 2px 2px"
				,closeBoxURL: ""
				,infoBoxClearance: new google.maps.Size(1, 1)
				,isHidden: false
				,pane: "floatPane"
				,enableEventPropagation: false
			};

			var myOptions8 = {
				 content: boxText8
				,disableAutoPan: false
				,maxWidth: 0
				,pixelOffset: new google.maps.Size(-130, -50)
				,zIndex: null
				,boxStyle: { 
				  background: "#F58320"
				  ,width: "auto"
				 }
				,closeBoxMargin: "10px 2px 2px 2px"
				,closeBoxURL: ""
				,infoBoxClearance: new google.maps.Size(1, 1)
				,isHidden: false
				,pane: "floatPane"
				,enableEventPropagation: false
			};

			var myOptions9 = {
				 content: boxText9
				,disableAutoPan: false
				,maxWidth: 0
				,pixelOffset: new google.maps.Size(-150, -50)
				,zIndex: null
				,boxStyle: { 
				  background: "#F58320"
				  ,width: "auto"
				 }
				,closeBoxMargin: "10px 2px 2px 2px"
				,closeBoxURL: ""
				,infoBoxClearance: new google.maps.Size(1, 1)
				,isHidden: false
				,pane: "floatPane"
				,enableEventPropagation: false
			};

			var myOptions10 = {
				 content: boxText10
				,disableAutoPan: false
				,maxWidth: 0
				,pixelOffset: new google.maps.Size(-150, -50)
				,zIndex: null
				,boxStyle: { 
				  background: "#F58320"
				  ,width: "auto"
				 }
				,closeBoxMargin: "10px 2px 2px 2px"
				,closeBoxURL: ""
				,infoBoxClearance: new google.maps.Size(1, 1)
				,isHidden: false
				,pane: "floatPane"
				,enableEventPropagation: false
			};

			var myOptions11 = {
				 content: boxText11
				,disableAutoPan: false
				,maxWidth: 0
				,pixelOffset: new google.maps.Size(-150, -50)
				,zIndex: null
				,boxStyle: { 
				  background: "#F58320"
				  ,width: "auto"
				 }
				,closeBoxMargin: "10px 2px 2px 2px"
				,closeBoxURL: ""
				,infoBoxClearance: new google.maps.Size(1, 1)
				,isHidden: false
				,pane: "floatPane"
				,enableEventPropagation: false
			};

			var myOptions12 = {
				 content: boxText12
				,disableAutoPan: false
				,maxWidth: 0
				,pixelOffset: new google.maps.Size(-120, -50)
				,zIndex: null
				,boxStyle: { 
				  background: "#F58320"
				  ,width: "auto"
				 }
				,closeBoxMargin: "10px 2px 2px 2px"
				,closeBoxURL: ""
				,infoBoxClearance: new google.maps.Size(1, 1)
				,isHidden: false
				,pane: "floatPane"
				,enableEventPropagation: false
			};

			var myOptions13 = {
				 content: boxText13
				,disableAutoPan: false
				,maxWidth: 0
				,pixelOffset: new google.maps.Size(-50, -50)
				,zIndex: null
				,boxStyle: { 
				  background: "#F58320"
				  ,width: "auto"
				 }
				,closeBoxMargin: "10px 2px 2px 2px"
				,closeBoxURL: ""
				,infoBoxClearance: new google.maps.Size(1, 1)
				,isHidden: false
				,pane: "floatPane"
				,enableEventPropagation: false
			};

			var myOptions14 = {
				 content: boxText14
				,disableAutoPan: false
				,maxWidth: 0
				,pixelOffset: new google.maps.Size(-50, -50)
				,zIndex: null
				,boxStyle: { 
				  background: "#F58320"
				  ,width: "auto"
				 }
				,closeBoxMargin: "10px 2px 2px 2px"
				,closeBoxURL: ""
				,infoBoxClearance: new google.maps.Size(1, 1)
				,isHidden: false
				,pane: "floatPane"
				,enableEventPropagation: false
			};

			var myOptions15 = {
				 content: boxText15
				,disableAutoPan: false
				,maxWidth: 0
				,pixelOffset: new google.maps.Size(-60, -50)
				,zIndex: null
				,boxStyle: { 
				  background: "#F58320"
				  ,width: "auto"
				 }
				,closeBoxMargin: "10px 2px 2px 2px"
				,closeBoxURL: ""
				,infoBoxClearance: new google.maps.Size(1, 1)
				,isHidden: false
				,pane: "floatPane"
				,enableEventPropagation: false
			};

			var myOptions16 = {
				 content: boxText16
				,disableAutoPan: false
				,maxWidth: 0
				,pixelOffset: new google.maps.Size(-50, -50)
				,zIndex: null
				,boxStyle: { 
				  background: "#F58320"
				  ,width: "auto"
				 }
				,closeBoxMargin: "10px 2px 2px 2px"
				,closeBoxURL: ""
				,infoBoxClearance: new google.maps.Size(1, 1)
				,isHidden: false
				,pane: "floatPane"
				,enableEventPropagation: false
			};

			var myOptions17 = {
				 content: boxText17
				,disableAutoPan: false
				,maxWidth: 0
				,pixelOffset: new google.maps.Size(-50, -50)
				,zIndex: null
				,boxStyle: { 
				  background: "#F58320"
				  ,width: "auto"
				 }
				,closeBoxMargin: "10px 2px 2px 2px"
				,closeBoxURL: ""
				,infoBoxClearance: new google.maps.Size(1, 1)
				,isHidden: false
				,pane: "floatPane"
				,enableEventPropagation: false
			};

			var myOptions18 = {
				 content: boxText18
				,disableAutoPan: false
				,maxWidth: 0
				,pixelOffset: new google.maps.Size(-50, -50)
				,zIndex: null
				,boxStyle: { 
				  background: "#F58320"
				  ,width: "auto"
				 }
				,closeBoxMargin: "10px 2px 2px 2px"
				,closeBoxURL: ""
				,infoBoxClearance: new google.maps.Size(1, 1)
				,isHidden: false
				,pane: "floatPane"
				,enableEventPropagation: false
			};

			var myOptions19 = {
				 content: boxText19
				,disableAutoPan: false
				,maxWidth: 0
				,pixelOffset: new google.maps.Size(-50, -50)
				,zIndex: null
				,boxStyle: { 
				  background: "#F58320"
				  ,width: "auto"
				 }
				,closeBoxMargin: "10px 2px 2px 2px"
				,closeBoxURL: ""
				,infoBoxClearance: new google.maps.Size(1, 1)
				,isHidden: false
				,pane: "floatPane"
				,enableEventPropagation: false
			};

			var myOptions20 = {
				 content: boxText20
				,disableAutoPan: false
				,maxWidth: 0
				,pixelOffset: new google.maps.Size(-50, -50)
				,zIndex: null
				,boxStyle: { 
				  background: "#F58320"
				  ,width: "auto"
				 }
				,closeBoxMargin: "10px 2px 2px 2px"
				,closeBoxURL: ""
				,infoBoxClearance: new google.maps.Size(1, 1)
				,isHidden: false
				,pane: "floatPane"
				,enableEventPropagation: false
			};

			var ib = new InfoBox(myOptions);
			var ib2 = new InfoBox(myOptions2);
			var ib3 = new InfoBox(myOptions3);
			var ib4 = new InfoBox(myOptions4);
			var ib5 = new InfoBox(myOptions5);
			var ib6 = new InfoBox(myOptions6);
			var ib7 = new InfoBox(myOptions7);
			var ib8 = new InfoBox(myOptions8);
			var ib9 = new InfoBox(myOptions9);
			var ib10 = new InfoBox(myOptions10);
			var ib11 = new InfoBox(myOptions11);
			var ib12 = new InfoBox(myOptions12);
			var ib13 = new InfoBox(myOptions13);
			var ib14 = new InfoBox(myOptions14);
			var ib15 = new InfoBox(myOptions15);
			var ib16 = new InfoBox(myOptions16);
			var ib17 = new InfoBox(myOptions17);
			var ib18 = new InfoBox(myOptions18);
			var ib19 = new InfoBox(myOptions19);
			var ib20 = new InfoBox(myOptions20);


			google.maps.event.addListener(marker, "mouseover", function (e) {
				ib.open(theMap, this);
				ib2.close();
				ib3.close();
				ib4.close();
				ib5.close();
				ib6.close();
				ib7.close();
				ib8.close();
				ib9.close();
				ib10.close();
				ib11.close();
				ib12.close();
				ib13.close();
				ib14.close();
				ib15.close();
				ib16.close();
				ib17.close();
				ib18.close();
				ib19.close();
				ib20.close();
			});
			
			google.maps.event.addListener(marker2, "mouseover", function (e) {
				ib2.open(theMap, this);
				ib.close();
				ib3.close();
				ib4.close();
				ib5.close();
				ib6.close();
				ib7.close();
				ib8.close();
				ib9.close();
				ib10.close();
				ib11.close();
				ib12.close();
				ib13.close();
				ib14.close();
				ib15.close();
				ib16.close();
				ib17.close();
				ib18.close();
				ib19.close();
				ib20.close();
			});
			google.maps.event.addListener(marker3, "mouseover", function (e) {
				ib3.open(theMap, this);
				ib2.close();
				ib.close();
				ib4.close();
				ib5.close();
				ib6.close();
				ib7.close();
				ib8.close();
				ib9.close();
				ib10.close();
				ib11.close();
				ib12.close();
				ib13.close();
				ib14.close();
				ib15.close();
				ib16.close();
				ib17.close();
				ib18.close();
				ib19.close();
				ib20.close();
			});
			google.maps.event.addListener(marker4, "mouseover", function (e) {
				ib4.open(theMap, this);
				ib2.close();
				ib3.close();
				ib.close();
				ib5.close();
				ib6.close();
				ib7.close();
				ib8.close();
				ib9.close();
				ib10.close();
				ib11.close();
				ib12.close();
				ib13.close();
				ib14.close();
				ib15.close();
				ib16.close();
				ib17.close();
				ib18.close();
				ib19.close();
				ib20.close();
			});
			google.maps.event.addListener(marker5, "mouseover", function (e) {
				ib5.open(theMap, this);
				ib2.close();
				ib3.close();
				ib4.close();
				ib.close();
				ib6.close();
				ib7.close();
				ib8.close();
				ib9.close();
				ib10.close();
				ib11.close();
				ib12.close();
				ib13.close();
				ib14.close();
				ib15.close();
				ib16.close();
				ib17.close();
				ib18.close();
				ib19.close();
				ib20.close();
			});
			google.maps.event.addListener(marker6, "mouseover", function (e) {
				ib6.open(theMap, this);
				ib2.close();
				ib3.close();
				ib4.close();
				ib5.close();
				ib.close();
				ib7.close();
				ib8.close();
				ib9.close();
				ib10.close();
				ib11.close();
				ib12.close();
				ib13.close();
				ib14.close();
				ib15.close();
				ib16.close();
				ib17.close();
				ib18.close();
				ib19.close();
				ib20.close();
			});
			google.maps.event.addListener(marker7, "mouseover", function (e) {
				ib7.open(theMap, this);
				ib2.close();
				ib3.close();
				ib4.close();
				ib5.close();
				ib6.close();
				ib.close();
				ib8.close();
				ib9.close();
				ib10.close();
				ib11.close();
				ib12.close();
				ib13.close();
				ib14.close();
				ib15.close();
				ib16.close();
				ib17.close();
				ib18.close();
				ib19.close();
				ib20.close();
			});
			google.maps.event.addListener(marker8, "mouseover", function (e) {
				ib8.open(theMap, this);
				ib2.close();
				ib3.close();
				ib4.close();
				ib5.close();
				ib6.close();
				ib7.close();
				ib.close();
				ib9.close();
				ib10.close();
				ib11.close();
				ib12.close();
				ib13.close();
				ib14.close();
				ib15.close();
				ib16.close();
				ib17.close();
				ib18.close();
				ib19.close();
				ib20.close();
			});
			google.maps.event.addListener(marker9, "mouseover", function (e) {
				ib9.open(theMap, this);
				ib2.close();
				ib3.close();
				ib4.close();
				ib5.close();
				ib6.close();
				ib7.close();
				ib8.close();
				ib.close();
				ib10.close();
				ib11.close();
				ib12.close();
				ib13.close();
				ib14.close();
				ib15.close();
				ib16.close();
				ib17.close();
				ib18.close();
				ib19.close();
				ib20.close();
			});
			google.maps.event.addListener(marker10, "mouseover", function (e) {
				ib10.open(theMap, this);
				ib2.close();
				ib3.close();
				ib4.close();
				ib5.close();
				ib6.close();
				ib7.close();
				ib8.close();
				ib9.close();
				ib.close();
				ib11.close();
				ib12.close();
				ib13.close();
				ib14.close();
				ib15.close();
				ib16.close();
				ib17.close();
				ib18.close();
				ib19.close();
				ib20.close();
			});
			google.maps.event.addListener(marker11, "mouseover", function (e) {
				ib11.open(theMap, this);
				ib2.close();
				ib3.close();
				ib4.close();
				ib5.close();
				ib6.close();
				ib7.close();
				ib8.close();
				ib9.close();
				ib10.close();
				ib.close();
				ib12.close();
				ib13.close();
				ib14.close();
				ib15.close();
				ib16.close();
				ib17.close();
				ib18.close();
				ib19.close();
				ib20.close();
			});
			google.maps.event.addListener(marker12, "mouseover", function (e) {
				ib12.open(theMap, this);
				ib2.close();
				ib3.close();
				ib4.close();
				ib5.close();
				ib6.close();
				ib7.close();
				ib8.close();
				ib9.close();
				ib10.close();
				ib11.close();
				ib.close();
				ib13.close();
				ib14.close();
				ib15.close();
				ib16.close();
				ib17.close();
				ib18.close();
				ib19.close();
				ib20.close();
			});
			google.maps.event.addListener(marker13, "mouseover", function (e) {
				ib13.open(theMap, this);
				ib2.close();
				ib3.close();
				ib4.close();
				ib5.close();
				ib6.close();
				ib7.close();
				ib8.close();
				ib9.close();
				ib10.close();
				ib11.close();
				ib12.close();
				ib.close();
				ib14.close();
				ib15.close();
				ib16.close();
				ib17.close();
				ib18.close();
				ib19.close();
				ib20.close();
			});
			google.maps.event.addListener(marker14, "mouseover", function (e) {
				ib14.open(theMap, this);
				ib2.close();
				ib3.close();
				ib4.close();
				ib5.close();
				ib6.close();
				ib7.close();
				ib8.close();
				ib9.close();
				ib10.close();
				ib11.close();
				ib12.close();
				ib13.close();
				ib.close();
				ib15.close();
				ib16.close();
				ib17.close();
				ib18.close();
				ib19.close();
				ib20.close();
			});
			google.maps.event.addListener(marker15, "mouseover", function (e) {
				ib15.open(theMap, this);
				ib2.close();
				ib3.close();
				ib4.close();
				ib5.close();
				ib6.close();
				ib7.close();
				ib8.close();
				ib9.close();
				ib10.close();
				ib11.close();
				ib12.close();
				ib13.close();
				ib14.close();
				ib.close();
				ib16.close();
				ib17.close();
				ib18.close();
				ib19.close();
				ib20.close();
			});
			google.maps.event.addListener(marker16, "mouseover", function (e) {
				ib16.open(theMap, this);
				ib2.close();
				ib3.close();
				ib4.close();
				ib5.close();
				ib6.close();
				ib7.close();
				ib8.close();
				ib9.close();
				ib10.close();
				ib11.close();
				ib12.close();
				ib13.close();
				ib14.close();
				ib15.close();
				ib.close();
				ib17.close();
				ib18.close();
				ib19.close();
				ib20.close();
			});
			google.maps.event.addListener(marker17, "mouseover", function (e) {
				ib17.open(theMap, this);
				ib2.close();
				ib3.close();
				ib4.close();
				ib5.close();
				ib6.close();
				ib7.close();
				ib8.close();
				ib9.close();
				ib10.close();
				ib11.close();
				ib12.close();
				ib13.close();
				ib14.close();
				ib15.close();
				ib16.close();
				ib.close();
				ib18.close();
				ib19.close();
				ib20.close();
			});
			google.maps.event.addListener(marker18, "mouseover", function (e) {
				ib18.open(theMap, this);
				ib2.close();
				ib3.close();
				ib4.close();
				ib5.close();
				ib6.close();
				ib7.close();
				ib8.close();
				ib9.close();
				ib10.close();
				ib11.close();
				ib12.close();
				ib13.close();
				ib14.close();
				ib15.close();
				ib16.close();
				ib17.close();
				ib.close();
				ib19.close();
				ib20.close();
			});
			google.maps.event.addListener(marker19, "mouseover", function (e) {
				ib19.open(theMap, this);
				ib2.close();
				ib3.close();
				ib4.close();
				ib5.close();
				ib6.close();
				ib7.close();
				ib8.close();
				ib9.close();
				ib10.close();
				ib11.close();
				ib12.close();
				ib13.close();
				ib14.close();
				ib15.close();
				ib16.close();
				ib17.close();
				ib18.close();
				ib.close();
				ib20.close();
			});
			google.maps.event.addListener(marker20, "mouseover", function (e) {
				ib20.open(theMap, this);
				ib2.close();
				ib3.close();
				ib4.close();
				ib5.close();
				ib6.close();
				ib7.close();
				ib8.close();
				ib9.close();
				ib10.close();
				ib11.close();
				ib12.close();
				ib13.close();
				ib14.close();
				ib15.close();
				ib16.close();
				ib17.close();
				ib18.close();
				ib19.close();
				ib.close();
			});
			
			google.maps.event.addListener(ib, "closeclick", function (e) {
				ib.close();
			});
			
			google.maps.event.addDomListener(window, 'resize', function() {
			    theMap.setCenter(secheltLoc);
			});
			
		}
   google.maps.event.addDomListener(window, 'load', initialize);
});