<?php

require_once "lib/PHPMailerAutoload.php";

$dataString = isset($_POST['dataString']) ? $_POST['dataString'] : null; // не менять

$mail = new PHPMailer;

$mail->SMTPDebug = 3;
$mail->IsSMTP();
$mail->Host = "smtp.gmail.com";
$mail->SMTPAuth = true;
$mail->SMTPSecure = "tls";
$mail->Port = 587;
$mail->Username = ""; // кто отправляет
$mail->Password = "";
$address = "tovstokhatko.denis@gmail.com"; // кто получает письмо с сайта
$mail->addAddress($address);

$mail->From = "_________@gmail.com";
$mail->FromName = "";

$mail->Subject = "";
$mail->Body = $dataString; // не менять
$mail->AtlBody = ":)";

if(!$mail->send())
{
  echo "Error: " . $mail->ErrorInfo;
}
else
{
  echo "SEND";
}

?>
