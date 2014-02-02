<?php
header('Access-Control-Allow-Origin: *');

$host="dedi55.cpt4.host-h.net"; // Host name 
$username="wewillrockyou_w"; // Mysql username 
$password="BGprkpV8"; // Mysql password 

// Connect to server and select database.
$connection = mysql_connect("$host", "$username", "$password") or die(mysql_error()); 

$sql = "SELECT FB_ID FROM `comfort_lavender`.`Players` WHERE loveRecieved = '1' OR count = '5'";
$result =mysql_query($sql);


$rows = array();
while($r = mysql_fetch_assoc($result)) {
    $rows[] = $r['FB_ID'];
}
    
echo json_encode($rows);

mysql_close();
?>