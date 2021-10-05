<?php
    $host = 'localhost';
    $user = 'kogic';
    $pw = '7890uiop';
    $dbName = '10kG_organization';

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Max-Age: 86400");
    header("Access-Control-Allow-Headers: X-PINGOTHER, Content-Type");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

    $conn = mysqli_connect($host, $user, $pw, $dbName);

    $parm = $_GET['parm'];

    switch ($parm){
        case 'consent':
            $sql = "select * from 10kG_consent";
            $result = mysqli_query($conn,$sql);
            $data = array();
            if($result){
                while ($row = mysqli_fetch_array($result)){
                    array_push($data,
                    array('id'=>$row[0],
                        'unique_num'=>$row[1],
                        'false_nm'=>$row[2],
                        'parti_date'=>$row[3],
                        'sex'=>$row[4],
                        'age'=>$row[5],
                        'cancel_date'=>$row[6],
                        'sortation'=>$row[7],
                        'secondary_use'=>$row[8],
                        'etc'=>$row[9],
                        'type_quantity'=>$row[10],
                        'shelf_live'=>$row[11],
                        'secondary_offer'=>$row[12],
                        'secondary_id_info'=>$row[13],
                        'report'=>$row[14],
                        'report_id'=>$row[15],
                        'request_update'=>$row[16],
                        'disease_name'=>$row[17],
                        'disease_code_KR'=>$row[18],
                        'disease_code_EN'=>$row[19],
                        'pregnancy_week'=>$row[20],
                        'family_code'=>$row[21],
                        'disease_classification'=>$row[22],
                        'etc2'=>$row[23]));
                }
                echo json_decode($data);
            }else{
                echo mysqli_error($conn);
            }
            break;
        case 'survey':
            break;
        case 'checkupItem':
            $sql = "select * from 10kG_medical_checkup_item";
            $result = mysqli_query($conn,$sql);
            $data = array();
            if($result){
                while ($row = mysqli_fetch_array($result)){
                    array_push($data,
                        array('id'=>$row[0],
                            'question'=>$row[23]));
                }
                echo json_decode($data);
            }else{
                echo mysqli_error($conn);
            }
            break;
        case 'checkupResult':
            $sql = "select * from 10kG_medical_checkup_item";
            $result = mysqli_query($conn,$sql);
            $data = array();
            if($result){
                while ($row = mysqli_fetch_array($result)){
                    array_push($data,
                        array('id'=>$row[0],
                            'r-1'=>$row[1],
                            'r-2'=>$row[1],
                            ));
                }
                echo json_decode($data);
            }else{
                echo mysqli_error($conn);
            }
            break;

    }

    mysqli_close($conn);
