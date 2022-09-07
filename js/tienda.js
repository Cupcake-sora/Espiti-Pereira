
class Curso {
    constructor(id, titulo, img, precio, nivel, requerimiento, listaTemario) {
        this.id = id;
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


let cursos = [
    new Curso(0, 'Filtrados I', '../imagenes/cafefl.jpg', 1200, 'INICIAL', '', 'Calibracion de espresso. \nEmulsion de leches..'),
    new Curso(1, 'Filtrados II', '../imagenes/cafefl.jpg', 1500, 'INTERMEDIO', '', 'Limpieza de equipos.'),
    new Curso(2, 'Filtrados III', '../imagenes/cafefl.jpg', 1500, 'AVANZADO', '', 'Preparación de filtrados para exposiciones o competencias internacionales. \nNivel de preparación simil SCA.'),
    new Curso(3, 'Filtrados IV', '../imagenes/cafefl.jpg', 1200, 'AVANZADO', '', 'Nivel de preparación simil SCA.'),
    new Curso(4, 'Latte-art I', '../imagenes/cafeex.jpg', 1200, 'INICIAL', '', 'Emulsión de distintas leches.'),
    new Curso(5, 'Latte-art II', '../imagenes/cafeex.jpg', 1400, 'INTERMEDIO', '', 'Dibujos complejos, adaptación a distintas pitchers.'),
    new Curso(6, 'Calibración de molienda', '../imagenes/cafemk.jpg', 1300, 'INTERMEDIO', '', 'Identificación y calibración para distintos métodos.'),
    new Curso(7, 'Practica libre 1hr', '../imagenes/pubCoffeMachine.png', 1500, 'INTERMEDIO', '', 'Uso libre del equipamiento.'),
];

function agregartarjeta() {
    const contenedorTarjeta = document.getElementById('cursos');
    let string = "";
    for (const curso of cursos) {
        string += `
    <div class="card m-2" style="width: 18rem;">
        <div>
            <h5 class="card-header">${curso.titulo}</h5>
            <img class="card-img" src="${curso.img}" alt="Curso de filtrados 1">
            <h5 class="card-title">$${curso.precio}</h5>
        </div>
        <div class="card-body">
            <p class="card-text">NIVEL ${curso.nivel}</p>
            <p class="card-text">${curso.requerimiento}</p>
            <p class="card-text">${curso.listaTemario}</p>
        </div>
        <div class="card-footer">
            <button id="${curso.id} " class="btn btn-outline-dark btnCarrito"> agregar </button>
        </div>
    </div>`;

    }
    contenedorTarjeta.innerHTML = string;

    const btnCarrito = document.querySelectorAll('.btnCarrito');
    btnCarrito.forEach(btn => {
        btn.addEventListener('click', () => {
            let idobject = parseInt(btn.id);
            let objeto = cursos.find((curso) => curso.id == idobject);
            addcarrito(objeto);
        })
    });

}

agregartarjeta();


let carrito = [];

function addcarrito(addcurso) {
    let cursocarrito = carrito.find((curso) => curso.id == addcurso.id);

    if (cursocarrito == undefined) {
        carrito.push(addcurso);

        const item = document.createElement('div');
        item.className = 'card item';
        const carritohtml = document.getElementById('carrito');

        item.innerHTML = `<p class="card-header">${addcurso.titulo}</p>
        <p class="text-end">$${addcurso.precio}</p>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash2" viewBox="0 0 16 16">
            <path d="M14 3a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2zM3.215 4.207l1.493 8.957a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836l1.493-8.957C11.69 4.689 9.954 5 8 5c-1.954 0-3.69-.311-4.785-.793z"/>
        </svg>
        `;

        const items = document.querySelectorAll('.item');

        carritohtml.append(item);
    }

}




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



