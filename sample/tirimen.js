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

	// ���W��\��
	document.getElementById('lat').textContent = lat_lng.lat();
	document.getElementById('lng').textContent = lat_lng.lng();

	// �}�[�J�[��ݒu
	var marker = new google.maps.Marker({
		position: lat_lng,
		map: map
	});

	// ���W�̒��S�����炷
	// http://syncer.jp/google-maps-javascript-api-matome/map/method/panTo/
	map.panTo(lat_lng);
}

function rootSet(map, start, end){
	//var directionDisplay;
	var directionsService = new google.maps.DirectionsService(); // �n�}�\���p
	 
	directionsDisplay = new google.maps.DirectionsRenderer(); //�@���[�g�ē�

	directionsDisplay.setMap(map);
	directionsDisplay.setPanel(document.getElementById("route2"));
	
	var request = {
		origin:start, // �o���n
	    destination:end, // �ړI�n
		//waypoints:[{location:"��g�w"}], //�@�r���o�H
	    travelMode: google.maps.DirectionsTravelMode.DRIVING // �Ԃ�
	};
	directionsService.route(request, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
	    	directionsDisplay.setDirections(response); // �`��
	    }
	});
}

function rootClear(){
	alert("push");
}

