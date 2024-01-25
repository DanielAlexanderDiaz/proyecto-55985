/*********************************************************************/

/*array de objetos que contiene los productos*/
const productos = [
                { id: 1,  nombre: 'Helado de chocolate', precio: 1000},
                { id: 2 , nombre: 'Helado de vainilla' , precio: 950},
                { id: 3 , nombre: 'Helado de crema' , precio: 900} 
                ]

/*array del carro de compra vacio*/
const carro = []

/********************************************************************/

/*funcion que lista los productos*/
function listarProductos(array){

    let mensaje = "Lista de helados disponibles \n \n"

    for (let i = 0; i < array.length; i++) {

        mensaje += array[i].id + " - " + array[i].nombre + " -  $" + array[i].precio + "\n"
    }

    alert(mensaje)
}

/*funcion que lista todo el carro de compra*/
function listarCarro(array){

    let mensaje = "Lista del pedido \n \n"

    for (let i = 0; i < array.length; i++) {

        mensaje += array[i].nombreProducto + " - Cant: " + array[i].unidadesProducto + " und" + " - Precio: $" + array[i].precioProducto + " - Total: $" + totalPorProducto(array[i].precioProducto,array[i].unidadesProducto) + "\n \n"

    }

    mensaje += "El total a pagar: $" + CarroTotal(array)

    alert(mensaje)
}

/*funcion que calcula el total del carro de compra*/
function CarroTotal(array){

    let total = 0

    for (let i = 0; i < array.length; i++) {

        total += (array[i].precioProducto * array[i].unidadesProducto)

    }

    return total
}

/*funcion que busca y trae el nombre del producto por su id*/
function buscarNombreProducto(id){
    
    let objeto = productos[id-1]
    let nombre = objeto.nombre

    return nombre
}

/*funcion que busca y trae el precio del producto por su id*/
function buscarPrecioProducto(id){
    
    let objeto = productos[id-1]
    let precio = objeto.precio

    return precio
}

/*funcion que recibe el precio y cantidad del producto para calcular su total*/
function totalPorProducto(precio,cantidad){

    let operacion = precio * cantidad

    return operacion
}

/******************************************************************/

/* Inicio de la aplicación*/

alert("Bienvenido a la heladeria: Los Más Sabrosos")

let seleccion = prompt("Desea comprar algun helado? si o no")

while(seleccion != "si" && seleccion != "no"){

    alert("Favor de ingresar si o no")

    seleccion = prompt("Desea comprar algun helado? si o no")

}

if(seleccion == "si"){
    
    listarProductos(productos)

}else if(seleccion == "no"){

    alert("Espero que vuelvas pronto, adios")

}

while(seleccion != 'no'){

    let productoSeleccionado = parseInt(prompt("Agregar un helado, ingresar su numero de lista"))

    let nombre
    let precio
    let unidades

   if(productoSeleccionado == 1 || productoSeleccionado == 2 || productoSeleccionado == 3){

    switch(productoSeleccionado){

        case 1:
            nombre = buscarNombreProducto(productoSeleccionado)
            precio = buscarPrecioProducto(productoSeleccionado)
            break

        case 2:
            nombre = buscarNombreProducto(productoSeleccionado)
            precio = buscarPrecioProducto(productoSeleccionado)
            break

        case 3:
            nombre = buscarNombreProducto(productoSeleccionado)
            precio = buscarPrecioProducto(productoSeleccionado)
            break
        
        default:
            break

   }

   unidades = parseInt(prompt("cuantas cantidades desea del producto?, ingresar numero"))

   const producto = {nombreProducto : nombre, precioProducto: precio, unidadesProducto: unidades}

   carro.push(producto)

   } else{

        alert("Ingresar algun producto de la lista")

   }
   
   seleccion = prompt("Desea seguir comprando? si o no")

   while(seleccion == 'no'){

        listarCarro(carro)

        alert("Que lo disfrutes!! \n" + "Vuelve pronto, adios")

        break
   }

}














