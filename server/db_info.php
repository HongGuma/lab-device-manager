<?php

    $host = 'localhost';
    $user = 'root';
    $pw = '7890uiop';
    $dbName = 'device_manager';

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Max-Age: 86400");
    header("Access-Control-Allow-Headers: x-requested-with");

    $conn = mysqli_connect($host, $user, $pw, $dbName);

?>
