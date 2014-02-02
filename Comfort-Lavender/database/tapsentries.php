<?php


header('Access-Control-Allow-Origin: *');

$host="dedi55.cpt4.host-h.net"; // Host name 
$username="wewillrockyou_w"; // Mysql username 
$password="BGprkpV8"; // Mysql password 
$db_name="comfort_lavender"; // Database name 
$tbl_name="Players"; // Table name 

// Connect to server and select database.
$connection = mysql_connect("$host", "$username", "$password") or die(mysql_error());

$sql = "SELECT * FROM `comfort_lavender`.`Players` WHERE total > 4 AND total < 251";
$result = mysql_query($sql);

while($row = mysql_fetch_assoc($result)){
	$entries = $row["total"] / 5;
	$name = $row["first"];
	$surname = $row["last"];
	$email = $row["email"];
	
	for($i = 0; $i <= $entries; $i++){
		$update = "INSERT INTO `comfort_lavender`.`entries` SET name = '$name', surname = '$surname', email = '$email'";
		mysql_query($update);
	}
}

mysql_close();

?>