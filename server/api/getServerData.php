<?php
    include_once('../db_info.php');
    global $conn;

    $parm = $_GET['parm'];
    $entry_id = $_GET['entry_id'];
    switch ($parm){
        case '1': //'entry':
            $sql = "select * from server_entry";
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
        case '2': //'equipment':
            $sql = "select * from server_equipment, server_entry as en where en.server_entry_id =".$entry_id." and server_equipment.item_id = en.server_entry_id";
            $result = mysqli_query($conn, $sql);
            $data = array();
            if($result){
                while($row = mysqli_fetch_array($result)){
                    array_push($data,
                        array('server_id'=>$row[0],
                            'server_name'=>$row[1],
                            'ip'=>$row[2],
                            'port'=>$row[3],
                            'cpu_core'=>$row[4],
                            'disk'=>$row[5],
                            'memory'=>$row[7],
                            'manager'=>$row[8],
                            'timestamp'=>$row[9],
                            'item_id'=>$row[10],
                        ));
                }
                echo json_encode($data);
            }else{
                echo mysqli_error($conn);
            }
            break;
        case '3': //'total_count':
            $sql = "select server_entry_id, entry_name, ifnull(count,0) from server_entry as en left outer join( select item_id, count(*) as count from server_equipment group by item_id) as eq on en.server_entry_id = eq.item_id";
            $result = mysqli_query($conn, $sql);
            $data = array();
            if($result){
                while($row = mysqli_fetch_array($result)){
                    array_push($data,
                        array('entry_id'=>$row[0],
                            'entry_name'=>$row[1],
                            'item_count'=>$row[2],
                        ));
                }
                echo json_encode($data);
            }else{
                echo mysqli_error($conn);
            }
            break;
        case '4'://'count':
            $sql = "select count(*) from server_equipment, server_entry as en where en.server_entry_id =".$entry_id." and server_equipment.item_id = en.server_entry_id";
            $result = mysqli_query($conn, $sql);
            $data = '';
            if($result){
                while($row = mysqli_fetch_array($result)){
                    $data = $row[0];
                }
                echo $data;
            }else{
                echo mysqli_error($conn);
            }
            break;

    }
    mysqli_close($conn);
