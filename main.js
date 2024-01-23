
alert("Bienvenido a Los Más Sabrosos")

let nombrePersona = prompt("Cual es tu nombre?")

alert(nombrePersona + ", que helado te gustaria")

const helado1 = { id: 1,nombre: 'Helado de chocolate'} 

const helado2 = { id: 2,nombre: 'Helado de vainilla'} 

const helado3 = { id: 3,nombre: 'Helado de crema'} 

const helados = [helado1, helado2, helado3]

function listarHelados(helados){
    let mensaje = "Lista de helados disponibles \n \n"

    for (let i = 0; i < helados.length; i++) {
        mensaje += helados[i].id + " - " +helados[i].nombre + "\n"
    }

    alert(mensaje)
}

listarHelados(helados)

let opcion = prompt("Eligue una opción")

function buscarHelado(array,opcion){
    let objeto = array[opcion-1]
    let nombre = objeto.nombre

    return nombre
}

switch(opcion > 0 ){
    case opcion == 1:
        alert("elegiste la opción 1: " + buscarHelado(helados,opcion) + "\n" + "Que lo disfrutes!!")
        break
    case opcion == 2:
        alert("elegiste la opción 2: " + buscarHelado(helados,opcion) + "\n" + "Que lo disfrutes!!")
        alert(buscarHelado(helados,opcion))
        break
    case opcion == 3:
        alert("elegiste la opción 3: " + buscarHelado(helados,opcion) + "\n" + "Que lo disfrutes!!")
        break
    case opcion > 3:
        alert("Opción no valida")
        break
}






