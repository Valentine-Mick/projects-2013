<?php
header('Access-Control-Allow-Origin: *');
$host="dedi55.cpt4.host-h.net"; // Host name 
$username="wewillrockyou_w"; // Mysql username 
$password="BGprkpV8"; // Mysql password 
$db_name="comfort_lavender"; // Database name 
$tbl_name="Players"; // Table name 

$FB_ID = $_POST["FB_ID"];

// Connect to server and select database.
$connection = mysql_connect("$host", "$username", "$password") or die(mysql_error()); 

$sql = "SELECT * FROM `comfort_lavender`.`Players` WHERE FB_ID = '$FB_ID'";
$result = mysql_query($sql);

if(mysql_num_rows($result) > 0){
	//found
	$score = mysql_query("SELECT time_stamp FROM `comfort_lavender`.`Players` WHERE `FB_ID` = '$FB_ID'");
	$got = mysql_fetch_array( $score ); 
	echo $got['time_stamp'];
}else{
	//not found
	echo null;
};
  


mysql_close();

?>