const textArea = document.querySelector(".textArea");
const mensaje = document.querySelector(".mensaje");

// Las "llaves" de encriptación:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

//Función botón de encriptar:
function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    document.getElementById("miContenedor").style.display = "none";
}


//Función de encriptar:
function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}


//Función botón de desencriptar:
function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}


//Función de desencriptar:
function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

//-----------------------------------------------------------------------------------------------

/// Variable para realizar el seguimiento del estado de la alerta
let alertaMostrada = false;

// Funcion botón de copiar:
function copiarTextoEncriptado() {
    const textoEncriptado = mensaje.value;

    // Copiar el texto encriptado al portapapeles
    navigator.clipboard.writeText(textoEncriptado)
        .then(() => {
            console.log("Texto encriptado copiado al portapapeles: " + textoEncriptado);
            
            // Verificar si la alerta ya se ha mostrado
            if (!alertaMostrada) {
                alertaMostrada = true;
                alert("Texto encriptado copiado al portapapeles. Pégalo para desencriptar.");
            }
        })
        .catch(err => {
            console.error("Error al copiar el texto encriptado: ", err);
            
            // Verificar si la alerta ya se ha mostrado
            if (!alertaMostrada) {
                alertaMostrada = true;
                alert("Error al copiar el texto encriptado. Intenta nuevamente.");
            }
        });
}

// Asignar el evento click al botón de copiar
const botonCopiar = document.querySelector(".botonCopiar");
botonCopiar.addEventListener("click", copiarTextoEncriptado);
