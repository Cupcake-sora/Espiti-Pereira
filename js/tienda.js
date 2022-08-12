class curso {
    constructor(titulo, img, precio, nivel, requerimiento, listaTemario, id) {
        this.titulo = titulo.toUpperCase();
        this.img = img;
        this.precio = parseInt(precio);
        this.nivel = nivel.toUpperCase();

        if (this.nivel == 'INICIAL') {
            this.requerimiento = 'NO REQUIERE CONOCIMIENTOS PREVIOS';
        }
        else {
            this.requerimiento = 'REQUIERE CONOCIMIENTOS PREVIOS';
        }

        this.listaTemario = listaTemario.toLowerCase();
    }
}


let cursos = [{
    titulo: 'Filtrados I',
    img: '../imagenes/cafefl.jpg',
    precio: 12000,
    nivel: 'INICIAL',
    requerimiento: '',
    listaTemario: 'Calibracion de espresso. \nEmulsion de leches.',
}, {
    titulo: 'Filtrados II',
    img: '../imagenes/cafefl.jpg',
    precio: 15000,
    nivel: 'INTERMEDIO',
    requerimiento: '',
    listaTemario: 'Limpieza de equipos.',
}, {
    titulo: 'Filtrados III',
    img: '../imagenes/cafefl.jpg',
    precio: 15000,
    nivel: 'AVANZADO',
    requerimiento: '',
    listaTemario: 'Preparación de filtrados para exposiciones o competencias internacionales. \nNivel de preparación simil SCA.',
}];

const contenedorTarjeta = document.getElementById('cursos');
let string = "";
for (const curso of cursos) {
    string += `
    <div class="card m-2" style="width: 18rem;">
    <div>
        <h5 class="card-header">
            ${curso.titulo}
        </h5>
        <img class="card-img" src="${curso.img}" alt="Curso de filtrados 1">
        <h5 class="card-title">$${curso.precio}</h5>
    </div>
    <div>
        <div class="card-body">
            <p class="card-text">NIVEL ${curso.nivel}</p>
            <p class="card-text">${curso.requerimiento}</p>
            <p class="card-text">${curso.listaTemario}</p>
        </div>
    </div>
    </div>`;
    
}
contenedorTarjeta.innerHTML=string;


//-----------------------------------------------------------------------------------------


//class para contruir
//construir los cursos
//construir los productos cafe
//construir los productos de tienda

//const para arrays
// hacer array para los cursoss
// hacer array para cafes
// hacer array para productos de tienda

//crear las secciones de los arrays
//usar document.getElement (para ingresar a la etiqueta)
//document.createElement (para crear un elemento dentro de la etiqueta)
// y (div, section).append



