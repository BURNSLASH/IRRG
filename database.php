<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "irrg";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$email = $_POST['email'];
$interest = $_POST['interest'];

$sql = "INSERT INTO volunteers (name, email, interest) VALUES ('$name', '$email', '$interest')";

if ($conn->query($sql) === TRUE) {
  echo "Registration successful!";
} else {
  echo "Error: " . $conn->error;
}

$conn->close();
?>
