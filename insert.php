<?php
$conn = mysqli_connect("localhost", "root", "", "student_db");

if (!$conn) {
    die("Connection failed");
}

$sql = "INSERT INTO students (name, age) VALUES ('Atharva', 18)";

if (mysqli_query($conn, $sql)) {
    echo "Data inserted successfully";
} else {
    echo "Error";
}

mysqli_close($conn);
?>