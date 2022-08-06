/* let nombreUsuario = prompt('Ingresa tu nombre');
let apellidoUsuario = prompt('Ingresa tu apellido');

let tituloPro = document.querySelector('.llenarConNombre');

let nuevoTitulo =('Bienvenido ' + nombreUsuario + ' a Showcenter, el mejor cine de la Republica Argentina!');  

/* let bienvenida = document.createElement('h3');
bienvenida.className = 'ConNombre';
bienvenida.innerHTML = `<h3>Bienvenido ${nombreUsuario} a Showcenter, el mejor cine de la Republica Argentina!</h3>`;
nuevoH.apendChild(bienvenida);  */

/* 
if ((nombreUsuario != '') && (apellidoUsuario != '')) {
    tituloPro.innerText = nuevoTitulo;
} else {
    alert('Error al ingresar nombre y apellido, vuelva a intentarlo');
}

alert('Mira todas las peliculas que tenemos en cartelera para vos'); 
 */




/*  const peliculas= ['1. Minions: nace un villano',  '2. Thor: amor y trueno', '3. Lightyear', '4. Jurassic World: Dominion', '5. The Black Phone', '6. Top Gun: Maverick', 'Presiona X para finalizar']
 */
/* let opcion = prompt('Selecciona la pelicula que desearias ver: '+ peliculas);

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
} */


/* while (opcion != 'X' && opcion != 'x') {
    switch (opcion) {
        case '1':
            mostrarInfo('Minions: nace un villano', 22,23);
            peliculasSeleccionadas.push(peliculasEnCartelera[0]);
            break;
        case '2':
            mostrarInfo(' Thor: amor y trueno', 20, 22);
            peliculasSeleccionadas.push(peliculasEnCartelera[1]);
            break;
        case '3':
            mostrarInfo('Lightyear', 19, 21);
            peliculasSeleccionadas.push(peliculasEnCartelera[2]);
            break;
        case '4':
            mostrarInfo ('Jurassic World: Dominion', 19, 22);
            peliculasSeleccionadas.push(peliculasEnCartelera[3]);
            break;
        case '5':
            mostrarInfo('The Black Phone', 23, 00);
            peliculasSeleccionadas.push(peliculasEnCartelera[4]);
            break;
        case '6':
            mostrarInfo('Top Gun: Maverick', 21, 23);
            peliculasSeleccionadas.push(peliculasEnCartelera[5]);
            break;
        default:
            alert('Elegiste una opcion no valida');
            break;
    }
    opcion = prompt('Selecciona la pelicula que desearias ver: '+ peliculas);
}
 */



/* const filtradoPorHorario = peliculasEnCartelera.filter((pelicula) => pelicula.horario1 <=22);

const filtradoPorHorario2 = peliculasEnCartelera.filter((pelicula) => pelicula.horario2 <=22);


console.log(filtradoPorHorario);
console.log(filtradoPorHorario2);


const busquedaPorGenero = peliculasEnCartelera.find ((pelicula) => pelicula.genero == 'terror');
console.log(busquedaPorGenero);

const busquedaPorGenero1 = peliculasEnCartelera.find ((pelicula) => pelicula.genero == 'accion');
console.log(busquedaPorGenero1);

const busquedaPorGenero2 = peliculasEnCartelera.find ((pelicula) => pelicula.genero == 'infantil');
console.log(busquedaPorGenero2);

const busquedaPorGenero3 = peliculasEnCartelera.find ((pelicula) => pelicula.genero == 'aventura' );
console.log(busquedaPorGenero3);


let elementoID = document.getElementById('subtituloEstrenos');
console.log(elementoID);

let elementostag = document.getElementsByTagName('h2');
console.log(elementostag);

let titulo = document.querySelector('.tituloPrincipal');
console.log(titulo);
 */

/* const btnComprarEntradas = document.getElementById('topGun');
const btnComprarEntradas1 = document.getElementById('jurassicWorld');
const btnComprarEntradas2= document.getElementById('Lightyear');
const btnComprarEntradas3= document.getElementById('Minions');
const btnComprarEntradas4= document.getElementById('Thor');
const btnComprarEntradas5= document.getElementById('elTelefononNegro');



function comprarEntTopGun (){
    alert('Estas por comprar entradas para ver "Top Gun: Maverick"')
}
function comprarEntJurassicWord (){
    alert('Estas por comprar entradas para ver "Jurassic World: Dominion"')
}
function comprarEntlightyear (){
    alert('Estas por comprar entradas para ver "TLightyear"')
}
function comprarEntMinions (){
    alert('Estas por comprar entradas para ver "Minions: nacae un villano"')
}
function comprarEntThor (){
    alert('Estas por comprar entradas para ver "Thor: Love and Thunder"')
}
function comprarEntElTelefononNegro (){
    alert('Estas por comprar entradas para ver "El Telefono Negro"')
} 
 



btnComprarEntradas.addEventListener('click', comprarEntTopGun);
btnComprarEntradas1.addEventListener('click', comprarEntJurassicWord);
btnComprarEntradas2.addEventListener('click', comprarEntlightyear);
btnComprarEntradas3.addEventListener('click', comprarEntMinions);
btnComprarEntradas4.addEventListener('click', comprarEntThor);
btnComprarEntradas5.addEventListener('click', comprarEntElTelefononNegro); */


