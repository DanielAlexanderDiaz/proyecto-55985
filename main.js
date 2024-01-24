
alert("Bienvenido a Los Más Sabrosos")

let nombrePersona = prompt("Cual es tu nombre?")

alert(nombrePersona + ", que helado te gustaria")

const helado1 = { id: 1 , nombre: 'Helado de chocolate' , stock: 10} 

const helado2 = { id: 2 , nombre: 'Helado de vainilla' , stock: 10} 

const helado3 = { id: 3 , nombre: 'Helado de crema' , stock: 10} 

const helados = [helado1, helado2, helado3]

function listarHelados(helados){

    let mensaje = "Lista de helados disponibles \n \n"

    for (let i = 0; i < helados.length; i++) {
        mensaje += helados[i].id + " - " + helados[i].nombre + " -  $" + helados[i].stock + "\n"
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

while(opcion > 0){
    
    if(opcion == 1){
        alert("Elegiste la opción 1" + "\n" + buscarHelado(helados,opcion))
        break
    }

    if(opcion == 2){
        alert("Elegiste la opción 2" + "\n" + buscarHelado(helados,opcion))
        break
    }

    if(opcion == 3){
        alert("Elegiste la opción 3" + "\n" + buscarHelado(helados,opcion))
        break
    }

    if(opcion >= 4){
        opcion = prompt("Eligue una opción")
    }
}

/*switch(opcion > 0 ){
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
}*/







