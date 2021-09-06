<?php
    include_once('../db_info.php');
    global $conn;

    $table = $_GET['table'];
    $entry_id = $_GET['entry_id'];
    $asset_num = $_GET['asset_num'];
    $column_id = $_GET['column_id'];
    $name = $_GET['name'];
    $position = $_GET['position'];
    $state = $_GET['state'];
    $manager = $_GET['manager'];
    $issue_date = $_GET['issue_date'];

    switch ($table){
        case 'office':
            $sql="Update ".$table."_equipment SET asset_num=".$asset_num.", name='$name', state='$state', position='$position', manager='$manager', issue_date='$issue_date' where ".$table."_id = ".$column_id;
            $result = mysqli_query($conn,$sql);
            echo json_encode($result);
            break;
        case 'disk':
        case 'lab':

    }

    mysqli_close($conn);
