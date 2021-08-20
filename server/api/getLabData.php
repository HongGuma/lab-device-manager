<?php
    include_once('../db_info.php');
    global $conn;

    $parm = $_GET['parm'];
    $entry_id = $_GET['entry_id'];
    $equip_id = $_GET['equip_id'];
    switch ($parm){
        case 'entry':
            $sql = "select * from lab_entry";
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
            $sql = "select * from lab_equipment as eq, lab_entry as en where eq.item_id = en.lab_entry_id and en.lab_entry_id = ".$entry_id;
            $result = mysqli_query($conn, $sql);
            $data = array();
            if($result){
                while($row = mysqli_fetch_array($result)){
                    array_push($data,
                        array('lab_id'=>$row[0],
                            'lab_name'=>$row[1],
                            'manager'=>$row[2],
                            'item_id'=>$row[3],
                            'timestamp'=>$row[7],
                        ));
                }
                echo json_encode($data);
            }else{
                echo mysqli_error($conn);
            }
            break;
        case 'logbook':
            $sql = "select * from lab_equipment as eq, lab_logbook as lo where eq.lab_equipment_id = lo.equipment_id and lo.equipment_id = ".$equip_id;
            $result = mysqli_query($conn, $sql);
            $data = array();
            if($result){
                while($row = mysqli_fetch_array($result)){
                    array_push($data,
                        array('logbook_id'=>$row[0],
                            'name'=>$row[1],
                            'borrow_date'=>$row[2],
                            'borrow_time'=>$row[3],
                            'usage_time'=>$row[4],
                            'supervisor'=>$row[5],
                            'booking'=>$row[7],
                            'problem_status'=>$row[8],
                            'equipment_id'=>$row[9],
                            'timestamp'=>$row[10],
                        ));
                }
                echo json_encode($data);
            }else{
                echo mysqli_error($conn);
            }
            break;
        case 'count':
            $sql = "select count(*) lab_equipment as eq, lab_entry as en where eq.item_id = en.lab_entry_id and en.lab_entry_id = ".$entry_id;
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

    }
    mysqli_close($conn);
