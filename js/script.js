let nombreUsuario = prompt('Ingresa tu nombre');
let apellidoUsuario = prompt('Ingresa tu apellido');

if ((nombreUsuario != '') && (apellidoUsuario != '')) {
    alert('Bienvenido ' + nombreUsuario + ' al Showcenter, el mejor cine de la Republica Argentina!');
} else {
    alert('Error al ingresar nombre y apellido, vuelva a intentarlo');
}

alert('Mira todas las peliculas que tenemos en cartelera para vos');

let opcion = prompt('Selecciona la pelicula que desearias ver. \n 1. Minions: nace un villano \n 2. Thor: amor y trueno \n 3. Lightyear \n 4.  Jurassic World: Dominion \n 5. The Black Phone \n 6. Top Gun: Maverick \n Presiona X para finalizar')


while (opcion != 'X' && opcion != 'x') {
    switch (opcion) {
        case '1':
            alert('Elegiste Minions: nace un villano');
            let horarioFuncion = 22
            let horarioFuncion2 = 23
            alert('El horario disponible para esta pelicula es '+horarioFuncion+'hs y '+horarioFuncion2+' hs')
            let horaPublico = prompt ('Selecciona el horario de la funcion')
            if (horaPublico == horarioFuncion){
                alert('Nos vemos a las '+horarioFuncion+'hs')
            }else if (horaPublico == horarioFuncion2){
                alert('Nos vemos a las '+horarioFuncion2+'hs')
            }else {
                alert('Elegiste un horario incorrecto')
            }
            break;
        case '2':
            alert('Elegiste Thor: amor y trueno');
            let horarioFuncion3 = 20
            let horarioFuncion4 = 22
            alert('El horario disponible para esta pelicula es '+horarioFuncion3+'hs y '+horarioFuncion4+'hs')
            let horaPublico2 = prompt ('Selecciona el horario de la funcion')
            if (horaPublico2 == horarioFuncion3){
                alert('Nos vemos a las '+horarioFuncion3+'hs')
            }else if (horaPublico2 == horarioFuncion4){
                alert('Nos vemos a las '+horarioFuncion4+'hs')
            }else {
                alert('Elegiste un horario incorrecto')
            }
            break;
        case '3':
            alert('Elegiste Lightyear');
            let horarioFuncion5 = 19
            let horarioFuncion6 = 21
            alert('El horario disponible para esta pelicula es '+horarioFuncion5+'hs y '+horarioFuncion6+'hs')
            let horaPublico3 = prompt ('Selecciona el horario de la funcion')
            if (horaPublico3 == horarioFuncion5){
                alert('Nos vemos a las '+horarioFuncion5+'hs')
            }else if (horaPublico3 == horarioFuncion6){
                alert('Nos vemos a las '+horarioFuncion6+'hs')
            }else {
                alert('Elegiste un horario incorrecto')
            }
            break;
        case '4':
            alert('Elegiste Jurassic World: Dominion');
            let horarioFuncion7 = 19
            let horarioFuncion8 = 22
            alert('El horario disponible para esta pelicula es '+horarioFuncion7+'hs y '+horarioFuncion8+' hs')
            let horaPublico4 = prompt ('Selecciona el horario de la funcion')
            if (horaPublico4 == horarioFuncion7){
                alert('Nos vemos a las '+horarioFuncion7+'hs')
            }else if (horaPublico4 == horarioFuncion8){
                alert('Nos vemos a las '+horarioFuncion8+'hs')
            }else {
                alert('Elegiste un horario incorrecto')
            }
            break;
        case '5':
            alert('Elegiste The Black Phone');
            let horarioFuncion9 = 23
            let horarioFuncion10 = 00
            alert('El horario disponible para esta pelicula es '+horarioFuncion5+'hs y '+horarioFuncion10+'hs')
            let horaPublico5 = prompt ('Selecciona el horario de la funcion')
            if (horaPublico5 == horarioFuncion9){
                alert('Nos vemos a las '+horarioFuncion9+'hs')
            }else if (horaPublico5 == horarioFuncion10){
                alert('Nos vemos a las '+horarioFuncion10+'hs')
            }else {
                alert('Elegiste un horario incorrecto')
            }
            break;
        case '6':
            alert('Elegiste Top Gun: Maverick');
            let horarioFuncion11 = 21
            let horarioFuncion12 = 23
            alert('El horario disponible para esta pelicula es '+horarioFuncion11+'hs y '+horarioFuncion12+'hs')
            let horaPublico6 = prompt ('Selecciona el horario de la funcion')
            if (horaPublico6 == horarioFuncion11){
                alert('Nos vemos a las '+horarioFuncion11+'hs')
            }else if (horaPublico6 == horarioFuncion12){
                alert('Nos vemos a las '+horarioFuncion12+'hs')
            }else {
                alert('Elegiste un horario incorrecto')
            }
            break;

        default:
            alert('Elegiste una opcion no valida');
            break;
    }
    opcion = prompt('Selecciona la pelicula que desearias ver. \n 1. Minions: nace un villano \n 2. Thor: amor y trueno \n 3. Lightyear \n 4.  Jurassic World: Dominion \n 5. The Black Phone \n 6. Top Gun: Maverick \n presiona X para finalizar')

}