const helado1 = { id: 1,nombre: 'Helado de chocolate'} 

const helado2 = { id: 2 , nombre: 'Helado de vainilla' , stock: 10} 

const helado3 = { id: 3 , nombre: 'Helado de crema' , stock: 10} 

const negacion = { id: 4,nombre: 'Salir'} 

const helados = [helado1, helado2, helado3,negacion]

function listarHelados(helados){

    let mensaje = "Lista de helados disponibles \n \n"

    for (let i = 0; i < helados.length; i++) {
        mensaje += helados[i].id + " - " + helados[i].nombre + " -  $" + helados[i].stock + "\n"
    }

    alert(mensaje)
}

function buscarHelado(array,opcion){
    
    let objeto = array[opcion-1]
    let nombre = objeto.nombre

    return nombre
}

/******************************************************************/

alert("Bienvenido a la heladeria: Los Más Sabrosos")

let nombrePersona = prompt("Cual es tu nombre?")

alert(nombrePersona + ", Cual helado te gustaria?")

listarHelados(helados)

let primeraOpcion = prompt("Eligue una opción")

switch(primeraOpcion > 0 ){

    case primeraOpcion == 1:
        alert("elegiste la opción 1: " + buscarHelado(helados,primeraOpcion) + "\n" + "Que lo disfrutes!!")
        break
    case opcion == 2:
        alert("elegiste la opción 2: " + buscarHelado(helados,opcion) + "\n" + "Que lo disfrutes!!")
        alert(buscarHelado(helados,opcion))
        break
    case opcion == 3:
        alert("elegiste la opción 3: " + buscarHelado(helados,opcion) + "\n" + "Que lo disfrutes!!")
        break

    case primeraOpcion > 3:
        alert("Adios")
        break
}


let segundaOpcion;

if(primeraOpcion == 1 || primeraOpcion == 2 || primeraOpcion == 3){

   let otro = prompt("Quieres otro?")

   if(otro == "si"){

    listarHelados(helados)

    segundaOpcion = prompt("Eligue una opción")

        switch(segundaOpcion > 0 ){

            case segundaOpcion == 1:
                alert("elegiste la opción 1: " + buscarHelado(helados,segundaOpcion) + "\n" + "Que lo disfrutes!!")
                break
    
            case segundaOpcion == 2:
                alert("elegiste la opción 2: " + buscarHelado(helados,segundaOpcion) + "\n" + "Que lo disfrutes!!")
                break
    
            case segundaOpcion == 3:
                alert("elegiste la opción 3: " + buscarHelado(helados,segundaOpcion) + "\n" + "Que lo disfrutes!!")
                break
        }
   } 
}

if(primeraOpcion > 0 && segundaOpcion > 0){

    alert("Llevas: " + buscarHelado(helados,primeraOpcion) + " y " + buscarHelado(helados,segundaOpcion))

}
else if(primeraOpcion > 0 && segundaOpcion == null){

    alert("Llevas solo: " + buscarHelado(helados,primeraOpcion))

}else{

    alert("error")

}













