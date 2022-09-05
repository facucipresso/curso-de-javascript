
let cards = document.getElementById('cards');

const peliculasEnCartelera = [{ id: '1', titulo: 'Minions: nace un villano', imagen: 'minions-1.jpg',alt: 'foto Minions', genero: 'infantil', horario1: 22, horario2: 23, capacidadTotal: 50, capacidadDisponible: 29 }, { id: '2', titulo: 'Thor: amor y trueno', imagen: 'thor-1.jpg' ,alt: 'foto Thor', genero: 'accion', horario1: 20, horario2: 22, capacidadTotal: 50, capacidadDisponible: 25 }, { id: '3', titulo: 'Lightyear', imagen: 'lightyear-1.jpg', alt: 'foto Lightyear', genero: 'infantil', horario1: 19, horario2: 21, capacidadTotal: 50, capacidadDisponible: 40 }, { id: '4', titulo: 'foto Jurassic World: Dominion', imagen: 'jurassic-word-1.jpg', alt:'Jurassic World',  genero: 'accion', horario1: 19, horario2: 22, capacidadTotal: 50, capacidadDisponible: 10 }, { id: '5', titulo: 'The Black Phone', imagen: 'el_telefono_negro-1.jpg' ,alt: 'foto The Black Phone', genero: 'terror', horario1: 23, horario2: 00, capacidadTotal: 50, capacidadDisponible: 19 }, { id: '6', titulo: 'Top Gun: Maverick', imagen: 'top-gun.jpg' ,alt: 'foto Top Gun: Maverick', genero: 'accion', horario1: 21, horario2: 23, capacidadTotal: 50, capacidadDisponible: 2 }
]



const btnEntradas = document.getElementsByClassName('entradas');
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
            Swal.fire({
                position: 'top-center',
                icon: 'warning',
                iconColor: 'red',
                title: '¿Estas seguro que queres eliminar la pelicula?',
                showConfirmButton: true,
                confirmButtonColor: '#b01518',
                confirmButtonText:'Si, quiero borrar', 
              }).then ((confirmacion)=>{
                if (confirmacion.isConfirmed){
                    peliculasSeleccionadas.splice(indiceElemento, 1)
                    mostrarInfo();
                }
              })
        })
    }

}

function compraDeEntradas(evento) {
    const idSeleccionado = evento.target.getAttribute('data-id')
    const peliculasAgregadas = peliculasEnCartelera.find(pelicula => pelicula.id === idSeleccionado);
    peliculasSeleccionadas.push(peliculasAgregadas);
    console.log(peliculasSeleccionadas);
    mostrarInfo();
    Toastify ({
        text: 'Seleccionaste una pelicula para ver',
        duration: 1500,
        style: {
            background: '#660dbf',
            color: 'black',
            width: '15%',
            height: '10%',
            
        },
        offset:{
            x:'10%',
            y:'40%',
        }
    }).showToast();
}

for (var i = 0; i < btnEntradas.length; i++) {
    btnEntradas[i].addEventListener('click', compraDeEntradas);   
}

const peliculasSeleccionadas = []

sessionStorage.setItem('peliculas', JSON.stringify(peliculasSeleccionadas));
let peliculasRecuperadas = JSON.parse(sessionStorage.getItem('peliculas'));
console.log(peliculasRecuperadas);

const DateTime = luxon.dateTime;
const ahora = luxon.DateTime.now(); 
console.log(ahora.toString());
console.log(ahora.toLocaleString());









