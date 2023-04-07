<?php
// Datos del formulario
$nombre = $_POST['name'];
$email = $_POST['email'];
$mensaje = $_POST['message'];

// Construir el mensaje
$mensaje = "Este mensaje fue enviado por " . $nombre . "\n";
$mensaje .= "Su correo electrónico es: " . $email . "\n";
$mensaje .= $mensaje . "\n";
$mensaje .= "Enviado el: " . date('d/m/y', time()) . "\n";

// Correo electrónico
$destinatario = "gabriel.johann.rojas369@gmail.com";
$asunto = "gabrieldesign.tech";

// Enviar correo electrónico
mail($destinatario, $asunto, $mensaje);

// Redirigir al usuario
include 'index.html';
?>