<?php
    include_once('../db_info.php');
    global $conn;

    $parm = $_GET['parm'];
    $entry_id = $_GET['entry_id'];
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
            $sql = "select * from disk, disk_entry as en where en.disk_entry_id =".$entry_id." and disk.item_id = en.disk_entry_id";
            $result = mysqli_query($conn, $sql);
            $data = array();
            if($result){
                while($row = mysqli_fetch_array($result)){
                    array_push($data,
                            array('disk_id'=>$row[0],
                                    'disk_name'=>$row[1],
                                    'volume'=>$row[2],
                                    'change_date'=>$row[3],
                                    'AS_date'=>$row[4],
                                    'etc'=>$row[5],
                                    'timestamp'=>$row[7],
                                    'item_num'=>$row[8],
                            ));
                }
                echo json_encode($data);
            }else{
                echo mysqli_error($conn);
            }
            break;
        case 'total_count':
            $sql = "select disk_entry_id, entry_name, ifnull(count,0) from disk_entry as en left outer join( select item_id, count(*) as count from disk group by item_id) as eq on en.disk_entry_id = eq.item_id";
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
        case 'count':
            $sql = "select count(*) from disk, disk_entry as en where en.disk_entry_id =".$entry_id." and disk.item_id = en.disk_entry_id";
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
