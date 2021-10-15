<?php

    include_once('../db_info.php');
    global $conn;

    $id = $_GET['id'];

    $sql = "SELECT user_id, user_name, belong, authority from admin where user_id= '$id'";
    $result = mysqli_query($conn, $sql);
    $arr = array();
    while ($row = mysqli_fetch_array($result)) {
        array_push($arr,
            array('id' => $row[0],
                'name' => $row[1],
                'belong' => $row[2],
                'authority' => $row[3]));
    }
    echo json_encode($arr);

    mysqli_close($conn);