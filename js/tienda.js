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
    new Curso(7, 'Practica libre 1hr', '../imagenes/pubCoffeMachine.png', 1500, 'INTERMEDIO', '', 'Uso libre del equipamiento,.'),
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
        <div>
            <div class="card-body">
                <p class="card-text">NIVEL ${curso.nivel}</p>
                <p class="card-text">${curso.requerimiento}</p>
                <p class="card-text">${curso.listaTemario}</p>
                <button id="${curso.id} " class="btnCarrito"> agregar </button>
            </div>
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
        item.className = 'item';
        const carritohtml = document.getElementById('carrito');

        item.innerHTML = `<h5>${addcurso.titulo}</h5>
        <h5>$${addcurso.precio}</h5>`;

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



