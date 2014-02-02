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
$friend = $_POST["friend"];

// Connect to server and select database.
$connection = mysql_connect("$host", "$username", "$password") or die(mysql_error()); 

$sql_result = mysql_query("SELECT FB_ID FROM `comfort_lavender`.`Players` WHERE FB_ID =  '$friend'");

if(is_resource($sql_result) && mysql_num_rows($sql_result) > 0 ){
    $love = mysql_query("SELECT loveRecieved FROM `comfort_lavender`.`Players` WHERE FB_ID = '$friend'");
	$love = $love['loveRecieved'];
	if($love == 0){
		mysql_query("UPDATE `comfort_lavender`.`Players` SET `count` = `count`+1, `total` = `total`+1, `loveRecieved` = 1 WHERE FB_ID= '$friend'");
		mysql_query("UPDATE `comfort_lavender`.`Players` SET `love_sent` = `love_sent`+1 WHERE FB_ID= '$FB_ID'");
	};
}
else{
    mysql_query("INSERT INTO `comfort_lavender`.`Players` (`FB_ID`, `count`, `total`, `loveRecieved`) VALUES ($friend, 1, 1, 1);") or die(mysql_error());
    mysql_query("UPDATE `comfort_lavender`.`Players` SET `love_sent` = `love_sent`+1 WHERE FB_ID= '$FB_ID'");
};



mysql_close();

?>