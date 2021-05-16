<?php
include 'connectDB.php';
$pdo = connectDB();

$query =    'SELECT * FROM MESSAGES
            JOIN USER ON sender = USER.ID
            WHERE receiver= ?';
$sql = $pdo->prepare($query);
$sql->bindParam(1, $_GET['value1']);
$sql->execute();
$resultsSender = $sql->fetchAll(\PDO::FETCH_ASSOC);
//var_dump($resultsSender);

$query =    'SELECT * FROM FRIENDS
            JOIN USER ON receiver = USER.ID
            WHERE receiver= ?';
$sql = $pdo->prepare($query);
$sql->bindParam(1, $_GET['value2']);
$sql->execute();
$resultsReceiver = $sql->fetchAll(\PDO::FETCH_ASSOC);

$results = array_merge($resultsSender, $resultsReceiver);
echo json_encode($results);

?>
