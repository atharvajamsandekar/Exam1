<?php
session_start();

$_SESSION["name"] = "Atharva";

echo "Session created<br>";
echo "Name: " . $_SESSION["name"];
?>

<br><br>
<a href="delete_session.php">Delete Session</a>