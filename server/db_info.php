<?php

    $host = 'localhost';
    $user = 'kogic';
    $pw = '7890uiop';
    $dbName = 'device_manager';

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Max-Age: 86400");
    header("Access-Control-Allow-Headers: X-PINGOTHER, Content-Type");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

    $conn = mysqli_connect($host, $user, $pw, $dbName);

?>
