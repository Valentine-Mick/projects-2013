<?php 
header('Access-Control-Allow-Origin: *');

$host="dedi55.cpt4.host-h.net"; // Host name 
$username="wewillrockyou_w"; // Mysql username 
$password="BGprkpV8"; // Mysql password 

$FB_ID = $_POST["FB_ID"];

// Connect to server and select database.
$connection = mysql_connect("$host", "$username", "$password") or die(mysql_error()); 

$sql = "SELECT total FROM `comfort_lavender`.`Players` WHERE FB_ID = '$FB_ID'";
$result = mysql_fetch_array(mysql_query($sql));
echo $result['total'];

mysql_close();

?>