<?php
$conn = new mysqli("localhost", "root", "", "irrg");
$name = $_POST['name'];
$email = $_POST['email'];
$interest = $_POST['interest'];

$sql = "INSERT INTO volunteers (name, email, interest) VALUES ('$name', '$email', '$interest')";
$conn->query($sql);
echo "Registration successful!";
$conn->close();
?>
