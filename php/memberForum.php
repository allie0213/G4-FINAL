<?php  
header('Content-Type: application/json; charset=UTF-8');
try{
	require_once("connect2.php");
	$sql = "SELECT a.mem_name, c.pla_title
			FROM mem a JOIN plaCol b ON a.mem_no = b.mem_no
	        JOIN pla c ON b.pla_no = c.pla_no
			GROUP BY a.mem_name, c.pla_title";
	
	$mForums = $pdo->prepare($sql);
	$mForums->execute();
	$mForums = $mForums->fetchAll();
	echo json_encode($mForums);


}catch(PDOException $ex){
		echo "資料庫操作失敗，原因：", $ex->getMessage(), "<br>";
		echo "行號" , $ex->getLine(), "<br>";
	}


?>