let cards = document.getElementById('cards');

const peliculasEnCartelera = [{ id: '1', titulo: 'Minions: nace un villano',imagen: 'minions-1.jpg',alt: 'foto Minions', genero: 'infantil', horario1: 22, horario2: 23, capacidadTotal: 50, capacidadDisponible: 29, img: src = "" }, { id: '2', titulo: 'Thor: amor y trueno',imagen: 'thor-1.jpg' ,alt: 'foto Thor', genero: 'accion', horario1: 20, horario2: 22, capacidadTotal: 50, capacidadDisponible: 25 }, { id: '3', titulo: 'Lightyear', imagen: 'lightyear-1.jpg', alt: 'foto Lightyear', genero: 'infantil', horario1: 19, horario2: 21, capacidadTotal: 50, capacidadDisponible: 40 }, { id: '4', titulo: 'foto Jurassic World: Dominion',imagen: 'jurassic-word-1.jpg', alt:'Jurassic World',  genero: 'accion', horario1: 19, horario2: 22, capacidadTotal: 50, capacidadDisponible: 10 }, { id: '5', titulo: 'The Black Phone',imagen: 'el_telefono_negro-1.jpg' ,alt: 'foto The Black Phone', genero: 'terror', horario1: 23, horario2: 00, capacidadTotal: 50, capacidadDisponible: 19 }, { id: '6', titulo: 'Top Gun: Maverick',imagen: 'top-gun.jpg' ,alt: 'foto Top Gun: Maverick', genero: 'accion', horario1: 21, horario2: 23, capacidadTotal: 50, capacidadDisponible: 2 }
]

const peliculasSeleccionadas = []

const btnEntradas = document.getElementsByClassName('entradas');

function mostrarInfo() {
    const checkoutPeliculas = document.getElementById('checkoutPeliculas');
    checkoutPeliculas.innerHTML = '';

    for (const pelicula of peliculasSeleccionadas) {
        checkoutPeliculas.innerHTML += `
            <div class="card" style="width: 18rem;">
            <img src="../clase-1/recursos/${pelicula.imagen}" class="card-img-top" alt="${pelicula.alt}">
            <div class="card-body">
                <h5 class="card-title">${pelicula.titulo}</h5>
                <p class="card-text">Genero:${pelicula.genero}</p>
                <a href="#" data-id="${pelicula.id}" class="btn btn-danger btn-borrar">Borrar</a>
            </div>
            </div>`
    }
    const arraybtnBorrar = document.getElementsByClassName('btn-borrar');
    for (const btnBorrar of arraybtnBorrar) {
        btnBorrar.addEventListener('click', (e) => {
            const idPelicula = e.target.getAttribute('data-id');
            const indiceElemento = peliculasSeleccionadas.findIndex(item => item.id === idPelicula)
            peliculasSeleccionadas.splice(indiceElemento, 1)
            mostrarInfo();

        })
    }

}

function compraDeEntradas(evento) {
    const idSeleccionado = evento.target.id
    const peliculasAgregadas = peliculasEnCartelera.find(pelicula => pelicula.id === idSeleccionado);
    peliculasSeleccionadas.push(peliculasAgregadas);
    console.log(peliculasSeleccionadas);
    mostrarInfo();
}

for (var i = 0; i < btnEntradas.length; i++) {
    btnEntradas[i].addEventListener('click', compraDeEntradas);   
}

const estrenos = document.getElementById('subtituloEstrenos');

for (const pelicula of peliculasEnCartelera) {
    estrenos.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="../clase-1/recursos/${pelicula.imagen}" class="card-img-top" alt="${pelicula.alt}">
            <div class="card-body">
                <h5 class="card-title">${pelicula.titulo}</h5>
                <p class="card-text">Genero:${pelicula.genero}</p>
                <a href="#" data-id="${pelicula.id}" class="btn btn-primary btn-entradas entradas">entradas</a>
            </div>
        </div>` 
}

sessionStorage.setItem('peliculas', JSON.stringify(peliculasSeleccionadas));
let peliculasRecuperadas = JSON.parse(sessionStorage.getItem('peliculas'));
console.log(peliculasRecuperadas);