<?php

include 'ketnoi.php';

 // $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 mysqli_query($conn,"SET NAMES 'utf8'");
 $json = file_get_contents('php://input');

 $obj = json_decode($json,true);

 $id = $obj['id'];

 $Sql_Query = "DELETE FROM phim WHERE id = '$id'" ;
 
 if(mysqli_query($conn,$Sql_Query)){

$MSG = 'Success' ;

$json = json_encode($MSG);

 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 mysqli_close($conn);
?>