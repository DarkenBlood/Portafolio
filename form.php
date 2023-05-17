<?php
// Server Request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del formulario
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $mensaje = $_POST['message'];

    // Destinatario del correo electrónico
    $destinatario = 'gabriel.johann.rojas369@gmail.com';

    // Asunto del correo electrónico
    $asunto = 'Gabriel Design';

    // Construir el cuerpo del correo electrónico
    $cuerpo = "Nombre: " . $nombre . "\n";
    $cuerpo .= "Email: " . $email . "\n";
    $cuerpo .=  $mensaje . "\n";

    // Cabeceras del correo electrónico
    $cabeceras = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    // Enviar el correo electrónico
    if (mail($destinatario, $asunto, $cuerpo, $cabeceras)) {
        echo "El mensaje se envió correctamente";
    } else {
        echo "Hubo un error al enviar el mensaje";
    }
}
?>