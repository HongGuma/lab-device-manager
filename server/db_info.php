<?php

    $host = '127.0.0.1';
    $user = 'root';
    $passwd = '7890uiop';
    $dbName = 'device_manager';
    $port = 2306;
//    try{
        $conn = mysqli_connect($host,$user,$passwd,$dbName,$port);

        header('Content-Type: application/json; charset=UTF-8');
        header('HTTP/1.1 200 OK');
        header('Access-Control-Allow-Methods:OPTIONS,GET,POST,PUT,DELETE');

        $time = date("Y-m-d HH:MM");
//    }catch (PDOException $e){
//        echo $e;
//    }
//
