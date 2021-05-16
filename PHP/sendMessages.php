<?php
include 'connectDB.php';
$pdo = connectDB();

$query = "INSERT INTO MESSAGES(receiver,sender,text) VALUES(?,?,?)";

$sql = $pdo->prepare($query);

$sql->bindParam(1, $_GET['value1']);

$sql->bindParam(2, $_GET['value2']);

$sql->bindParam(3, $_GET['value3']);

$sql->execute(); 

?>