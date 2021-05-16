<?php
include 'connectDB.php';
$pdo = connectDB();
$query =    'SELECT * FROM FRIENDS
            JOIN USER on USER.ID = FRIENDS.user2
            WHERE FRIENDS.user1 = ?';
$sql = $pdo->prepare($query);
$sql->bindParam(1, $_GET['value1']);

$sql->execute();
$results = $sql->fetchAll(\PDO::FETCH_ASSOC);
echo json_encode($results);

?>