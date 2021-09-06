<?php
    include_once('../db_info.php');
    global $conn;

    $table = $_GET['table'];
    $entry_id = $_GET['entry_id'];
    $asset_num = $_GET['asset_num'];
    $name = $_GET['name'];
    $state = $_GET['state'];
    $position = $_GET['position'];
    $issue_date = $_GET['issue_date'];
    $manager = $_GET['manager'];

    switch ($table){
        case 'office':
            $sql="Insert Into ".$table."_equipment(asset_num, name, state, position, issue_date, manager, item_id) value(".$asset_num.",'$name','$state','$position','$issue_date','$manager',".$entry_id.")";
            $result = mysqli_query($conn,$sql);
            echo json_encode($result);
            break;
        case 'disk':
        case 'lab':

    }

    mysqli_close($conn);
