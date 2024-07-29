let númeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteado = [];
let numeroMaximo = 10;

console.log(númeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento() {
    let númeroDeUsurio = parseInt(document.getElementById('valorUsuario').value);

    if (númeroDeUsurio === númeroSecreto) {
         asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ?'vez' : 'veces'}`)
         document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
       //El usuario no acertó. 
        if (númeroDeUsurio > númeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        }   else {
            asignarTextoElemento('p','El número secreto es mayor');
        } 
        intentos++;  
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
  }

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
  
    console.log(numeroGenerado);
    console.log(listaNumerosSorteado);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteado.length == numeroMaximo) {
        asignarTextoElemento('P', 'Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista
        if (listaNumerosSorteado.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }    else {
            listaNumerosSorteado.push(numeroGenerado);
            return numeroGenerado; 
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al  ${numeroMaximo}`);
    númeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar elnumero aleatorio
    // Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}



condicionesIniciales();