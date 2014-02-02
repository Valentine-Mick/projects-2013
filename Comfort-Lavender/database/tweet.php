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
$timeStamp = $_POST["timeStamp"];
$replay = $_POST["replay"];

// Connect to server and select database.
$connection = mysql_connect("$host", "$username", "$password") or die(mysql_error());

$sql = "SELECT * FROM `comfort_lavender`.`Players` WHERE FB_ID = '$FB_ID'";
$result = mysql_query($sql);

if($replay == "true"){
	mysql_query("UPDATE `comfort_lavender`.`Players` SET count = 0 WHERE FB_ID= '$FB_ID'");
}



if(mysql_num_rows($result) > 0){
	
	
	//found
	$count = mysql_fetch_array(mysql_query("SELECT count FROM `comfort_lavender`.`Players` WHERE `FB_ID` = '$FB_ID'"));
	$update = "UPDATE `comfort_lavender`.`Players` SET count = count+1, total = total+1, first = '$first', last = '$last', email = '$email', tweets = tweets+1  WHERE FB_ID= '$FB_ID'";
		
	if($count['count']+1 < 6){
		mysql_query($update);
}


}else{
	//not found
	mysql_query("INSERT INTO `comfort_lavender`.`Players` (`FB_ID`, `first`, `last`, `email`, `count`, `total`, `tweets`) VALUES ('$FB_ID', '$first', '$last', '$email', '1', '1', '1');") or die(mysql_error());
	echo "win1";
};
 

mysql_close();

?>
