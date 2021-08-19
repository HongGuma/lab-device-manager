<?php
    include_once('../db_info.php');
    global $conn;

    $parm = $_GET['parm'];

    switch ($parm){
        case 'entry':
            $sql = "select * from disk_entry";
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
        case 'equipment':
            $sql = "select * from disk";
            $result = mysqli_query($conn, $sql);
            $data = array();
            if($result){
                while($row = mysqli_fetch_array($result)){
                    array_push($data,
                        array('id'=>$row[0],
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
            break;
        case 'count':
            $sql = "select count(*) from disk";
            $result = mysqli_query($conn, $sql);
            $data = array();
            if($result){
                while($row = mysqli_fetch_array($result)){
                    array_push($data,
                        array('num'=>$row[0]));
                }
                echo json_encode($data);
            }else{
                echo mysqli_error($conn);
            }

    }
    mysqli_close($conn);
