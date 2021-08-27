<?php
    include_once('../db_info.php');
    global $conn;

    $table = $_GET['table'];
    $entry_name = $_GET['entry_name'];

    $sql="Insert Into ".$table."_entry(entry_name) value('$entry_name')";
    $result = mysqli_query($conn,$sql);

    echo json_encode($result);

    mysqli_close($conn);
