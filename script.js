const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

const texto1 = document.querySelector(".texto1");
const texto2 = document.querySelector(".texto2");
const informacion = document.querySelector(".informacion");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function btnEncriptar(){

    if (mensaje.value == "" && textArea.value == "") {
        alert("Ingrese un mensaje");
        mensaje.style.backgroundImage = "none";
        
    }
    else {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";

        // Cambiar el mensaje en texto1
        texto1.textContent = "¡ Se ha encriptado el mensaje !";

        // Limpiar los mensajes en texto2
        texto2.style.display = "none";
        informacion.textContent = "Solo letras minúsculas y sin acentos";
    }
    
}

//Function de Encriptación
function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return stringEncriptada;
}

    function btnDesencriptar(){
        const textoEncriptado = desencriptar(textArea.value)
        mensaje.value = textoEncriptado;
        textArea.value = "";
        informacion.textContent = "Desencriptado";
        
    }

    //Function de Desencriptación
function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }
    return stringDesencriptada
}

//Function BtnCopiar
/*
function btnCopiar(){
    navigator.clipboard.writeText(mensaje.value);
}
--------------------
function limpiar(){
    mensaje.value = "";
    mensaje.style.backgroundImage = "url(img/Muñeco.png)"
}
-------------------
*/

function btnCopiar(){
    
    if (mensaje.value == "" && textArea.value == "") {
        alert("Ingrese un mensaje");
    } else {
        navigator.clipboard.writeText(mensaje.value);
        //mensaje.select();
        mensaje.value = "";
        texto2.value = " ";  
        alert("Se copió el texto")
        texto1.style.display = "none";
        texto2.style.display = "none";
    }
    
}
