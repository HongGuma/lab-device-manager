<?php

    $host = 'localhost';
    $user = 'root';
    $pw = '7890uiop';
    $dbName = 'device_manager';

    header("Access-Control-Allow-Origin: *");

    $conn = mysqli_connect($host, $user, $pw, $dbName);

?>
