<html><head></head><body>
	
</body></html>
<?php
$city = $_GET["city"];
$file = fopen("temp.txt", "w");
fwrite($file, $city);
fclose($file);
echo system("python3 web_wf.py < temp.txt");
?>