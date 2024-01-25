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

    for (let i = 0; i < array.length; i++) {

        mensaje += "Cantidad:" + array[i].unidadesHelado + " - "+ array[i].nombreHelado + " - Precio:$ " + array[i].precioHelado + "- Total:$ " + totalPorHelado(array[i].precioHelado,array[i].unidadesHelado) + "\n"

    }

    alert(mensaje)
}

function buscarNombreHelado(id){
    
    let objeto = helados[id-1]
    let nombre = objeto.nombre

    return nombre
}

function buscarPrecioHelado(id){
    
    let objeto = helados[id-1]
    let precio = objeto.precio

    return precio
}

function totalPorHelado(precio,cantidad){

    let operacion = precio * cantidad

    return operacion
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
    let precio
    let unidades

   if(productoSeleccionado == 1 || productoSeleccionado == 2 || productoSeleccionado == 3){

    switch(productoSeleccionado){

        case 1:
            nombre = buscarNombreHelado(productoSeleccionado)
            precio = buscarPrecioHelado(productoSeleccionado)
            break

        case 2:
            nombre = buscarNombreHelado(productoSeleccionado)
            precio = buscarPrecioHelado(productoSeleccionado)
            break

        case 3:
            nombre = buscarNombreHelado(productoSeleccionado)
            precio = buscarPrecioHelado(productoSeleccionado)
            break
        
        default:
            break

   }

   unidades = parseInt(prompt("cuantas cantidades desea?, ingresar su numero"))

   const helado = {nombreHelado : nombre, precioHelado: precio, unidadesHelado: unidades}

   carrito.push(helado)

   } else{

        alert("Ingresar algun producto de la lista")

   }
   
   seleccion = prompt("Desea seguir comprando? si o no")

   while(seleccion == 'no'){

        listarCarrito(carrito)

        alert("Espero que vuelvas pronto, adios")

        break
   }

}














