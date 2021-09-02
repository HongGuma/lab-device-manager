<?php
    include_once('../db_info.php');
    global $conn;

    $id=$_POST['id'];
    $pw=$_POST['pw'];
    $outcome = -1;

    $sql = "SELECT count(user_id) from admin where user_id = '$id' and password = SHA1('$pw')";
    $result = mysqli_query($conn,$sql);
    $data = '';
    if($result){
        $row = mysqli_fetch_array($result);
        $data = $row[0];
        if($data!=null && $data>0){
            $outcome = "0";
        }else
            $outcome = "1";
    }else{
        $outcome = "-1";
    }
    echo $outcome;
    mysqli_error($conn);

