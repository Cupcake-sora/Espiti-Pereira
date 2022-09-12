
//constructor de curso
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

//array carrito donde recibe los cursos agregados
let carrito = [];


//
function getCursos() {
    fetch("../tienda.json")
        .then(response => response.json().then(data => {
            agregartarjeta(data)
        }))
        .catch(err => console.log(err))
}

//creacion de cursos con cards
//agrego cursos al carrito usando evento click sobre boton "agregar"
//uso de toastify con mensaje notificando que se agrego al carrito
function agregartarjeta(cursos) {
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
            let cursocarrito = carrito.find((curso) => curso.id == objeto.id);
            if (cursocarrito == undefined) {
                carrito.push(objeto);
                showcarrito();
                Toastify({
                    text: "<3  Agregado a tu carrito  <3 ",
                    className: "info border border-2 border-white",
                    duration: 1500,
                    style: {
                        background: "linear-gradient(140deg, rgba(195,120,79,1) 20%, #f7aa83 50%, rgba(198,125,84,1) 94%)",
                    }
                }).showToast();
                guardado();
            }
        })
    });

}

window.onload = () => {
    getCursos();
    if (carritoguardado() != null) {
        carrito.push(...carritoguardado());
        showcarrito();
    }
}

//creacion de card que muestran cada curso agregado al carrito con nombre, precio y boton para borrar 
function showcarrito() {
    const carritohtml = document.getElementById('carrito');
    carritohtml.innerHTML = "";
    for (const curso of carrito) {
        const item = document.createElement('div');
        item.className = 'card border border-3 rounded';
        item.innerHTML = `
        <p>${curso.titulo}</p>
        <p>$${curso.precio}</p>
        <button class="btn btn-outline-secondary btnDel ">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
            </svg>
        </button>
        `;
        const items = document.querySelectorAll('.item');
        carritohtml.append(item);
    }
    borraritem()
}

//borrado de un curso del carrito utilizando el evento click sobre un boton
function borraritem() {
    const dellitem = document.querySelectorAll('.btnDel');
    dellitem.forEach((btnDell, index) => {
        btnDell.addEventListener('click', () => {
            carrito.splice(index, 1)
            showcarrito();
            guardado();
        })
    })
}

//guarda en el sessionStorage los cursos que se agregaron al carrito
function guardado() {
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
}

//muestra el carrito guardado desde el sessionStorage
function carritoguardado() {
    return JSON.parse(sessionStorage.getItem("carrito"))
}