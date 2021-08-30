<?php
    include_once('../db_info.php');
    global $conn;

    $table = $_GET['table'];
    $entry_id = $_GET['entry_id'];
    $name = $_GET['name'];
    $user = $_GET['user'];
    $position = $_GET['position'];
    $quality = $_GET['quality'];
    $state = $_GET['state'];
    $manager = $_GET['manager'];

    switch ($table){
        case 'office':
            $sql="Insert Into ".$table."_equipment(name, user, position, quality, state, manager, item_id) value('$name','$user','$position','$quality','$state','$manager',".$entry_id.")";
            $result = mysqli_query($conn,$sql);
            echo json_encode($result);
            break;
        case 'disk':
        case 'lab':

    }

    mysqli_close($conn);
