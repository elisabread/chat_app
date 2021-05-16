<?php
include 'connectDB.php';
$pdo = connectDB();

$query =    "UPDATE FRIENDS
            SET accepted = 0
            WHERE user1 = ? AND user2 = ?";

$sql = $pdo->prepare($query);

$sql->bindParam(1, $_GET['value1']);
$sql->bindParam(2, $_GET['value2']);
"UPDATE FRIENDS
            SET accepted = 1
            WHERE user1 = ? AND user2 = ?";

$sql->execute(); 

?>