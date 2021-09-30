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
        case 'entry':
            $sql = 'select * from sample_entry';
            $result = mysqli_query($conn, $sql);
            $data = array();
            if ($result) {
                while ($row = mysqli_fetch_array($result)) {
                    array_push($data,
                        array('id' => $row[0],
                            'name' => $row[1]
                        ));
                }
                echo json_encode($data);
            } else {
                echo mysqli_error($conn);
            }
            break;
        case 'consent':
            $sql = "select * from 10kG_consent";
            $result = mysqli_query($conn,$sql);
            $data = array();
            if($result){
                while ($row = mysqli_fetch_array($result)){
                    array_push($data,
                    array('id'=>$row[0],
                        'unique_number'=>$row[1],
                        'false_name'=>$row[2],
                        'participation_date'=>$row[3],
                        'sex'=>$row[4],
                        'age'=>$row[5],
                        'cancel_date'=>$row[6],
                        'sortation'=>$row[7],
                        'secondary_use'=>$row[8],
                        'etc'=>$row[9],
                        'type_quantity'=>$row[10],
                        'shelf_live'=>$row[11],
                        'secondary_offer'=>$row[12],
                        'secondary_identification_info'=>$row[13],
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

    }

    mysqli_close($conn);
