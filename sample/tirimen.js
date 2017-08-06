var btn_flg = true;
function miratan_close(){
	if (btn_flg==true){
		document.getElementById("miratan").style.display="none";
		document.getElementById("balloon2").style.display="none";
		btn_flg = false;
	}else{
		document.getElementById("miratan").style.display="block";
		document.getElementById("balloon2").style.display="block";
		btn_flg = true;
	}
}

function getClickLatLng(lat_lng, map) {

	// 座標を表示
	document.getElementById('lat').textContent = lat_lng.lat();
	document.getElementById('lng').textContent = lat_lng.lng();

	// マーカーを設置
	var marker = new google.maps.Marker({
		position: lat_lng,
		map: map
	});

	// 座標の中心をずらす
	// http://syncer.jp/google-maps-javascript-api-matome/map/method/panTo/
	map.panTo(lat_lng);
}

function rootSet(start1, end1){
	var directionDisplay;
	var directionsService = new google.maps.DirectionsService(); // 地図表示用
	var map;
	 
	  directionsDisplay = new google.maps.DirectionsRenderer(); //　ルート案内
	  var myOptions = {
	    mapTypeId: google.maps.MapTypeId.ROADMAP, // 普通の2D表示
	  }
	  map = new google.maps.Map(document.getElementById("map"), myOptions);
	  directionsDisplay.setMap(map);
	  directionsDisplay.setPanel(document.getElementById("route2"));
	 
	  
	  var start = start1;
	  var end = end1;
	  var request = {
	    origin:start, // 出発地
	    destination:end, // 目的地
		//waypoints:[{location:"難波駅"}], //　途中経路
	    travelMode: google.maps.DirectionsTravelMode.DRIVING // 車で
	  };
	  directionsService.route(request, function(response, status) {
	    if (status == google.maps.DirectionsStatus.OK) {
	      directionsDisplay.setDirections(response); // 描画
	    }
	  });
}

