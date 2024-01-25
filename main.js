const helados = [
                { id: 1,  nombre: 'Helado de chocolate', precio: 1000},
                { id: 2 , nombre: 'Helado de vainilla' , precio: 950},
                { id: 3 , nombre: 'Helado de crema' , precio: 900} 
                ]

const carrito = []

/********************************************************************/

function listarHelados(array){

    let mensaje = "Lista de helados disponibles \n \n"

    for (let i = 0; i < array.length; i++) {
        mensaje += array[i].id + " - " + array[i].nombre + " -  $" + array[i].precio + "\n"
    }

    alert(mensaje)
}

function listarCarrito(array){

    let mensaje = "Lista del pedido \n \n"

    for (const productoCarrito of array) {

        mensaje += productoCarrito + "\n"

    }

    alert(mensaje)
}

function buscarHelado(id){
    
    let objeto = helados[id-1]
    let nombre = objeto.nombre

    return nombre
}

/******************************************************************/

alert("Bienvenido a la heladeria: Los Más Sabrosos")

let seleccion = prompt("Desea comprar algun helado? si o no")

while(seleccion != "si" && seleccion != "no"){

    alert("Favor de ingresar si o no")

    seleccion = prompt("Desea comprar algun helado? si o no")

}

if(seleccion == "si"){
    
    listarHelados(helados)

}else if(seleccion == "no"){

    alert("Espero que vuelvas pronto, adios")

}

while(seleccion != 'no'){

    let productoSeleccionado = parseInt(prompt("Agregar un producto, ingresar su numero"))

    let nombre
    let precio = 0

   if(productoSeleccionado == 1 || productoSeleccionado == 2 || productoSeleccionado == 3){


    switch(productoSeleccionado){

        case 1:
            nombre = buscarHelado(productoSeleccionado)
            precio = 1000
            break

        case 2:
            nombre = buscarHelado(productoSeleccionado)
            precio = 950
            break

        case 3:
            nombre = buscarHelado(productoSeleccionado)
            precio = 900
            break
        
        default:
            break

   }

   carrito.push(nombre,precio)

   } else{

        alert("Ingresar algun producto de la lista")

   }
   
   seleccion = prompt("Desea seguir comprando? si o no")

   while(seleccion == 'no'){

        listarCarrito(carrito)
        console.log(carrito)

        alert("Espero que vuelvas pronto, adios")

        break
   }

}














