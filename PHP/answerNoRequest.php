<?php
include 'connectDB.php';
$pdo = connectDB();

$query =    "UPDATE FRIENDS
            SET accepted = 0
            WHERE user1 = ? AND user2 = ?";

$sql = $pdo->prepare($query);

$sql->bindParam(1, $_GET['value2']);

$sql->bindParam(2, $_GET['value1']);

if ($sql->execute()) {
    echo "done";
} else {
    echo "problems";
}

?>