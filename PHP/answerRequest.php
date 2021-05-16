<?php
include 'connectDB.php';
$pdo = connectDB();

echo $_GET['value2'].", ". $_GET['value1'];

$query =    "UPDATE FRIENDS
            SET accepted = 1
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


<!--kom ihåg att man inte kan binda en siffra. måste vara en variabel isåfall om det inte är $_GET['value1']-->