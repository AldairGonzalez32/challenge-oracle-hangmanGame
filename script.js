var vocales = ["a", "e", "i", "o", "u"];
var vocalesT = ["ai", "enter", "imes", "ober", "ufat"]
var Mensaje = "este mensaje es para probar el encriptador";
var Coincidencia = false

function Encriptar(Mensaje){
    var MensajeEncriptado = ""
    for(var i = 0; (i < Mensaje.length ); i++){
        Coincidencia = false;
        for(j = 0; j < vocales.length; j++){
            if(Mensaje[i] == vocales[j]){
                MensajeEncriptado = MensajeEncriptado + vocalesT[j]
                Coincidencia = true 
            }
        }if (!Coincidencia){
            MensajeEncriptado = MensajeEncriptado + Mensaje[i]
        }               
       }    
    return MensajeEncriptado
};

function Desencriptar(Mensaje){   
    MensajeDesencriptado = ""
    MensajeDesencriptado = Mensaje.replace(/ai/g, "a")
    MensajeDesencriptado = MensajeDesencriptado.replace(/enter/g, "e")
    MensajeDesencriptado = MensajeDesencriptado.replace(/imes/g, "i")
    MensajeDesencriptado = MensajeDesencriptado.replace(/ober/g, "o")
    MensajeDesencriptado = MensajeDesencriptado.replace(/ufat/g, "u")

    return MensajeDesencriptado
};
//Se definen los botones y campos de texto que se usarán en 
//encriptación y desencriptación.
BotonEncriptar = document.querySelector("#btn-encriptar");
var TextoAEncriptar = document.querySelector("#input-texto");
BotonDesencriptar = document.querySelector("#btn-desencriptar")
var TextoADesencriptar = document.querySelector("#segundo-campo");

//Definimos los botones para copiar al portapapeles.
BotonCopiar1 = document.querySelector("#btn-copy");
BotonCopiar2 = document.querySelector("#btn-copy2");

TextoAEncriptar.focus();
var Mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
var Acentos = "áéíóúÁÉÍÓÚ"

function TieneMayusculas(texto){
   for(i=0; i<texto.length; i++){
      if (Mayusculas.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
} 
function TieneAcentos(texto){
    for(i=0; i<texto.length; i++){
       if (Acentos.indexOf(texto.charAt(i),0)!=-1){
          return 1;
       }
    }
    return 0;
 } 
BotonEncriptar.addEventListener("click", function(event){
    event.preventDefault();
    if(TieneMayusculas(TextoAEncriptar.value)){
        alert("El texto contiene mayusculas")
        return
    }
    if(TieneAcentos(TextoAEncriptar.value)){
        alert("El texto contiene acentos")
        return
    }
    TextoADesencriptar.value = Encriptar(TextoAEncriptar.value);
});

BotonDesencriptar.addEventListener("click", function(event){
    event.preventDefault();
    if(TieneMayusculas(TextoADesencriptar.value)){
        alert("El texto contiene mayusculas")
        return
    }
    if(TieneAcentos(TextoADesencriptar.value)){
        alert("El texto contiene acentos")
        return
    }
    TextoAEncriptar.value = Desencriptar(TextoADesencriptar.value); 
});

BotonCopiar1.addEventListener("click", function(event){
    event.preventDefault();
    TextoAEncriptar.focus();
    document.execCommand("selectAll");
    document.execCommand("copy")
})
BotonCopiar2.addEventListener("click", function(event){
    event.preventDefault();
    TextoADesencriptar.focus();
    document.execCommand("selectAll");
    document.execCommand("copy")
})