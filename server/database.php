<?php

    $host = 'localhost';
    $user = 'root';
    $passwd = '7890uiop';
    $dbName = 'device_manager';

    header('Content-Type: application/json; charset=UTF-8');
    header('Access-Control-Allow-Methods:*');

    try{
        $conn = mysqli_connect($host,$user,$passwd,$dbName,2306);
        $sql = "SELECT * FROM item";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_array($result);

        $list_array = array("id" =>$row['id'],
            "name" =>$row['name']);

        $result_array = json_encode($list_array);

        echo $result_array;
    }catch (PDOException $e){
        echo $e;
    }

