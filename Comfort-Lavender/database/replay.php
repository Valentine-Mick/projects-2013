<?php
header('Access-Control-Allow-Origin: *');
$host="dedi55.cpt4.host-h.net";
$username="wewillrockyou_w"; 
$password="BGprkpV8";

$FB_ID = $_POST["FB_ID"];

$connection = mysql_connect("$host", "$username", "$password") or die(mysql_error());

mysql_query("UPDATE `comfort_lavender`.`Players` SET count = 0 WHERE FB_ID= '$FB_ID'");

echo 0;

mysql_close();

?>
