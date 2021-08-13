<?php
    include_once('../db_info.php');

    global $conn;

    $sql = "select * from office_entry";
    $result = mysqli_query($conn, $sql);
    $data = array();
    if($result){
        while($row = mysqli_fetch_array($result)){
            array_push($data,
                array('id'=>$row[0],
                    'name'=>$row[1]));
        }
        echo json_encode($data);
    }else{
        echo mysqli_error($conn);
    }
    mysqli_close($conn);
