<?php
include 'connectDB.php';
$pdo = connectDB();

$query =    "UPDATE USER
            SET status = ?
            WHERE ID = ?";

$sql = $pdo->prepare($query);

$sql->bindParam(1, $_GET['value1']);

$sql->bindParam(2, $_GET['value2']);

if ($sql->execute()) {
    echo "done";
} else {
    echo "problems with uploading status";
}

?>