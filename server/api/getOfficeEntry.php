<?php
    include_once('../db_info.php');

    global $conn;

    $sql = "select * from office_entry";
    $result = mysqli_query($conn, $sql);
    $data = array();
    if($result){
        while($row = mysqli_fetch_array($result)){
            array_push($data,
                array('ofiice_id'=>$row[0],
                    'name'=>$row[1],
                    'user'=>$row[2],
                    'position'=>$row[3],
                    'quality'=>$row[4],
                    'state'=>$row[5],
                    'manager'=>$row[6],
                    'timestampe'=>$row[7],
                    'item_num'=>$row[8],
                ));
        }
        echo json_encode($data);
    }else{
        echo mysqli_error($conn);
    }

    mysqli_close($conn);