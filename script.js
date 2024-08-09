/*Declaracion de las variables a utilizar, estas adquieren el valor de los TextArea*/
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/*Funcion que obtiene el valor ingresado en el textArea y lo encripta en el textArea de mensaje*/
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

/*Funcion para asignar el nuevo valor a cada letra a encriptar*/
function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

/*Funcion para obtener el valor del ingresado y desencriptarlo en el textArea de mensaje*/
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

/*Funcion para asignar el nuevo valor a cada letra al desencriptar*/
function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

/*Funcion que obtiene el valor del campo de mensaje y muestra una alerta en ventana emergente*/
function copyText(){
    let inputText = document.getElementById("msj");
    inputText.select();
    navigator.clipboard.writeText(inputText.value);
    alert("Texto copiado");
}