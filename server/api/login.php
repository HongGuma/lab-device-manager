<?php
    include_once('../db_info.php');
    global $conn;

    $id=$_GET['id'];
    $pw=$_GET['pw'];
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

    switch ($outcome){
        case "0":
            $sql2 = "SELECt user_id, user_name, belong, authority from admin where user_id= '$id'";
            $result2 = mysqli_query($conn,$sql2);
            $arr = array();
            while ($row = mysqli_fetch_array($result2)){
                array_push($arr,
                    array('id'=>$row[0],
                        'name'=>$row[1],
                        'belong'=>$row[2],
                        'autority'=>$row[3]));
            }
            echo json_encode($arr);
            break;
        case "1":
            echo '아이디 또는 비밀번호가 일치하지 않습니다.'; break;
        case "-1":
            echo '(db connect error) 관리자에게 문의하세요.'; break;
        default:
            echo '(error) 관리자에게 문의하세요.'; break;
    }


    mysqli_error($conn);

