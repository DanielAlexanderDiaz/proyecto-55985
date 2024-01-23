
alert("Bienvenido a Los Más Sabrosos")

let nombrePersona = prompt("Cual es tu nombre?")

alert(nombrePersona + ", Que helado te gustaria")

const helado1 = { id: 1,nombre: 'Helado de chocolate',precio: 1000 } 

const helado2 = { id: 2,nombre: 'Helado de vainilla',precio: 1000 } 

const helado3 = { id: 3,nombre: 'Helado de crema',precio: 900 } 

const helados = [helado1, helado2, helado3]

/*function listarHelados(helados){
    for (let i = 0; i < helados.length; i++) {
        console.log(helados[i].id + " - " +helados[i].nombre + " - $" + helados[i].precio)
    }
}

listarHelados(helados)*/

function mostrarHelados(helados){
    let mensaje = "Lista de helados \n"

    for (let i = 0; i < helados.length; i++) {
        mensaje += helados[i].id + " - Nombre: " +helados[i].nombre + " - Precio: $" + helados[i].precio + '\n'
    }

    alert(mensaje)
}

mostrarHelados(helados)

let opcion = prompt("Eligue una opcion")

switch(opcion > 0 ){
    case opcion == 1:
        alert("elegiste la opcion N°1")
        break
    case opcion == 2:
        alert("elegiste la opcion N°2")
        break
    case opcion == 3:
        alert("elegiste la opcion N°3")
        break
    case opcion > 3:
        alert('opcion no valida')
        break
}