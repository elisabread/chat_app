<?php
include 'connectDB.php';
$pdo = connectDB();

$query = "INSERT INTO FRIENDS(user1,user2) VALUES(?,?)";

$sql = $pdo->prepare($query);

$sql->bindParam(1, $_GET['value1']);

$sql->bindParam(2, $_GET['value2']);

$sql->execute(); 

?>