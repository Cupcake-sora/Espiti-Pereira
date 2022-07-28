let usuarioRegistrado = 'cupcake';

alert('Bienvenido a CDM, un juego de rol donde tu eliges el rumbo de la historia');

let salir = false

//OPCION 1
function ingresar() {
    let ingresa = false;

    for (let i = 2; i >= 0; i--) {
        let ponerUsuario = prompt('Ingrese su usuario, tiene ' + (i + 1) + ' oportunidades.');
        if (ponerUsuario === usuarioRegistrado) {
            alert('Bienvenido/a ' + usuarioRegistrado + ' <3');
            ingresar = true;
            salir = true;
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
                alert('Correcto tu nombre es ' + nombre);
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
    salir = true;
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