function randomBg() {
    var random = Math.floor(Math.random() * 4) + 1; // Genera un número aleatorio entre 1 y 4
    document.body.className = 'bg-image-' + random; // Asigna la clase correspondiente a la imagen de fondo
}
