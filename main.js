// let TextEncript ="";
function clear(){
    document.getElementById("textInp").value = ""; /* funcion de borrar el texto con darle clic */
}


function copiartexto(){ /* funcion para copiar con el boton "copiar text" lo que hay en el text area */
// clear();    
    var aux = document.createElement("input"); /* creamos un elemento auxiliar */
    aux.setAttribute("value", document.getElementById("resp").innerHTML); /* leemos lo que hay en el textarea */
    document.body.appendChild(aux); 
    aux.select();
    document.execCommand("copy");/* usamos la funcion excComand para copiar al porta papeles */
    document.getElementById("textInp").innerHTML = aux;
    document.body.removeChild(aux); /* borramos el elemento auxiliar */
    let pasteText = document.querySelector("input");
    pasteText.focus();
    pasteText.innerHTML = aux.value;
    // console.log(pasteText.textContent);
    // console.log(pasteText.value);
    // console.log(aux.value);
    document.getElementById("textInp").value = aux.value;

  
}


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"



function encript() { /* funcion de encriptar */
const vocals = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u":"ufat",
};
  document.getElementById("alura-1").style.display = "none";
  let vartxt = document.getElementById("textInp").value;
 

//   var vartxt = textoaencript ;
  for (var key in vocals) {
      vartxt = vartxt.replace(new RegExp(key,"g"), vocals[key]);
      console.log(vartxt);
  }
  encriptado = vartxt;
  console.log(vartxt);


  // document.getElementById("resp").style.display = "block"; /* se muestra el textarea*/
  document.getElementById("resp").style.display = "block"; /* se muestra el textarea*/
  document.getElementById("btncopiar").style.display = "block";
  
  
  // document.getElementById("btoncopiar").style.display = "block"; /* no fue posible por el nombre de clase. Se muestra el boton copiar */
  let textarea = document.getElementById("resp"); 
  textarea.innerHTML = encriptado; /* se escribe en el textarea */
  textarea.innerHTML = vartxt; /* se escribe en el textarea */
 
}


function desencript(){

    const vocals = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u":"ufat",
    };
      document.getElementById("alura-1").style.display = "none";
      let vartxt = document.getElementById("textInp").value;
     
    
    //   var vartxt = textoaencript ;
      for (var key in vocals) {
          vartxt = vartxt.replace(new RegExp(vocals[key],"g"), key);
          console.log(vartxt);
      }
      encriptado = vartxt;
      console.log(vartxt);
    
    
      document.getElementById("resp").style.display = "block"; /* se muestra el textarea*/
      document.getElementById("btncopiar").style.display = "block"; /* no fue posible por el nombre de clase. Se muestra el boton copiar */
      let textarea = document.getElementById('resp'); 
      textarea.innerHTML = encriptado; /* se escribe en el textarea */
}
