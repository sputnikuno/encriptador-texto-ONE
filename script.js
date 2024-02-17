let botonEncriptar = document.getElementById("encriptar");
let botonDesencriptar = document.getElementById("desencriptar");
let textoProcesado = document.getElementById("textoProcesado");
let imgLateral = document.getElementById("img-lateral");
let botonCopiar = document.getElementById("boton-copiar");


//ENCRIPTAR TEXTO
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
    botonCopiar.style.display = "block";
    //console.log(textoAEncriptar);
}

//DESENCRIPTAR TEXTO
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
    botonCopiar.style.display = "inline-block";
    textoProcesado.style.display = "block";

    //console.log(textoDesencriptar);
}

//BOTON COPIAR
function copiar() {
    let textoCopiar = document.getElementById('textoProcesado').value;
    const copiarContenido = async () => {
        try {
            await navigator.clipboard.writeText(textoCopiar);
            swal('','Contenido copiado al portapapeles','success');
        } catch (err) {
            console.error('Error al copiar: ', err);
        }
    }

    copiarContenido();
    }

//colocar cursor del textarea al inicio del cuadro
let textarea = document.getElementById("textoEncriptar");

function colocarCursorAlInicio() {

    textarea.setSelectionRange(0, 0);
}

textarea.addEventListener("focus", colocarCursorAlInicio);

//alerta de mayusculas y acentos
function verificarTexto(texto) {
    for (let i = 0; i < texto.length; i++) {
        //verificar mayusculas
        if (texto[i] >= 'A' && texto[i] <= 'Z') {
            swal('', 'Sólo palabras sin mayúsculas. Intenta de nuevo.','error');
            return false;
        }

        //verificar acentos
        if (['á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú'].includes(texto[i])) {
            swal('','Sólo palabras sin acentos. Intenta de nuevo.','error');
            return false;
        }
    }

    return true;
}


botonDesencriptar.onclick = desencriptar;

botonEncriptar.onclick = function() {
    let textoAEncriptar = document.getElementById("textoEncriptar").value;
    
    if (verificarTexto(textoAEncriptar)) {
        encriptar();
    }
};

botonCopiar.onclick = copiar;
