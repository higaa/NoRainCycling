<?php
$lat = 36.828384;
$lon = 137.416309;
//$url = 'http://api.openweathermap.org/data/2.5/weather?q=Hachioji,jp&APPID=1ce18d0717b975d97c7211b2660250a7';
$url = 'http://api.openweathermap.org/data/2.5/weather?lat='.$lat.'&lon='.$lon.'&APPID=1ce18d0717b975d97c7211b2660250a7';
$weather = json_decode(file_get_contents($url), true);

//weather[0];
echo sprintf($weather['weather'][0]['main']);
echo "<br />";
echo sprintf($weather['name']);
echo "<br />";
//echo sprintf($weather[eweatherf][0][eiconf]);
/*
echo "<pre>";
var_dump($weather);
echo "</pre>";
*/

