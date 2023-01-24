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

consigna1()

