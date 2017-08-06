var btn_flg = true;
var directionDisplay;

function miratanClose(){
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

function rootSet(map, start, end){
	//var directionDisplay;
	var directionsService = new google.maps.DirectionsService(); // 地図表示用
	 
	directionsDisplay = new google.maps.DirectionsRenderer(); //　ルート案内

	directionsDisplay.setMap(map);
	directionsDisplay.setPanel(document.getElementById("route2"));
	
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

function rootClear(){
	alert("push");
}

