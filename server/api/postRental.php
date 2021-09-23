<?php
    include_once('../db_info.php');
    global $conn;

    $POST=json_decode(file_get_contents('php://input'), true);

    $param = $POST['param'];
    $id = $POST['id'];
    $equipment_name = $POST['equipment_name'];
    $name = $POST['name'];
    $belong = $POST['belong'];
    $position = $POST['position'];
    $passwd = $POST['passwd'];

    switch ($param) {
        case 'select': //전체 출력용 (반납 완료된거 포함 x)
            $sql = "select rental_id, borrow_equipment_name, borrower_name, borrower_belong, position, borrow_date from rental where toggle is NULL and not borrower_name = '' order by borrow_date DESC";
            $result = mysqli_query($conn, $sql);
            $data = array();
            if ($result) {
                while ($row = mysqli_fetch_array($result)) {
                    array_push($data,
                        array('id' => $row[0],
                            'equipment_name' => $row[1],
                            'name' => $row[2],
                            'belong' => $row[3],
                            'position' => $row[4],
                            'borrow_date' => $row[5],
                        ));
                }
                echo json_encode($data);
            } else {
                echo mysqli_error($conn);
            }
            break;
        case 'count': // 대여현황 숫자 (반납 완료된거 포함 x)
            $sql = "select count(*) from rental where toggle is null and not borrower_name = '' ";
            $result = mysqli_query($conn, $sql);
            $data = '';
            if ($result) {
                while ($row = mysqli_fetch_array($result)) {
                    $data = $row[0];
                }
                echo $data;
            } else {
                echo mysqli_error($conn);
            }
            break;
        case 'selectAuth': //개인 대여 확인용
            $sql = "select rental_id, borrow_equipment_name, borrower_name, borrower_belong, position, borrow_date from rental where borrower_name='$name' and password = SHA1('$passwd') and toggle is Null order by borrow_date DESC";
            $result = mysqli_query($conn, $sql);
            $data = array();
            if ($result) {
                while ($row = mysqli_fetch_array($result)) {
                    array_push($data,
                        array('id' => $row[0],
                            'equipment_name' => $row[1],
                            'name' => $row[2],
                            'belong' => $row[3],
                            'position' => $row[4],
                            'borrow_date' => $row[5],
                        ));
                }
                echo json_encode($data);
            } else {
                echo mysqli_error($conn);
            }
            break;
        case 'request': //대여신청시
            $date_str = date("YmdHis");
            $create_id = substr($date_str,2,12);
            $sql = "Insert Into rental(rental_id,borrow_equipment_name,borrower_name,borrower_belong,position,password) VALUE ('$create_id','$equipment_name','$name','$belong','$position',SHA1('$passwd'))";
            $result = mysqli_query($conn,$sql);
            echo json_encode($result);
            break;
        case 'doneRental': //반납 완료시
            $sql = "Update rental SET toggle='done' where rental_id=".$id;
            $result = mysqli_query($conn,$sql);
            echo json_encode($result);
            break;
        case 'allSelect': //모든 기록 출력 (관리자 전용), 비밀번호는 제외
            $sql = "Select * from rental order by borrow_date DESC";
            $result = mysqli_query($conn, $sql);
            $data = array();
            if ($result) {
                while ($row = mysqli_fetch_array($result)) {
                    array_push($data,
                        array('id' => $row[0],
                            'equipment_name' => $row[1],
                            'name' => $row[2],
                            'belong' => $row[3],
                            'position' => $row[5],
                            'borrow_date' => $row[6],
                            'toggle' => $row[7],
                            'return_date' => $row[8],
                        ));
                }
                echo json_encode($data);
            } else {
                echo mysqli_error($conn);
            }
            break;
        case 'allCount': //모든 숫자 (관리자용)
            $sql = 'select count(*) from rental';
            $result = mysqli_query($conn, $sql);
            $data = '';
            if ($result) {
                while ($row = mysqli_fetch_array($result)) {
                    $data = $row[0];
                }
                echo $data;
            } else {
                echo mysqli_error($conn);
            }
            break;
        case 'delete':
            $sql="DELETE FROM rental WHERE rental_id=".$id;
            $result = mysqli_query($conn,$sql);
            echo json_encode($result);
    }
    mysqli_error($conn);

