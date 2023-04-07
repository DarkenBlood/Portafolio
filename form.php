<?php
// Cargar la librería de PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/Exception.php';
require 'PHPMailer/SMTP.php';

// Datos del formulario
$nombre = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$mensaje = $_POST['message'] ?? '';

// Validar los datos recibidos
if (empty($nombre) || empty($email) || empty($mensaje)) {
    // Enviar una respuesta de error si algún campo está vacío
    http_response_code(400);
    echo 'Error: Todos los campos son requeridos';
    exit;
}

// Construir el mensaje
$cuerpo = "Este mensaje fue enviado por " . $nombre . "\n";
$cuerpo .= "Su correo electrónico es: " . $email . "\n";
$cuerpo .= $mensaje . "\n";
$cuerpo .= "Enviado el: " . date('d/m/y', time()) . "\n";

// Configuración de PHPMailer
$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'gabriel.johann.rojas369@gmail.com';
$mail->Password = 'Chuleta369Googlex';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

// Destinatario, asunto y mensaje
$mail->setFrom($email, $nombre);
$mail->addAddress('gabriel.johann.rojas369@gmail.com', 'Gabriel Johann Rojas');
$mail->Subject = 'gabrieldesign.tech';
$mail->Body = $cuerpo;


// Enviar correo electrónico y manejar errores
try {
    $mail->send();
    http_response_code(200);
    echo 'Mensaje enviado correctamente';
} catch (Exception $e) {
    http_response_code(500);
    echo 'Error al enviar el mensaje: ' . $mail->ErrorInfo;
}
?>