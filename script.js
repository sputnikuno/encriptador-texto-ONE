let botonEncriptar = document.getElementById("encriptar");
let botonDesencriptar = document.getElementById("desencriptar");
let textoProcesado = document.getElementById("textoProcesado");
let imgLateral = document.getElementById("img-lateral");

function encriptar() {
    let textoAEncriptar = document.getElementById("textoEncriptar").value;

    textoAEncriptar = textoAEncriptar.replaceAll("e", "enter");
    textoAEncriptar = textoAEncriptar.replaceAll("i", "imes");
    textoAEncriptar = textoAEncriptar.replaceAll("a", "ai");
    textoAEncriptar = textoAEncriptar.replaceAll("o", "ober");
    textoAEncriptar = textoAEncriptar.replaceAll("u", "ufat");

    //mostrar texto procesado
    textoProcesado.value = textoAEncriptar;
    imgLateral.style.display = "none";
    textoProcesado.style.display = "block";
    //console.log(textoAEncriptar);
    /*"e" = "enter";
    "i" = "imes";
    "a" = "ai";
    "o" = "ober";
    "u" = "ufat";*/

}

function desencriptar() {
    let textoDesencriptar = document.getElementById("textoEncriptar").value;
    
    textoDesencriptar = textoDesencriptar.replaceAll("enter", "e");
    textoDesencriptar = textoDesencriptar.replaceAll("imes", "i");
    textoDesencriptar = textoDesencriptar.replaceAll("ai", "a");
    textoDesencriptar = textoDesencriptar.replaceAll("ober", "o");
    textoDesencriptar = textoDesencriptar.replaceAll("ufat", "u");

    //mostrar texto procesado
    textoProcesado.value = textoDesencriptar;
    imgLateral.style.display = "none";
    textoProcesado.style.display = "block";

    //console.log(textoDesencriptar);
}

botonDesencriptar.onclick = desencriptar;
botonEncriptar.onclick = encriptar;


