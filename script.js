let botonEncriptar = document.getElementById("encriptar");
let textoProcesado = document.getElementById("textoProcesado");
let imgLateral = document.getElementById("img-lateral");

function encriptar() {
    let textoAEncriptar = document.getElementById("textoEncriptar").value;

    textoAEncriptar = textoAEncriptar.replaceAll("e", "enter");
    textoAEncriptar = textoAEncriptar.replaceAll("i", "imes");
    textoAEncriptar = textoAEncriptar.replaceAll("a", "ai");
    textoAEncriptar = textoAEncriptar.replaceAll("o", "ober");
    textoAEncriptar = textoAEncriptar.replaceAll("u", "ufat");
    
    textoProcesado.value = textoAEncriptar;
    imgLateral.style.display = "none";
    textoProcesado.style.display = "block";
    console.log(textoAEncriptar);
    /*"e" = "enter";
    "i" = "imes";
    "a" = "ai";
    "o" = "ober";
    "u" = "ufat";*/

}

botonEncriptar.onclick = encriptar;


//mostrar texto procesado