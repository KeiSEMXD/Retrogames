
const juegosRetro = [
    {
        nombre: "Super Mario Bros",
        descripcion: "Un clásico de plataformas. ¡Salva a la princesa Peach!",
        precio: 500,
        imagen: "img/mario.jpg"
    },
    {
        nombre: "The Legend of Zelda",
        descripcion: "Explora mazmorras y derrota a Ganon.",
        precio: 620,
        imagen: "img/zelda.jpg"
    },
    {
        nombre: "Street Fighter II",
        descripcion: "El juego de peleas que marcó una época.",
        precio: 350,
        imagen: "img/Street2.jpg"
    },
  
    {
        nombre: "Star Fox",
        descripcion: "El juego de naves mas extremo de todos.",
        precio: 450,
        imagen: "img/starfox.jpg"
    },

    {
        nombre: "Earthbound",
        descripcion: "Un RPG único con un estilo moderno y humorístico.",
        precio: 700,
        imagen: "img/EarthBound.jpg"
    },
    {
        nombre: "Teenage mutant ninja turtles",
        descripcion: "El mejor beat them up the la epoca.",
        precio: 1000,
        imagen: "img/ninja.jpg"
    }


];


// Selecciona el contenedor donde irán los productos
const contenedor = document.getElementById("productosDestacados");

// Genera las cards dinámicamente
juegosRetro.forEach(juego => {
    // Crea el HTML de cada producto
    const card = `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img src="${juego.imagen}" class="card-img-top" alt="${juego.nombre}">
          <div class="card-body">
            <h5 class="card-title">${juego.nombre}</h5>
            <p class="card-text">${juego.descripcion}</p>
            <span class="badge bg-success">$${juego.precio}</span>
            <a href="#" class="btn btn-primary float-end">Ver más</a>
          </div>
        </div>
      </div>
    `;
    // Agrega la card al contenedor
    contenedor.innerHTML += card;
});
function mostrarJuegos(lista) {
    const contenedor = document.getElementById("productosDestacados");
    contenedor.innerHTML = ""; // Limpia antes de mostrar
    lista.forEach(juego => {
        const card = `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
            <img src="${juego.imagen}" class="card-img-top" alt="${juego.nombre}">
            <div class="card-body">
                <h5 class="card-title">${juego.nombre}</h5>
                <p class="card-text">${juego.descripcion}</p>
                <span class="badge bg-success">$${juego.precio}</span>
                <a href="#" class="btn btn-primary float-end ver-mas" data-nombre="${juego.nombre}">Ver más</a>

            </div>
            </div>
        </div>
        `;
        contenedor.innerHTML += card;
    });
}
mostrarJuegos(juegosRetro);

// Busqueda dinamica
const buscador = document.getElementById('buscador');

buscador.addEventListener('input', function() {
    const texto = buscador.value.toLowerCase();
    const juegosFiltrados = juegosRetro.filter(juego =>
        juego.nombre.toLowerCase().includes(texto)
    );
    mostrarJuegos(juegosFiltrados);
});


// Delegación de eventos para los botones "Ver más"
document.addEventListener("click", function(event) {
  // ¿El clic fue en un botón con la clase 'ver-mas'?
  if (event.target.classList.contains("ver-mas")) {
    event.preventDefault(); // Prevenir navegación
    const nombre = event.target.getAttribute("data-nombre");
    alert(`¡${nombre} es uno de los juegos más icónicos de la historia!`);
  }
});

 