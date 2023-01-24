
const consigna1 = () => {
    /*
    consgina 
⦁	Se creará una instancia de la clase “ProductManager”
⦁	Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
⦁	Se llamará al método “addProduct” con los campos:
⦁	title: “producto prueba”
⦁	description:”Este es un producto prueba”
⦁	price:200,
⦁	thumbnail:”Sin imagen”
⦁	code:”abc123”,
⦁	stock:25
⦁	El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
⦁	Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
⦁	Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
⦁	Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
    */
   //imports
    const ProductManager = require("./consigna1/src/product-manager")
    const generarUuid = require("./consigna1/helpers/uuid")
    
    //Starting proyect

    const productManager = new ProductManager()
    const id = generarUuid()

    //consigna 1
    console.log("Starting proyect...")
    console.log("Primer consigna: getProducts\n")
    console.log(productManager.getProducts())
    
    //consigna 2
    console.log("\n================================================================================")
    console.log("================================================================================\n")
    console.log("Segunda consigna: addProduct\n")
    console.log(productManager.addProduct(id, "producto prueba", "este es un producto prueba", 200, "Sin imagen", "abc123", 25))
    
    //consigna 3
    console.log("\n================================================================================")
    console.log("================================================================================\n")
    console.log("Tercer consigna: getProducts\n")
    console.log(productManager.getProducts())

    //consigna 4
    console.log("\n================================================================================")
    console.log("================================================================================\n")
    console.log("Cuarta consigna: addProduct\n")
    console.log(productManager.addProduct(id, "producto prueba", "este es un producto prueba", 200, "Sin imagen", "abc123", 25))

    //consigna 5
    console.log("\n================================================================================")
    console.log("================================================================================\n")
    console.log("Quinta consigna: getProductById\n")
    console.log(productManager.getProductById(id))
}

//consigna1()

const consigna2 = () => {
    const ProductManager = require("./consigna2/product-manager")
    
    const productManager = new ProductManager()
    //añadir productos
    console.log(productManager.addProduct("producto prueba", "este es un producto prueba", 200, "Sin imagen", "abc123", 25))
    console.log(productManager.addProduct("producto pruebo", "este es un producto prueba", 200, "Sin imagen", "abc123", 25))
    console.log(productManager.addProduct("producto pruebe", "este es un producto prueba", 200, "Sin imagen", "abc123", 25))

    //obtener productos
    console.log(productManager.getProducts())
    console.log(productManager.getProductById('aa24f5f9-d578-48c6-9fcf-cd9f4898f3da'))
    console.log(productManager.updateProduct("aa24f5f9-d578-48c6-9fcf-cd9f4898f3da", "producto prueba", "este es un producto prueba", 600, "Sin imagen", "abc123", 25))
    console.log("=======================")
    console.log("=======================")
    console.log("=======================")
    console.log(productManager.getProducts())
    console.log(productManager.deleteOneProduct("aa24f5f9-d578-48c6-9fcf-cd9f4898f3da"))
    console.log(productManager.getProducts())

}

consigna2()