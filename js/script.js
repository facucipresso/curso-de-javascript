let nombre = 'Facundo';
let otroNombre = "clara";
//let edad = 24; 
let altura = 1.72;
let letra = 'A';
let cadena ='12';    /* js entiende que es un texto xq esta entre comillas y no va a servir para sumar */



const tatuaje = 'mama me tatue'; 


var noSeUsa = "mas porque no es buena practica";


//declaracion, guardar el espacio en la memoria 
let ciudad;
let pais; 
let edad;

//inincializacion o asignacion es darle valor a esa declaracion 
ciudad = 'Rosario';
pais = "Argentina";
edad = 24;


//operaciones con variables numericas 
let numeroA = 4; 
let numeroB = 9;
const PI = 3.14;

let suma = numeroA+numeroB;
let resta = numeroB-numeroA;
let producto = numeroA*numeroB;
let divicion = numeroA/numeroB
let moduloOResto = numeroA%numeroB


//operaciones con variables de texto 
let palabra1 = 'Hola';
let palabra2 = 'Mundo';
let remate = 'a la grande le puse cuca';
let numero = 27;
let numeroString = '39'

let concatenar1Y2 = palabra1 +""+ palabra2;

let remateNumero = remate +""+ numero; 
let numeroStringYNumero = numeroString + numero;
let fraseEntera = palabra1 +""+ palabra2 +""+ remate;



/* let nombreUsuario = prompt ('Escribi tu nombre');
console.log('hola mundo');
alert('Bienvenido' + nombreUsuario);


console.log (producto);
console.log (nombreUsuario);

let edadUsuario = parseInt(prompt('ingrasa tu edad'));
alert('Tenes' + edadUsuario + 'años');

let alturaUsuario = parseFloat(prompt('ingresa tu altura'));
alert('Y medis' + alturaUsuario + 'mtrs');


let edadEnCinco = edadUsuario + 5; 
let alturaDeseada = alturaUsuario + 0.2; 

alert( 'Tu edad en 5 sera '+ edadEnCinco + 'y tu altura deseada es ' + alturaDeseada + 'mtrs'); */



let edadObligada = 18;
let edadOptativa = 16;
let edadUsuario = parseInt(prompt('ingresa tu edad'));

/* if (edadUsuario >= edadPermitida){
    console.log('podes tomar')
} else{
    console.log('no podes tomar no tenes edad')
} */

/* if (edadUsuario>= edadObligada){
    alert('podes manejar solo')
} else if (edadUsuario>=edadOptativa){
    alert ('podes manejar con acompañante')
} else {
    alert('no podes manejar, anda en bicicleta')
} */

/* if (edadUsuario>=18) {
    console.log ('podes manejar solo')
} else if ( edadUsuario>= edadOptativa) {
    console.log ('podes manejar con acompañante')
} else {
    console.log ('no podes manejar')
} */


let esMayor = edadUsuario>=edadObligada;
/* 
if (esMayor) {
    console.log ('sos mayor');
}else {
    console.log ('no sos mayor');
}

let nombreIngresado = prompt('ingresar nombre');
let apellidoIngresado = prompt('ingresar apellido');

if ((nombreIngresado!="") && (apellidoIngresado != "")) {
    alert ("Nombre: "+ nombreIngresado + "\n Apellido: " + apellidoIngresado);
}else {
    alert('Error: Ingresar nombre y apellido');
}  */


/* for (let i = 1; i <= 10; i++) {
    alert(i);
} */


/* for (let i = 0; i < 3;            i++ ) {
    alert ( 'usted es el jefe de los minisuper? si repeticion n°'+ i);
}

alert( 'gracias vuelvan prontos') */

/* 
for (let i=1; i<=10; i++) {
    console.log(i*3);
} */

/* for (let i = 0; i < 3; i++) {
    let nombre = prompt('ingresa tu nombre');
    console.log('bienvenido '+ nombre);
} */

/* for (let i =1; i<=20; i++) {
    let ingresarNombre = prompt('Ingresar nombre');
    alert('Turno n° '+ i + ' Nombre '+ ingresarNombre);
} */


/* for (let i=0; i<10;i++) {
    if (i == 4) {
        alert ('la variable es 4');
        break;
    }
    console.log(i);
} */

/* let colorSecreto = 'verde';
let pedidoBruja = prompt('Que color queres?');

while (pedidoBruja!= colorSecreto) {
    alert('no tenemos color '+ pedidoBruja);
    pedidoBruja = prompt('Que color queres?');
}
alert( colorSecreto+' corre como loco'); */


/*  let passGuardado = 'facupro';
 let continuar = true;

 do {
    let password = prompt( 'ingresa tu password');
    if (passGuardado==password){
        alert('Bienvenido');
        continuar = false;
        break;
    }
 } while (continuar);


 let opcion = prompt('Ingresa una opcion. Opcion 1: te con leche, opcion 2: cafe, opcion 3: chocolatada');

 switch (opcion) {
    case '1':
        alert('elegiste te con leche');
        break;
    case '2':
        alert('elegiste cafe');
        break;
    case '3':
        alert('elegiste chocolatada');
        break;
 
    default:
        alert('Elegiste una opcion no valida');
        break;
 } */

//LOGIN DE UNA CUENTA BANCARIA
 let savedPin = '7886';
 let ingresar = false;

 for (let i = 2; i >= 0; i--) {
    let userPin = prompt ('Ingresa tu pin. Tenes '+(i+1)+ '  intentos');
    if (savedPin==userPin){
        alert('Login exitoso');
        ingresar = true;
        break;
    }else{
        alert ('Error. Te quedan '+i+' intentos.')
    }
 }

 
if (ingresar){
    //LOOP DE OPCIONES DEL CAJERO
    let saldo = 1000
    
    let opcion = prompt('elegi una opcion \n1 saldo. \n2: retiro de dinero. \n3: deposito. \npresiona X para finalizar')

    while (opcion != 'X' && opcion != 'x') {
        switch (opcion) {
            case '1':
                alert ('tu saldo es u$s '+ saldo)
                break;
            case '2':
                let retito = parseFloat(prompt('ingresa cantidad a retirar'));
                if ( retiro<= saldo) {
                    saldo = saldo - retiro;
                    alert('T nuevo saldo  es u$s '+ saldo )
                }else {
                    alert('fondos insuficientes');
                }
                break;
            case '3':
                let deposito = parseFloat(prompt('ingresar monto a depositar'));
                saldo = saldo + deposito;
                alert('tu nuevo saldo es u$s '+ saldo);
                break;
        
            default:
                alert('Elegiste una funcion incorrecta')
                break;
        }
    }


}else{
    //aviso de bloqueo
    alert('Retendremos tu tarjeta por seguridad')
}