<?php
    include_once('../db_info.php');
    global $conn;

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
        case 'allSelect':
            $sql = "select * from sample_10kG";
            $result = mysqli_query($conn,$sql);
            $data = array();
            if($result){
                while ($row = mysqli_fetch_array($result)){
                    array_push($data,
                    array('unique_number'=>$row[0],
                        'false_name'=>$row[1],
                        'participation_date'=>$row[2],
                        'sex'=>$row[3],
                        'age'=>$row[4],
                        'cancel_date'=>$row[5],
                        'sortation'=>$row[6],
                        'secondary_use'=>$row[7],
                        'etc'=>$row[8],
                        'type_quantity'=>$row[9],
                        'shelf_live'=>$row[10],
                        'secondary_offer'=>$row[11],
                        'secondary_identification_info'=>$row[12],
                        'report'=>$row[13],
                        'report_id'=>$row[14],
                        'applicant_for_update'=>$row[15],
                        'disease_name'=>$row[16],
                        'disease_code_KR'=>$row[17],
                        'disease_code_EN'=>$row[18],
                        'pregnancy_week'=>$row[19],
                        'family_code'=>$row[20],
                        'disease_classification'=>$row[21],
                        'etc2'=>$row[22]));
                }
                echo json_decode($data);
            }else{
                echo mysqli_error($conn);
            }
            break;

    }

    mysqli_close($conn);
