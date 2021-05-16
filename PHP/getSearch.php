<?php

include 'connectDB.php';
$pdo = connectDB();

    $query = 'SELECT * FROM USER WHERE namn = ?';
    $sql = $pdo->prepare($query);
    $sql->bindParam(1, $_GET['theInput']);
$sql->execute();
$results = $sql->fetchAll(\PDO::FETCH_ASSOC);
echo json_encode($results);

?>

