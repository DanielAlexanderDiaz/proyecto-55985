
alert("Bienvenido a Los Más Sabrosos")

let nombrePersona = prompt("Cual es tu nombre?")

alert(nombrePersona + ", que helado te gustaria")

const helado1 = { id: 1 , nombre: 'Helado de chocolate' , precio: 1000} 

const helado2 = { id: 2 , nombre: 'Helado de vainilla' , precio: 1100} 

const helado3 = { id: 3 , nombre: 'Helado de crema' , precio: 1200} 

const helados = [helado1, helado2, helado3]

function listarHelados(helados){

    let mensaje = "Lista de helados disponibles \n \n"

    for (let i = 0; i < helados.length; i++) {
        mensaje += helados[i].id + " - " + helados[i].nombre + " -  $" + helados[i].precio + "\n"
    }

    alert(mensaje)
}

listarHelados(helados)

let opcion = prompt("Eligue una opción")

function buscarHelado(array,opcion){
    
    let objeto = array[opcion-1]
    let nombre = objeto.nombre
    let precio = objeto.precio

    return nombre + " -  $" + precio
}

switch(opcion > 0 ){
    case opcion == 1:
        alert("Elegiste la opción 1" + "\n" + buscarHelado(helados,opcion))
        break
    case opcion == 2:
        alert("Elegiste la opción 2" + "\n" + buscarHelado(helados,opcion))
        break
    case opcion == 3:
        alert("Elegiste la opción 3" + "\n" + buscarHelado(helados,opcion))
        break
    case opcion > 3:
        alert("Opción no valida")
        break
}






