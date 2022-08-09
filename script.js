/*OBJETOS*/
//Creando class y función constructora para objetos en venta 
class Producto {
    constructor (id, nombre, peso, precio, stock){
        this.id = id
        this.nombre = nombre.toUpperCase();
        this.pesoxkg = parseFloat(peso);
        this.precio = parseFloat(precio);
        this.stock = parseFloat(stock);                
    }  
    /*Métodos*/      
    //La propiedad this.stock disminuye en 1 cada vez que se agrega el producto al carrito     
    disminuirStock(){
        this.stock = this.stock -= 1
        //Si this.stock < 0 = no se puede seguir añadiendo el producto al carrito
        if(this.stock < 0){
            alert(`El producto ${this.nombre} no puede tener stock negativo`)      
            this.stock = this.stock +=1  
            carrito.pop()     
        }  else{
            alert("Producto agregado al carrito")
        }
    }
    //Muestra información del producto agregado en el carrito
    infoCompra(){
        return `${this.nombre} x${this.pesoxkg}kg | $${this.precio} `        
    }
    //Muestra información del producto en el array de tienda
    mostrarProducto(){
        return `${this.id} | ${this.nombre} x${this.pesoxkg}kg | $${this.precio} | ${this.stock} disponibles` 
    }
}

const producto1 = new Producto ("1", "langostino pelado crudo", 1, 2990, 48 )
const producto2 = new Producto ("2", "tubo de calamar", 1, 1850, 50  )
const producto3 = new Producto ("3", "filet de merluza", 1, 870, 5 )
const producto4 = new Producto ("4", "mejillones pelados y congelados", 1, 1664, 2 )
const producto5 = new Producto ("5", "salmón rosado", 1, 6599, 30)
const producto6 = new Producto ("6", "filet de abadejo congelado", 1, 1999, 35)
const producto7 = new Producto ("7", "filet de lenguado", 1, 1799, 20)

/*ARRAYS DE OBJETOS*/
const ARRAY_TIENDA = [producto1, producto2, producto3, producto4, producto5, producto6, producto7]
const carrito = [] //A este array vacío se le añaden los objetos de ARRAY_TIENDA

/*FUNCIONES*/
//Mostrar información de los productos disponibles en la tienda
const obtenerInfoProductos = (productosArray) => {
    return productosArray.map((elemento) => elemento.mostrarProducto()).join('\n')
}
//Agregar al carrito por id de producto
const agregarAlCarritoById = (productos) => {
    const infoProductos = obtenerInfoProductos(productos)
    const id = prompt("Ingrese el id del producto que desea agregar al carrito:\n" + infoProductos)
    const producto = productos.find((producto)=> producto.id === id)
    if (!producto) return    
    producto.disminuirStock()    
    carrito.push(producto) 
}
//Mostrar información del carrito de compras
const imprimirCarrito = (carrito) => {
    return carrito.map((elemento) => elemento.infoCompra()).join('\n') 
}
//Mostrar total a pagar de todos los productos añadidos al carrito 
const obtenerTotal = (productosArray) => {
    let total = 0
    productosArray.forEach((producto) => {
        total += producto.precio
    })
    return total
}

const productos = ARRAY_TIENDA.map(producto => new Producto(
    producto.id,
    producto.nombre,
    producto.pesoxkg,
    producto.precio,
    producto.stock
))

/*Ciclo y condicionales*/
let respuesta = true
while(respuesta){
    agregarAlCarritoById(productos)
    respuesta = prompt("¿Desea agregar más productos? s/n").toLowerCase()
    if (respuesta == "s"){        
        continue
    } else if (respuesta == "n" ) {
        alert("Compra finalizada. Muchas gracias.")
        alert('Productos en el carrito:\n'+ imprimirCarrito(carrito) )
        alert('Total a pagar: $'+ obtenerTotal(carrito))   
        console.log(imprimirCarrito(carrito))
        console.log('Total: $'+ obtenerTotal(carrito))    
        break    
    } else {
        alert("Ingrese una respuesta entre s/n")
        continue
    }    
}    
       
            
        
            
            
                 
    