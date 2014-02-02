<?php 
header('Access-Control-Allow-Origin: *');

$host="dedi55.cpt4.host-h.net"; // Host name 
$username="wewillrockyou_w"; // Mysql username 
$password="BGprkpV8"; // Mysql password 
$db_name="comfort_lavender"; // Database name 
$tbl_name="Players"; // Table name 

$FB_ID = $_POST["FB_ID"];
$first = $_POST["first"];
$last = $_POST["last"];
$email = $_POST["email"];
$count = 1;

// Connect to server and select database.
$connection = mysql_connect("$host", "$username", "$password") or die(mysql_error()); 

$sql = "SELECT * FROM `comfort_lavender`.`Players` WHERE FB_ID = '$FB_ID'";
$result = mysql_query($sql);

if(mysql_num_rows($result) > 0){
	//found
	mysql_query("UPDATE `comfort_lavender`.`Players` SET first = '$first', last = '$last', email = '$email'  WHERE FB_ID= '$FB_ID'");
	
	$result = mysql_fetch_array(mysql_query($sql));
	echo json_encode($result);
	
}else{
	//not found
	mysql_query("INSERT INTO `comfort_lavender`.`Players` (`FB_ID`, `first`, `last`, `email`, `count`) VALUES ('$FB_ID', '$first', '$last', '$email', '0');") or die(mysql_error());
	echo 0;
};
  


mysql_close();

?>