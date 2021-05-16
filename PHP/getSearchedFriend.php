<?php
include 'connectDB.php';
$pdo = connectDB();

$query =    'SELECT * FROM FRIENDS
            WHERE user1= ? AND user2= ?';
$sql = $pdo->prepare($query);
$sql->bindParam(1, $_GET['value1']);
$sql->bindParam(2, $_GET['value2']);
$sql->execute();
$resultsSender = $sql->fetchAll(\PDO::FETCH_ASSOC);

$query =    'SELECT * FROM FRIENDS
            WHERE user1= ? AND user2=?';
$sql = $pdo->prepare($query);
$sql->bindParam(1, $_GET['value2']);
$sql->bindParam(2, $_GET['value1']);
$sql->execute();
$resultsReceiver = $sql->fetchAll(\PDO::FETCH_ASSOC);

$results = array_merge($resultsSender, $resultsReceiver);
echo json_encode($results);

?>
