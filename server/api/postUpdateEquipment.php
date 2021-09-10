<?php
    include_once('../db_info.php');
    global $conn;

    $POST=json_decode(file_get_contents('php://input'), true);

    $table = $POST['table'];
    $entry_id = $POST['entry_id'];
    $asset_num = $POST['asset_num'];
    $column_id = $POST['column_id'];
    $name = $POST['name'];
    $position = $POST['position'];
    $state = $POST['state'];
    $manager = $POST['manager'];
    $issue_date = $POST['issue_date'];

    $server_name = $POST['server_name'];
    $ip = $POST['ip'];
    $cpu_core = $POST['cpu_core'];
    $disk = $POST['disk'];
    $memory = $POST['memory'];

    $sql = '';

    switch ($table){
        case 'office':
            $sql="Update ".$table."_equipment SET asset_num='$asset_num', name='$name', state='$state', position='$position', manager='$manager', issue_date='$issue_date' where ".$table."_id = ".$column_id;
            break;
        case 'server':
            $sql="Update ".$table."_equipment SET server_name='$server_name', ip='$ip', cpu_core='$cpu_core', disk='$disk', memory='$memory' where ".$table."_id = ".$column_id;
        case 'lab':

    }

    $result = mysqli_query($conn,$sql);
    echo json_encode($result);

    mysqli_close($conn);
