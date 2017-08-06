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

function rootSet(start1, end1){
	var directionDisplay;
	var directionsService = new google.maps.DirectionsService(); // �n�}�\���p
	var map;
	 
	  directionsDisplay = new google.maps.DirectionsRenderer(); //�@���[�g�ē�
	  var myOptions = {
	    mapTypeId: google.maps.MapTypeId.ROADMAP, // ���ʂ�2D�\��
	  }
	  map = new google.maps.Map(document.getElementById("map"), myOptions);
	  directionsDisplay.setMap(map);
	  directionsDisplay.setPanel(document.getElementById("route2"));
	 
	  
	  var start = start1;
	  var end = end1;
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

