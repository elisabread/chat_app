<?php
include 'connectDB.php';
$pdo = connectDB();

$query =    'SELECT * FROM FRIENDS
            JOIN USER ON user2 = USER.ID
            WHERE user1= ?';
$sql = $pdo->prepare($query);
$sql->bindParam(1, $_GET['value1']);
$sql->execute();
$resultsSender = $sql->fetchAll(\PDO::FETCH_ASSOC);

$query =    'SELECT * FROM FRIENDS
            JOIN USER ON user1 = USER.ID
            WHERE user2= ?';
$sql = $pdo->prepare($query);
$sql->bindParam(1, $_GET['value1']);
$sql->execute();
$resultsReceiver = $sql->fetchAll(\PDO::FETCH_ASSOC);

$results = array_merge($resultsSender, $resultsReceiver);
echo json_encode($results);

?>
