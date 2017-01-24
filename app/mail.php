<?php
	$to = 'zakaz@okna-ru.org';
	//$to = $_POST['need_mail'];
	$_POST['u_name'] = mb_convert_encoding($_POST['u_name'], "windows-1251", "utf-8");
	$_POST['u_phone'] = mb_convert_encoding($_POST['u_phone'], "windows-1251", "utf-8");
	$_POST['region'] = mb_convert_encoding($_POST['region'], "windows-1251", "utf-8");
	$_POST['page_url'] = mb_convert_encoding($_POST['page_url'], "windows-1251", "utf-8");
	
	$subject = 'Kaleva';
	$message = '<p>Имя: '.$_POST['u_name'].'</p> <p>Телефон: '.$_POST['u_phone'].'</p>';
	if(isset($_POST["region"]) && $_POST["region"] != ''){
		$message .= '<p>Регион: '.$_POST['region'].'</p>';;
	}
	$message .= '<p>Страница: '.$_POST['page_url'].'</p>';
	$header = "From: kaleva@okna-org.ru\r\n"; 
	$header.= "MIME-Version: 1.0\r\n"; 
	$header.= "Content-Type: text/html; charset=Windows-1251\r\n"; 
	$header.= "X-Priority: 1\r\n"; 
	 
	mail($to, $subject, $message, $header);

?>
