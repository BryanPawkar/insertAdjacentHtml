import { imprimirHola, mostrarFrase } from "./module.js";
const boton = document.getElementById("boton");
const contenedor = document.getElementById("contenedor"); 

imprimirHola(); 

boton.addEventListener('click', ()=>{
    mostrarFrase(contenedor); 
})