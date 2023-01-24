const consigna1 = () => {
    //imports
    const ProductManager = require("./src/product-manager")
    const generarUuid = require("./helpers/uuid")
    
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

