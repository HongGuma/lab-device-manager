<?php
    include_once('../db_info.php');
    global $conn;

    $parm = $_GET['parm'];

    switch ($parm){
        case 'entry':
            $sql = "select * from sample_entry";
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
            break;
        default:
            echo '비어있음';

    }
    mysqli_close($conn);
