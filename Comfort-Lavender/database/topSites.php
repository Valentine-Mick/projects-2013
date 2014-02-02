<?php
header('Access-Control-Allow-Origin: *');

$host="dedi55.cpt4.host-h.net"; // Host name 
$username="wewillrockyou_w"; // Mysql username 
$password="BGprkpV8"; // Mysql password 
$db_name="comfort_lavender"; // Database name 
$tbl_name="Players"; // Table name 

// Connect to server and select database.
$connection = mysql_connect("$host", "$username", "$password") or die(mysql_error());

$sql = "SELECT * FROM `comfort_lavender`.`websites` WHERE visits > 100 ORDER BY visits DESC";
$result = mysql_query($sql); 

$num=mysql_numrows($result);

?>


<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
</head>
<body>
	<table>
	<?php
		print "<table width=400 border=1>\n"; 
		while ($get_info = mysql_fetch_row($result)){ 
			print "<tr>\n"; 
			foreach ($get_info as $field) 
			print "\t<td><font face=arial size=2/>$field</font></td>\n"; 
			print "</tr>\n"; 
		} 
		print "</table>\n";
		
		mysql_close();
	?>
	</table>
</body>
</html>