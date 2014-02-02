<?php
header('Access-Control-Allow-Origin: *');

$host="dedi55.cpt4.host-h.net"; // Host name 
$username="wewillrockyou_w"; // Mysql username 
$password="BGprkpV8"; // Mysql password 
$db_name="comfort_lavender"; // Database name 
$tbl_name="Players"; // Table name 

// Connect to server and select database.
$connection = mysql_connect("$host", "$username", "$password") or die(mysql_error());

$sql = "SELECT * FROM `comfort_lavender`.`Players` WHERE first IS NOT NULL";
$result = mysql_query($sql); 


?>


<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
</head>

<body style="margin-left: auto; font-size: 400px;">
	<?php
		echo mysql_num_rows($result);
		mysql_close();
	?>
	<div style="margin-left: auto; font-size: 50px;">people playing</div>
</body>
</html>