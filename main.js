const helado1 = { id: 1,nombre: 'Helado de chocolate', precio: 1000} 

const helado2 = { id: 2 , nombre: 'Helado de vainilla' , precio: 950} 

const helado3 = { id: 3 , nombre: 'Helado de crema' , precio: 900} 

const helados = [helado1, helado2, helado3]

function listarHelados(helados){

    let mensaje = "Lista de helados disponibles \n \n"

    for (let i = 0; i < helados.length; i++) {
        mensaje += helados[i].id + " - " + helados[i].nombre + " -  $" + helados[i].precio + "\n"
    }

    alert(mensaje)
}

function buscarHelado(array,opcion){
    
    let objeto = array[opcion-1]
    let nombre = objeto.nombre

    return nombre
}

function traerPrecio(array,opcion){

    let objeto = array[opcion-1]
    let precio = objeto.precio

    return precio
}

/******************************************************************/

alert("Bienvenido a la heladeria: Los Más Sabrosos")

let nombrePersona = prompt("Cual es tu nombre?")

alert(nombrePersona + ", Cual helado te gustaria?")

listarHelados(helados)

let primeraOpcion = prompt("Eligue una opción")

if(primeraOpcion == 1){

}

switch(primeraOpcion > 0){

    case primeraOpcion == 1:
        alert("Elegiste la opción 1:\n\n" + buscarHelado(helados,primeraOpcion))
        break

    case primeraOpcion == 2:
        alert("Elegiste la opción 2:\n\n" + buscarHelado(helados,primeraOpcion))
        break

    case primeraOpcion == 3:
        alert("Elegiste la opción 3:\n\n" + buscarHelado(helados,primeraOpcion))
        break

    case primeraOpcion > 3:
        alert("Opción no valida \n Espero que vuelvas pronto, adios")
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
                alert("elegiste la opción 1: \n\n" + buscarHelado(helados,segundaOpcion))
                break
    
            case segundaOpcion == 2:
                alert("elegiste la opción 2: \n\n" + buscarHelado(helados,segundaOpcion))
                break
    
            case segundaOpcion == 3:
                alert("elegiste la opción 3: \n\n" + buscarHelado(helados,segundaOpcion))
                break
        }
   } 
}

if(primeraOpcion > 0 && segundaOpcion > 0){

    alert("Llevas: \n\n" + buscarHelado(helados,primeraOpcion) + "\n" 
    + buscarHelado(helados,segundaOpcion) + "\n\n" + "Total $" + (traerPrecio(helados, primeraOpcion) + traerPrecio(helados, segundaOpcion)) + "\n\n Que los disfrutes!!")

}
else if(primeraOpcion > 0 && segundaOpcion == null){

    alert("Llevas solo: \n\n" + buscarHelado(helados,primeraOpcion) + "\n\n" + "Total: $" + traerPrecio(helados, primeraOpcion) + "\n\n Que lo disfrutes!!")

}else{

    alert("error")

}













