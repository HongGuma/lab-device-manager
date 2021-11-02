<?php

//    require 'vendor/autoload.php';
//
//    use PhpOffice\PhpSpreadsheet\Spreadsheet;
//    use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
//
//    $spreadsheet = new Spreadsheet();
//    $sheet = $spreadsheet->getActiveSheet();
//    $sheet->setCellValue('A1', 'Hello World !');
//
//    $writer = new Xlsx($spreadsheet);
//    $writer->save('hello world.xlsx');
//
//    $objPHPExcel = new Spreadsheet();
//    $objPHPExcel -> setActiveSheetIndex(0);
//
//    $objSheet = $objPHPExcel->getActiveSheet();
//
//    var downBtn = document.getElementById('export-file');
//    var exportPlugin1 = hot.getPlugin('exportFile');
//    downBtn.addEventListener('click', function() {
//        exportPlugin1.downloadFile('csv', {
//                bom: true,
//                columnDelimiter: ',',
//                columnHeaders: true,
//                exportHiddenColumns: true,
//                exportHiddenRows: true,
//                fileExtension: 'csv',
//                filename: 'Kogic_10KGenome-Apply-CSV-file_[YYYY]-[MM]-[DD]',
//                mimeType: 'text/csv',
//                rowDelimiter: '\r\n',
//                rowHeaders: true
//            });
//        });