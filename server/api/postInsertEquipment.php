<?php
    include_once('../db_info.php');
    global $conn;

    $POST=json_decode(file_get_contents('php://input'), true);

    $table = $POST['table'];
    $entry_id = $POST['entry_id'];
    $asset_num = $POST['asset_num'];
    $name = $POST['name'];
    $state = $POST['state'];
    $position = $POST['position'];
    $issue_date = $POST['issue_date'];
    $manager = $POST['manager'];

    $server_name = $POST['server_name'];
    $ip = $POST['ip'];
    $cpu_core = $POST['cpu_core'];
    $disk = $POST['disk'];
    $memory = $POST['memory'];

    $sql='';
    switch ($table){
        case 'office' || 'lab':
            $sql="Insert Into ".$table."_equipment(asset_num, name, state, position, issue_date, manager, item_id) value('$asset_num','$name','$state','$position','$issue_date','$manager',".$entry_id.")";
            break;
        case 'server':
            $sql="Insert Into ".$table."_equipment(server_name, ip, port, cpu_core, disk, memory, manager, item_id) value('$server_name', '$ip', '3030', '$cpu_core', '$disk', '$memory', '$manager', '$entry_id')";
            break;
        case 'lab':

    }

    $result = mysqli_query($conn,$sql);
    echo json_encode($result);

    mysqli_close($conn);
