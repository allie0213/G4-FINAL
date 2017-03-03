

<?php  
	try{
		require_once("connect2.php");
		$sql = "SELECT * from mem";
		$members = $pdo->query( $sql );
		$memRows = $members->fetchAll();
		foreach ($memRows as $key => $memberRow) {
?>
	<table>
	<tr>
		<td><?php echo $memberRow["mem_email"] ?></td>
		<td><?php echo $memberRow["mem_name"] ?></td>
		<td></td>
	</tr>
	</table>
<?php	
		}

	}catch(PDOException $ex){
		echo "資料庫操作失敗，原因：", $ex->getMessage(), "<br>";
		echo "行號" , $ex->getLine(), "<br>";
	}
?>
