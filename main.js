function escribeTextoHtml(elemento,texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML= texto;
    return;
}
function condicionesIniciales(){
    escribeTextoHtml(".tituloEncriptado", "Ningún mensaje fue encontrado");
    escribeTextoHtml(".textoPorEncriptar", "Ingresa el texto que desees encriptar o desencriptar.");
}
condicionesIniciales();
