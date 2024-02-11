function encriptar() {
    let texto = document.getElementById("textoEncriptar").value;
    console.log(texto);
}

function desencriptar() {

}

function copiar() {

}

let botonEncriptar = document.getElementById("encriptar");
botonEncriptar.onclick = encriptar;

texto.setSelectionRange(0, 0);

let botonDesencriptar = document.getElementById("desencriptar");

let botonCopiar = document.getElementById("boton-copiar");
botonCopiar.onclick = copiar;