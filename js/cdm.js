let usuarioRegistrado = 'cupcake';


let salir = false
//OPCION 1
function ingresar() {
    let ingresa = false;

    for (let i = 2; i >= 0; i--) {
        let ponerUsuario = prompt('Ingrese su usuario, tiene ' + (i + 1) + ' oportunidades.');
        if (ponerUsuario === usuarioRegistrado) {
            alert('Bienvenido/a ' + usuarioRegistrado + ' <3');
            ingresar = true;
            agregarOb();
            console.log (orden());
            break;
        } else {
            alert('Mmmm, volve a intentarlo, te quedan ' + i + ' oportunidades.');
        }
    }

}

//OPCION 2
function registrarse() {
    //ingresar el nombre
    let nombre = prompt('Ingresa tu nombre');
    let cambiar = false;
    while (cambiar == false) {
        let cambiarNombre = prompt('El nombre ingresado es " ' + nombre + ' " eso es correcto? \n1- Si, es correcto \n2- No, quiero cambiarlo.');

        switch (cambiarNombre) {
            case '1':
                cambiar = true;
                alert('Correcto, tu nombre es ' + nombre);
                break;
            case '2':
                nombre = prompt('Ingresa tu nombre nuevamente');
                break;
            default:
                alert('Opción invalida.');
        }
    }

    //ingresar un nombre de usuario
    let nuevoUsuario = prompt('Ingrese un nombre de usuario');
    let registroNuevoUsuario = true;
    while (registroNuevoUsuario == true) {

        if (nuevoUsuario != usuarioRegistrado) {
            alert('Yei, ese nombre de usuario esta disponible');
            alert('Bienvenido/a ' + nuevoUsuario + ' <3');
            registroNuevoUsuario = false;
        }
        else {
            alert('Mmmm ese usuario no esta disponible, volve a intentarlo');
            nuevoUsuario = prompt('Ingresa otro nombre de usuario por favor');
        }
    }

    alert(nombre + ' : \nTu nombre se usuario es  ' + nuevoUsuario + ('\nEsta va a ser tu clave para ingresar a CDM. \nPor favor no compartas esta informacion, ya que podrias ser victima de un robo de cuenta'));
}



class ObjetoInventario {

    constructor(categoriaOb, nombreOb, precioOb, idOb) {
        this.categoriaOb = categoriaOb;
        this.nombreOb = nombreOb;
        this.precioOb = parseInt(precioOb);
        this.idOb = idOb
    }

    asignarId(inventario) {
        this.idOb = inventario.length;
    }

}

const inventario = [
    new ObjetoInventario('Zapatos', 'Japan Lover', 44, 1),
    new ObjetoInventario('Remeras', 'Shine Bright', 36, 2),
    new ObjetoInventario('Pantalones', 'Ouscast Madam', 40, 3),
    new ObjetoInventario('Vestidos', 'Kitsune Ghost', 52, 4),
    new ObjetoInventario('Complementos', 'Halloween Ghost', 5),
    new ObjetoInventario('Pelucas', 'Joyful Kite', 105, 6),
    new ObjetoInventario('Fondos', 'Castiel', 120, 7)
]

console.log(inventario);

function agregarOb() {
    let cargarOb = true;

    while (cargarOb) {
        let ingreso = prompt('Ingresa los datos del objeto: categoria, nombre y precio separados por un punto ( . ). Ingresa X para finalizar');

        if (ingreso.toUpperCase() == 'X') {
            cargarOb = false;
            break;
        }

        let datos = ingreso.split('.');
        const producto = new ObjetoInventario(datos[0], datos[1], datos[2], datos[3], datos[4]);

        inventario.push(producto);

        producto.asignarId(inventario);

        console.log(inventario)
    }
}




//Ordenar el inventario
function orden() {

    let ordenar = prompt('Ordenar por:\n1 - Categoria (A a Z) \n2 - Nombre (Z a A)\n3 - Mayor precio\n4 - Menor precio');

    let inventarioOrdenado = inventario.slice(0);


    switch (ordenar) {
        case '1':
            let categoriaAscendente = inventarioOrdenado.sort((a, b) => a.categoriaOb.localeCompare(b.categoriaOb));
            return categoriaAscendente;
        case '2':
            let nombreAscendente = inventarioOrdenado.sort((a, b) => a.nombreOb.localeCompare(b.nombreOb));
            return nombreAscendente;
        case '3':
            return inventarioOrdenado.sort((a, b) => b.precioOb - a.precioOb);
        case '4':
            return inventarioOrdenado.sort((a, b) => a.precioOb - b.precioOb);
        default:
            alert('Opcion invalida');
            break;
    }
}





//ESTO ES EL MENU PRINCIPAL
while (salir == false) {
    switch (opcion = prompt('Por favor ingrese una opción: \n1- Ingresar \n2- Registrarme \n3- Salir')) {
        case '1':
            ingresar();
            break;
        case '2':
            registrarse();
            break;
        case '3':
            salir = true;
            alert('Ha salido con exito');
            break;
        default: alert('Opcion invalida');
            break;
    }
}