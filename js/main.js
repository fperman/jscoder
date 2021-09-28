//FUNCIONES
const valorMenu1 = 6000;
const valorMenu2 = 4500;
const valorMenu3 = 2200; 


//VALIDACIONES
const validarMenu = (menu) => menu !== 1 && menu !== 2 && menu !== 3;
const validarComensales = (cantidadComensales) => 1 <= cantidadComensales && cantidadComensales <= 20;

//FUNCIÓN SELECCIONARMENU
const seleccionarMenu = (menu) => {
    let tipoMenu;
    switch (menu) {
        case 1:
            tipoMenu = valorMenu1;
            break;
            
        case 2:
            tipoMenu = valorMenu2;
            break;
            
        case 3: value:
            tipoMenu = valorMenu3;
            break;
    }
    return tipoMenu;
}

//FUNCIÓN USUARIO
let nombre = prompt ("Ingrese su nombre.");
let apellido = prompt("Ingrese su apellido.");
let mail = prompt("Ingrese su E-Mail.")

//FUNCIÓN MENU
const pedirMenu = () => {
    let menu = parseInt(prompt("Ingresar 1, 2 o 3 para elegir el tipo de menú"));
    while (validarMenu(menu)) {
        alert("Por favor, ingrese un menú válido");
        menu = parseInt(prompt("Ingresar 1, 2 o 3 para elegir el tipo de menú"));
    }
    return menu;
}

// FUNCIÓN COMENSALES
const pedirComensales = () => {
    let comensales = parseInt(prompt("Ingresar la cantidad de personas que comerán"));
    while (!validarComensales(comensales)) {
        alert("Por favor, ingrese un valor de 1 a 20");
        comensales = parseInt(prompt("Ingresar la cantidad de personas que comerán"));
    }
    return comensales;
}

// CONSTRUCTOR USUARIO
class Usuario {
    constructor (nombre, apellido, mail) {
        this.nombre = nombre
        this.apellido = apellido
        this.mail = mail

    }  
}

const usuario1 = new Usuario (nombre, apellido, mail);

//FUNCIÓN MOSTRAR PRECIO
const mostrarPrecio = () => {
    alert(`Señor/a ${usuario1.nombre} ${usuario1.apellido} El total a pagar es de ${comensales * seleccionarMenu(menu)} por ${comensales} personas.`);
}

const menu = pedirMenu();
const comensales = pedirComensales();
mostrarPrecio(menu, comensales);
