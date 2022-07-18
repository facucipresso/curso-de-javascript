let nombreUsuario = prompt('Ingresa tu nombre');
let apellidoUsuario = prompt('Ingresa tu apellido');

if ((nombreUsuario != '') && (apellidoUsuario != '')) {
    alert('Bienvenido ' + nombreUsuario + ' al Showcenter, el mejor cine de la Republica Argentina!');
} else {
    alert('Error al ingresar nombre y apellido, vuelva a intentarlo');
}

alert('Mira todas las peliculas que tenemos en cartelera para vos');

let opcion = prompt('Selecciona la pelicula que desearias ver. \n 1. Minions: nace un villano \n 2. Thor: amor y trueno \n 3. Lightyear \n 4.  Jurassic World: Dominion \n 5. The Black Phone \n 6. Top Gun: Maverick \n Presiona X para finalizar')


function mostrarInfo (nombreFuncion, horario1, horario2) {
    alert('Elegiste '+ nombreFuncion);
    alert ('El horario disponible para esta pelicula es '+horario1+' hs y '+horario2+' hs');
    let horaPublico = prompt('Selecciona el horario de la funcion');
    if (horaPublico==horario1){
        alert('nos vemos a las '+horario1+' hs');
    }else if(horaPublico==horario2){
        alert('Nos vemos a las '+horario2+' hs');
    }else {
        alert('Elegiste un horario incorrecto')
    }
}



while (opcion != 'X' && opcion != 'x') {
    switch (opcion) {
        case '1':
            mostrarInfo('Minions: nace un villano', 22,23);
            break;
        case '2':
            mostrarInfo(' Thor: amor y trueno', 20, 22);
            break;
        case '3':
            mostrarInfo('Lightyear', 19, 21);
            break;
        case '4':
            mostrarInfo ('Jurassic World: Dominion', 19, 22);
            break;
        case '5':
            mostrarInfo('The Black Phone', 23, 00);
            break;
        case '6':
            mostrarInfo('Top Gun: Maverick', 21, 23);
            break;
        default:
            alert('Elegiste una opcion no valida');
            break;
    }
    opcion = prompt('Selecciona la pelicula que desearias ver. \n 1. Minions: nace un villano \n 2. Thor: amor y trueno \n 3. Lightyear \n 4.  Jurassic World: Dominion \n 5. The Black Phone \n 6. Top Gun: Maverick \n presiona X para finalizar')

}