<?php 
header('Access-Control-Allow-Origin: *');

$host="dedi55.cpt4.host-h.net"; // Host name 
$username="wewillrockyou_w"; // Mysql username 
$password="BGprkpV8"; // Mysql password 

$domain = $_POST["domain"];

// Connect to server and select database.
$connection = mysql_connect("$host", "$username", "$password") or die(mysql_error()); 

$sql = "SELECT * FROM `comfort_lavender`.`websites` WHERE website = '$domain'";
$result = mysql_query($sql);

if(mysql_num_rows($result) > 0){
	mysql_query("UPDATE `comfort_lavender`.`websites` SET visits = visits+1 WHERE website= '$domain'");
}else{
	//not found
	mysql_query("INSERT INTO `comfort_lavender`.`websites` (`website`, `visits`) VALUES ('$domain', '1');") or die(mysql_error());
};


mysql_close();

?>