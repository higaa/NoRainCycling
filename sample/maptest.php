<!DOCTYPE html>
<html lang="ja">
<head>
<title>自転車チーム</title>
<meta charset="UTF-8">
<meta name="viewport" content="initial-scale=1.0, user-scalable=no">
<script type="text/javascript" src="./tirimen.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAxPIGCfKCtCTd0To4lDOVqo8sMyu9Jpu4"></script>
<link rel="stylesheet" type="text/css" href="maptest.css">
<meta charset="utf-8">
  <style>

  </style>
</head>

<script>
    function initMap() {

    	// マップの初期化
      	var map = new google.maps.Map(document.getElementById('map'), {
        	zoom: 14,
       		center: {lat: 36.812, lng: 137.396}
     	});

	    /*
		// クリックイベントを追加
	    map.addListener('click', function(e) {
	    	getClickLatLng(e.latLng, map);
	    });
		*/

		rootSet("滑川駅","魚津駅");
    }
</script>


<body onload="initMap()">
	<div id="map"></div>
	<ul>
		<li>lat: <span id="lat"></span></li>
		<li>lng: <span id="lng"></span></li>
	</ul>
  	

	<div id="message">
		

		<div id="balloon2">
	  		（´・ω・）
		</div>

		<img src="./miratan.png" id="miratan"/>
		<input type="image" id="close" onClick="miratan_close()" src="./close_btn.png"/>
	</div>
  
</body>
</html>


