<?php
	include 'ketnoi.php';
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$user = $obj['user'];
	$pass = $obj['pass'];
	$Sql_Query = "SELECT * FROM user WHERE user = '$user' and pass = '$pass' ";
	 
	$check = mysqli_fetch_array(mysqli_query($conn,$Sql_Query));
	 
	if(isset($check)){ 
		$SuccessLoginMsg = 'success';
		$SuccessLoginJson = json_encode($SuccessLoginMsg);
		echo $SuccessLoginJson ;
	}
	 
	else{
		$InvalidMSG = 'Thông tin đăng nhập chưa chính xác. Vui lòng nhập lại!' ;
		$InvalidMSGJSon = json_encode($InvalidMSG);
	 	echo $InvalidMSGJSon ; 
	}
	mysqli_close($conn);
?>