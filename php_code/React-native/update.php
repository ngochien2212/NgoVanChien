<?php
include 'ketnoi.php';
 // $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 mysqli_query($conn,"SET NAMES 'utf8'");
 $json = file_get_contents('php://input');
 
 $obj = json_decode($json,true);
 $id       = $obj['id'];
 
 $ten_phim = $obj['ten_phim'];

 $noi_dung = $obj['noi_dung'];
 
 $the_loai = $obj['the_loai'];

 $dang = $obj['dang'];

 $thoi_gian = $obj['thoi_gian'];

 $anh = $obj['anh'];

 $Sql_Query = "UPDATE phim SET id='$id', ten_phim= '$ten_phim', noi_dung = '$noi_dung', the_loai = '$the_loai', dang = '$dang', thoi_gian = '$thoi_gian', anh = '$anh' WHERE id = $id";
 
 if(mysqli_query($conn,$Sql_Query)){

$MSG = 'Update thành công' ;

$json = json_encode($MSG);

 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 mysqli_close($conn);
?>