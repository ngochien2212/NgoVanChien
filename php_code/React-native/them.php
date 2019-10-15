<?php
 
include 'ketnoi.php';
 mysqli_query($conn,"SET NAMES 'utf8'");
$message = '';
 
// $connection = new mysqli($host_name, $host_user, $host_password, $database_name);
 
if ($conn->connect_error)
{
 die("Connection failed: " . $conn->connect_error);
} 
 
$json = json_decode(file_get_contents('php://input'), true);
 
$query = "INSERT INTO phim(ten_phim,noi_dung,the_loai,dang,thoi_gian,anh) values('$json[ten_phim]','$json[noi_dung]', '$json[the_loai]','$json[dang]','$json[thoi_gian]','$json[anh]')";
 
$query_result = $conn->query($query);
 
if ($query_result === true)
{
 $message = 'Thêm thành công!';
}
 
else
{
 $message = 'Error! Try Again.';
}
 
echo json_encode($message);
 
$conn->close();
?>