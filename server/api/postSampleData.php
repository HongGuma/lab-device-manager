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

    $POST=json_decode(file_get_contents('php://input'), true);

    $parm = $POST['parm'];
    $table = $POST['table'];
    $id = $POST['id'];
    $entry_len = $POST['entryLen'];
    $arr = $POST['arr'];

    $medical_insert_arr = $POST['insertData'];
    $medical_column_arr = $POST['insertCol'];

    $update_col = $POST['col_nm'];
    $update_data = $POST['update_data'];


    switch ($parm){
        case 'consent':
            $sql = "select * from 10kG_consent";
            $result = mysqli_query($conn,$sql);
            $data = array();
            if($result){
                while ($row = mysqli_fetch_array($result)){
                    array_push($data,
                        array(
                            'id'=>$row[0],
                            'r_1'=>$row[1], 'r_2'=>$row[2], 'r_3'=>$row[3], 'r_4'=>$row[4], 'r_5'=>$row[5],
                            'r_6'=>$row[6], 'r_7'=>$row[7], 'r_8'=>$row[8], 'r_9'=>$row[9], 'r_10'=>$row[10],
                            'r_11'=>$row[11], 'r_12'=>$row[12], 'r_13'=>$row[13], 'r_14'=>$row[14], 'r_15'=>$row[15],
                            'r_16'=>$row[16], 'r_17'=>$row[17], 'r_18'=>$row[18], 'r_19'=>$row[19], 'r_20'=>$row[20],
                            'r_21'=>$row[21], 'r_22'=>$row[22], 'r_23'=>$row[23], 'r_24'=>$row[24]));
                }
                echo json_encode($data);
            }else{
                echo mysqli_error($conn);
            }
            break;
        case 'consentEntry':
            $sql = "select * from 10kG_consent_entry";
            $result = mysqli_query($conn,$sql);
            $data = array();
            if($result){
                while ($row = mysqli_fetch_array($result)){
                    array_push($data,
                        array('id'=>$row[0],
                            'name'=>$row[1]));
                }
                echo json_encode($data);
            }else{
                echo mysqli_error($conn);
            }
            break;
        case 'insert':
            $schema = '';
            for($i = 1; $i<=$entry_len; $i++){
                $schema = $schema."r_$i,";
            }
            $schema = substr($schema,0 ,-1);
            $sql = "INSERT INTO $table ($schema) values";
            $values = '';
            foreach($arr as $key => $value){
                $values = $values."'$value',";
            }
            $values = substr($values,0 ,-1);
            $sql = $sql."($values)";
            $result = mysqli_query($conn,$sql);
            echo json_encode($result);
            break;
        case 'delete':
            $sql = "Delete from $table where id=$id";
            $result = mysqli_query($conn,$sql);
            echo json_encode($result);
            break;
        case 'consentUpdate':
            $sql = "UPDATE 10kG_consent SET `$update_col` = '$update_data' WHERE (`id` = '$id') ";
            $result = mysqli_query($conn,$sql);
            echo json_encode($result);
            break;
        case 'survey':
            break;
        case 'medicalEntry':
            $sql = "select * from 10kG_medical_checkup_entry";
            $result = mysqli_query($conn,$sql);
            $data = array();
            if($result){
                while ($row = mysqli_fetch_array($result)){
                    array_push($data,
                        array('id'=>$row[0],
                            'name'=>$row[1]));
                }
                echo json_encode($data);
            }else{
                echo mysqli_error($conn);
            }
            break;
        case 'medicalResult':
            $sql = "select * from 10kG_medical_checkup_result";
            $result = mysqli_query($conn,$sql);
            $data = array();
            if($result){
                while ($row = mysqli_fetch_array($result)){
                    array_push($data,
                        array('id'=>$row[0],
                            'r_1'=>$row[1], 'r_2'=>$row[2], 'r_3'=>$row[3], 'r_4'=>$row[4], 'r_5'=>$row[5],
                            'r_6'=>$row[6], 'r_7'=>$row[7], 'r_8'=>$row[8], 'r_9'=>$row[9], 'r_10'=>$row[10],
                            'r_11'=>$row[11], 'r_12'=>$row[12], 'r_13'=>$row[13], 'r_14'=>$row[14], 'r_15'=>$row[15],
                            'r_16'=>$row[16], 'r_17'=>$row[17], 'r_18'=>$row[18], 'r_19'=>$row[19], 'r_20'=>$row[20],
                            'r_21'=>$row[21], 'r_22'=>$row[22], 'r_23'=>$row[23], 'r_24'=>$row[24], 'r_25'=>$row[25],
                            'r_26'=>$row[26], 'r_27'=>$row[27], 'r_28'=>$row[28], 'r_29'=>$row[29], 'r_30'=>$row[30],
                            'r_31'=>$row[31], 'r_32'=>$row[32], 'r_33'=>$row[33], 'r_34'=>$row[34], 'r_35'=>$row[35],
                            'r_36'=>$row[36], 'r_37'=>$row[37], 'r_38'=>$row[33], 'r_39'=>$row[39], 'r_40'=>$row[40],
                            'r_41'=>$row[41], 'r_42'=>$row[42], 'r_43'=>$row[43], 'r_44'=>$row[44], 'r_45'=>$row[45],
                            'r_46'=>$row[46], 'r_47'=>$row[47], 'r_48'=>$row[48], 'r_49'=>$row[49], 'r_50'=>$row[50],
                            'r_51'=>$row[51], 'r_52'=>$row[52], 'r_53'=>$row[53], 'r_54'=>$row[54], 'r_55'=>$row[55],
                            'r_56'=>$row[56], 'r_57'=>$row[57], 'r_58'=>$row[58], 'r_59'=>$row[59], 'r_60'=>$row[60],
                            'r_61'=>$row[61], 'r_62'=>$row[62], 'r_63'=>$row[63], 'r_64'=>$row[64], 'r_65'=>$row[65],
                            'r_66'=>$row[66], 'r_67'=>$row[67], 'r_68'=>$row[68], 'r_69'=>$row[69], 'r_70'=>$row[70],
                            'r_71'=>$row[71], 'r_72'=>$row[72], 'r_73'=>$row[73], 'r_74'=>$row[74], 'r_75'=>$row[75],
                            'r_76'=>$row[76], 'r_77'=>$row[77], 'r_78'=>$row[78], 'r_79'=>$row[79], 'r_80'=>$row[80],
                            'r_81'=>$row[81], 'r_82'=>$row[82], 'r_83'=>$row[83], 'r_84'=>$row[84], 'r_85'=>$row[85],
                            'r_86'=>$row[86], 'r_87'=>$row[87], 'r_88'=>$row[88], 'r_89'=>$row[89], 'r_90'=>$row[90],
                            'r_91'=>$row[91], 'r_92'=>$row[92], 'r_93'=>$row[93], 'r_94'=>$row[94], 'r_95'=>$row[95],
                            'r_96'=>$row[96], 'r_97'=>$row[97], 'r_98'=>$row[98], 'r_99'=>$row[99], 'r_100'=>$row[100],
                            'r_101'=>$row[101], 'r_102'=>$row[102], 'r_103'=>$row[103], 'r_104'=>$row[104], 'r_105'=>$row[105],
                            'r_106'=>$row[106], 'r_107'=>$row[107], 'r_108'=>$row[108], 'r_109'=>$row[109], 'r_110'=>$row[110],
                            'r_111'=>$row[111], 'r_112'=>$row[112], 'r_113'=>$row[113], 'r_114'=>$row[114], 'r_115'=>$row[115],
                        )
                    );
                }
                echo json_encode($data);
            }else{
                echo mysqli_error($conn);
            }
            break;
        case "medicalInsert":
            $sql = "INSERT INTO 10kG_medical_checkup_result (";
            for($i=0;$i<count($medical_column_arr)-1;$i++){
                $sql = $sql."'$medical_column_arr[$i]',";
            }
//            $sql = $sql."'$medical_column_arr[count($medical_column_arr)-1]') VALUES (";
//            for($i=0;$i<count($medical_insert_arr)-1;$i++){
//                $sql = $sql."'$medical_insert_arr[$i]',";
//            }
//            $sql = $sql."'$$medical_insert_arr[count($medical_insert_arr)-1]')";
//            echo $sql;
//            $result = mysqli_query($conn,$sql);
//            echo json_encode($result);
            break;


    }

    mysqli_close($conn);
