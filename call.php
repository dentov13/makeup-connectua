<?php

require_once "lib/PHPMailerAutoload.php";

$dataString = isset($_POST['dataString']) ? $_POST['dataString'] : null;

$mail = new PHPMailer;

$mail->SMTPDebug = 3;
$mail->IsSMTP();
$mail->Host = "smtp.gmail.com";
$mail->SMTPAuth = true;
$mail->SMTPSecure = "tls";
$mail->Port = 587;
$mail->Username = "messenger.skywellworld@gmail.com"; // ot kUda
$mail->Password = "3KLaxRN4P6";
$address = "t.starosvetskaya@skywell.com.ua"; // kudA
$address .= "khohklov.a@skywell.com.ua";
$mail->addAddress($address);

$mail->From = "messenger.skywellworld@gmail.com";
$mail->FromName = "Messanger Skywellworld";

$mail->Subject = "Zayavka s messanger.skywellworld.com";
$mail->Body = $dataString;
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
