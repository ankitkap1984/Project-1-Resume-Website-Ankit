<?php 
ob_start();
if(isset($_POST['submit'])) {
$to="receiver@gmail.com";
$subject="New request from ".$_POST['name'];
$body=$_POST['message'];
$headers="Contact ".$_POST['phone']. " Email ".$_POST['email']."\r\n"."CC. ";
mail($to, $subject, $body, $headers);
header("Location: thanks.html");
}
?>