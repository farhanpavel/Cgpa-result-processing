<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
require 'vendor/autoload.php'; // Include the PhpSpreadsheet autoloader

use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

// Load the existing Excel file
if (isset($_FILES['file'])) {
    $uploadedFile = $_FILES['file']['tmp_name'];
    
    $spreadsheet = IOFactory::load($uploadedFile);
    $worksheet = $spreadsheet->getActiveSheet();
    
    // Process the loaded spreadsheet as needed
    // ...


// Iterate over the rows and calculate the sum of consecutive 40 values in column B
$currentRoll = '';
$totalSum = 0;
$count = 1;
$count2 = 1;
$gap = 0;
$totalSum2 = 0;
$index=0;
$pavel=0;
$moja=0;
$flag=0;
$firstRow = true;
foreach ($worksheet->getRowIterator() as $row) {
    if ($firstRow) {
        $firstRow = false;
        continue; // Skip the first row
    }
    // $roll = $worksheet->getCell('A' . $row->getRowIndex())->getValue();
    // $value = $worksheet->getCell('B' . $row->getRowIndex())->getValue();
    $roll = $worksheet->getCell('A' . $row->getRowIndex())->getValue();
    $subname = $worksheet->getCell('B' . $row->getRowIndex())->getValue();
    $Incourse = $worksheet->getCell('C' . $row->getRowIndex())->getValue();
    $credit = $worksheet->getCell('D' . $row->getRowIndex())->getValue();
    $first = $worksheet->getCell('E' . $row->getRowIndex())->getValue();
    $second = $worksheet->getCell('F' . $row->getRowIndex())->getValue();
    $third = $worksheet->getCell('G' . $row->getRowIndex())->getValue();

    if ($subname != null ) {
        if($subname == 'STOP')
            {
                break;
            }
        $totalSum += floatval($Incourse);
         $pavel=abs(floatval($first)-floatval($second));
       
         if($pavel>=12 && $first!=null && $second!=null){
             $pavel2=abs(floatval($third)-floatval($first));
             $pavel3=abs(floatval($third)-floatval($second));
             if($pavel2>$pavel3 && $third!=null && $second!=null){
                 $totalSum+=(($second+$third)/2); 
             }
             else if($third!=null && $second!=null){
                 $totalSum+=(($first+$third)/2); 
             }
             else{
                 $totalSum+=($first); 
                 
            }   
         }
         else{
             if($third==null && $second==null)
             {
            $totalSum+=($first); 
               
             }
            else
            {$totalSum+=(($first+$second)/2);
              
            }  
        }
        if($totalSum>=80 && $totalSum<=100)
         {
            $totalSum=4;   
        }
        else if($totalSum>=75 && $totalSum<80)
        {
            $totalSum=3.75;    
        }
        else if($totalSum>=70 && $totalSum<75)
        {
            $totalSum=3.5;   
        }
        else if($totalSum>=65 && $totalSum<70)
        {
            $totalSum=3.25;   
        }
        else if($totalSum>=60 && $totalSum<65)
        {
            $totalSum=3;    
        }
        else if($totalSum>=55 && $totalSum<60)
        {
            $totalSum=2.75;     
        }
        else if($totalSum>=50 && $totalSum<55)
        {
            $totalSum=2.5;     
        }
        else if($totalSum>=45 && $totalSum<50)
        {
            $totalSum=2.25;     
        }
        else if($totalSum>=40 && $totalSum<45)
        {
            $totalSum=2;    
        }
        else
        {  
          
            $totalSum=0;
             $flag=1;
        }
         $totalSum*=$credit;
          $moja+=$totalSum;
          $index+=$credit;
          $totalSum=0;
    }
    else {
        if($flag==0)
        {
        echo $moja;
        echo '</br>';
        
        $totalSum = $moja / $index;
        $columnIndex = 'H' . $count2;
        $totalSum= number_format($totalSum, 2);
        }
        else{
            $totalSum='F';
            $columnIndex = 'H' . $count2;
        }
        $worksheet->getCell($columnIndex)->setValue($totalSum);
        if($totalSum!=0)
        {$totalSum2=$totalSum;
        }
        $totalSum = 0;
        $index=0;
        $moja=0; 
        $flag=0;
       
    }

    if ($currentRoll != $roll) {
        $count2 = $count;
        $currentRoll = $roll;
    }

    $count++;
    
}

// Set the sum for the last student if there are values
$columnIndex = 'H' . $count2;
$worksheet->getCell($columnIndex)->setValue($totalSum2);

// Save the updated Excel file
$writer = new Xlsx($spreadsheet);
$writer->save('C:/file.xlsx');
exec('C:/file.xlsx "' . $savePath . '"');
}
?>
