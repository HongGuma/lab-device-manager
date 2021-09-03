<?php
    include_once('../db_info.php');
    global $conn;

    $table = $_GET['table'];
    $entry_id = $_GET['entry_id'];
    $column_id = $_GET['column_id'];
    $name = $_GET['name'];
    $user = $_GET['user'];
    $position = $_GET['position'];
    $quality = $_GET['quality'];
    $state = $_GET['state'];
    $manager = $_GET['manager'];

    switch ($table){
        case 'office':
            $sql="Update ".$table."_equipment SET name='$name', user='$user', position='$position', quality='$quality', state='$state', manager='$manager', item_id='$entry_id' where ".$table."_id = ".$column_id;
            $result = mysqli_query($conn,$sql);
            echo json_encode($result);
            break;
        case 'disk':
        case 'lab':

    }

    mysqli_close($conn);
