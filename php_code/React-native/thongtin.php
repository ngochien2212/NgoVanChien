<?php
	require 'ketnoi.php';

	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$id = $obj['id'];
	$query = "SELECT * FROM phim where id='$id'";
	 
	$data = mysqli_query($conn,$query);
	
	class thongtin{
		function thongtin($id,$ten_phim, $noi_dung, $thoi_gian,$the_loai,$dang, $anh){
			$this->id=$id;
			$this->ten_phim=$ten_phim;
			$this->noi_dung=$noi_dung;
			$this->thoi_gian=$thoi_gian;
			$this->the_loai=$the_loai;
			$this->dang=$dang;
			$this->anh=$anh;
		}
	}
	$mangtt=array();
	while ($row=mysqli_fetch_assoc($data)) {
		array_push($mangtt, new thongtin($row['id'], $row['ten_phim'], $row['noi_dung'], $row['thoi_gian'], $row['the_loai'], $row['dang'], $row['anh']));
	}
	echo json_encode($mangtt);
?>