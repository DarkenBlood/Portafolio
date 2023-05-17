// document.addEventListener('touchstart', function() {
//     
//     
//     console.log("a");
// });
let numToques = 0;

document.addEventListener('DOMContentLoaded', function() {
    const corazon = document.querySelector('.corazon');
    const audio = document.getElementById('loveBaby');
    const sobreBlanco = document.querySelector('.parte-delantera');
    const carta = document.querySelector('.carta');
    const mensaje = document.querySelector('.pantalla');

    document.addEventListener('touchstart', function() {
        if (numToques === 0) {
            corazon.classList.add('grande');
            numToques++;
        } else if (numToques === 1) {
            corazon.classList.add('muyGrande');
            numToques++;
        } else if (numToques === 2) {
            corazon.classList.add('volar');
            sobreBlanco.classList.add('abrirSobre');
            carta.classList.add('cartaAbierta');
            setTimeout(function() {
                carta.classList.add('cartaLectura');
                carta.classList.remove('cartaAbierta');
                mensaje.classList.remove('pantalla');
            }, 6000);
            audio.play();
            numToques++;
        }
    });

    carta.addEventListener('click', function() {
        carta.classList.toggle('reversa');
        console.log("funcó");
    });
});
