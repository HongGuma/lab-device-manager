<?php
    include_once('../db_info.php');
    global $conn;

    $table = $_GET['table'];
    $item_id = $_GET['item_id'];

    $sql="DELETE FROM ".$table."_equipment WHERE ".$table."_id=".$item_id;
    $result = mysqli_query($conn,$sql);

    echo json_encode($result);

    mysqli_close($conn);
