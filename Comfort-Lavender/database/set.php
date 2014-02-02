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
	$update = "UPDATE `comfort_lavender`.`Players` SET count = count+1, total = total+1, first = '$first', last = '$last', email = '$email', time_stamp = '$timeStamp'  WHERE FB_ID= '$FB_ID'";
	$win = mysql_fetch_array(mysql_query("SELECT win FROM `comfort_lavender`.`Players` WHERE `FB_ID` = '$FB_ID'"));
		
		//if win is 0
		if($win['win'] == 0){
			switch (($count['count']+1))
			{
				case 1:
					mysql_query($update);
					echo "win1";
					break;
				case 2:
					mysql_query($update);
					echo "win2";
					break;
				case 3:
					mysql_query($update);
					mysql_query("UPDATE `comfort_lavender`.`Players` SET win = 1 WHERE FB_ID= '$FB_ID'");
					mysql_query("UPDATE `comfort_lavender`.`Players` SET count = count+1 WHERE FB_ID= '1'"); //tally amount of netflorist vouchers
					echo "win3";
					break;
				case 4:
					mysql_query($update);
					echo "win4";
					break;
				case 5:
					mysql_query($update);
					echo "6";
					break;
				case 6:
					echo "finished";
					break;
				
			}
		//if win is 1
		}else if($win['win'] == 1){
			switch($count['count']+1)
			{
				case 1:
					mysql_query($update);
					echo "1";
					break;
				case 2:
					mysql_query($update);
					echo "2";
					break;
				case 3:
					mysql_query($update);
					echo "3";
					break;
				case 4:
					mysql_query($update);
					echo "win4";
					break;
				case 5:
				
					function winmovie(){
						global $update;
						global $FB_ID;
						mysql_query($update);
						mysql_query("UPDATE `comfort_lavender`.`Players` SET total = total+1 WHERE FB_ID= '1'");
						mysql_query("UPDATE `comfort_lavender`.`Players` SET prize = 1 WHERE FB_ID= '$FB_ID'");
						mysql_query("UPDATE `comfort_lavender`.`Players` SET win = 2 WHERE FB_ID= '$FB_ID'");
						echo "movie";
					}
					
					function winbook(){
						global $update;
						global $FB_ID;
						mysql_query($update);
						mysql_query("UPDATE `comfort_lavender`.`Players` SET win = win+1 WHERE FB_ID= '1'");
						mysql_query("UPDATE `comfort_lavender`.`Players` SET prize = 2 WHERE FB_ID= '$FB_ID'");
						mysql_query("UPDATE `comfort_lavender`.`Players` SET win = 2 WHERE FB_ID= '$FB_ID'"); 
						echo "books";
					}
					
					$movie = mysql_fetch_array(mysql_query("SELECT total FROM `comfort_lavender`.`Players` WHERE `FB_ID` = '1'"));//get amount of movie tickets given
					$books = mysql_fetch_array(mysql_query("SELECT win FROM `comfort_lavender`.`Players` WHERE `FB_ID` = '1'"));//get amount of book vouchers given
					
					if($movie['total'] < 1700){
						winmovie();
					}else if($books['win'] < 1000){
						if($books['win'] == $movie['total']){
							winbook();
						}else if($books['win'] > $movie['total']){
							winmovie();
						}else if($books['win'] < $movie['total']){
							winbook();
						}
					}else{
						mysql_query($update);
						mysql_query("UPDATE `comfort_lavender`.`Players` SET win = 3 WHERE FB_ID= '$FB_ID'"); 
						echo "6";
					}
					
					break;
				case 6:
					echo "finished";
					break;
			}
		//if win more than 2 - no winnings left for them
		}else if($win['win'] >= 2){
			if($count['count'] == 5){
				echo "finished";
			}else{
				mysql_query($update);
				echo ($count['count'] + 1);
			}
			
		}
}else{
	//not found
	mysql_query("INSERT INTO `comfort_lavender`.`Players` (`FB_ID`, `first`, `last`, `email`, `count`, `total`) VALUES ('$FB_ID', '$first', '$last', '$email', '1', '1');") or die(mysql_error());
	echo "win1";
};
 

mysql_close();

?>
