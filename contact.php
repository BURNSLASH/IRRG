<?php
$conn = new mysqli("localhost", "root", "", "irrg");
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$sql = "INSERT INTO contacts (name, email, message) VALUES ('$name', '$email', '$message')";
$conn->query($sql);
echo "Message sent successfully!";
$conn->close();
?>
