const frases = [
    'En casa de herrero cuchillo de palo', 
    'Dime con quien andas y te diré quien eres', 
    'Más vale pajaro en mano que 100 volando', 
    'Al que madruga Dios le ayuda', 
    'Has el bien sin mirar a quien'
]; 
const imprimirHola = () =>{
    alert("Hola Mundo"); 
}


const mostrarFrase = (elementoDom) =>{
    debugger;
    let frase = frases[Math.floor(Math.random()*5)]; 
    elementoDom.insertAdjacentHTML( 'beforeend', `<p>"${frase}"</p>`); 
}

export {imprimirHola, mostrarFrase}; 