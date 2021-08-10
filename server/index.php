<?php

//    include './db_info.php';

    $host = 'localhost';
    $user = 'root';
    $passwd = '7890uiop';
    $dbName = 'device_manager';
    $conn = mysqli_connect($host,$user,$passwd,$dbName);

    header('Content-Type: application/json; charset=UTF-8');
    header('HTTP/1.1 200 OK');
    header('Access-Control-Allow-Methods:OPTIONS,GET,POST,PUT,DELETE');

    $time = date("Y-m-d HH:MM");

    $uri = parse_url($_SERVER['REQUEST_URI'],PHP_URL_PATH);
    $uri = explode('/',$uri);

    $select_query = "select * from item";
    $result_query = mysqli_query($conn, $select_query);
    while($row = mysqli_fetch_assoc($result_query)){
        echo "id:".$row["id"]." name:".$row["name"]."<br/>";
    }

    mysqli_close($conn);

/*    if($uri[4] !== 'info'){
        header("HTTP/1.1 404 Not Found");
        exit();
    }
*/
//    $requestMethod = $_SERVER['REQUEST_METHOD'];
//
//    switch ($requestMethod){
//        case 'GET':
//            $select_query = "select * from item";
//            $result_query = mysqli_query($conn, $select_query);
//            $result_model = $result_query->fetch_array();
//
//            if($result_model != 0){
//                echo json_encode(array('id'=>$result_model['id'],'name'=>$result_model['name']));
//                return;
//            }
//
//            mysqli_close($conn);
//            break;
//        case 'POST':
//
//    }
?>
