let usuarioRegistrado = 'cupcake';

switch (opcion) {
    case value:
        
        break;

    default:
        break;
}

function registro() {
    let ingresar = false;

    for (let i = 2; i >= 0; i--) {
        let ponerUsuario = prompt('Ingrese su usuario, tiene ' + (i + 1) + ' oportunidades.');
        if (ponerUsuario === usuario) {
            alert('Bienvenido/a ' + usuario + ' <3');
            ingresar = true;
            break;
        } else {
            alert('Mmmm, volve a intentarlo, te quedan ' + i + ' oportunidades.');
        }
    }

    return ingresar;
}

function Ingreso() {
    let nombre = prompt('Ingresa tu nombre');
    let cambiarNomUsuario = prompt('El nombre ingresado es ' + nombre + ' eso es correcto?  \n1- Si, es correcto,  \n2- No, quiero cambiarlo.');
    switch (cambiarNomUsuario) {
        case '1':
            alert('Correcto' + nombre);
            break;
        case '2':
            break;

        default:
            break;
    }


    let nuevoUsuario = prompt('Ingrese un nombre de usuario')
    if (nuevoUsuario != usuarioRegistrado) {
        alert('Yei, ese nombre de usuario esta disponible');
        alert('Bienvenido/a ' + nuevoUsuario + ' <3');
    }
    alert('Bienvenido/a, ' + dato);
}