const generarUuid = require('./helpers/uuid')

class ProductManager {
    
    constructor() {
        this.products = []
    }
    
    getProducts() {
        return this.products
    }

    getProductById(id) {
        console.log('\ngetProductById with id ' + id)
        const product = this.products.find( product => product[1] === id)
        if(product) return product
        return "No se encontro el producto con el ID + " + id + "\n"
    }
    
    addProduct = (title, description, price, thumbnail, code, stock) => {
        const id = generarUuid()
        console.log("\nProductManager.addProduct with id product : " + id)
        /* const [product] = this.products.filter(product => product.id === id)
        if (product) return "El id " + id + " ya fue añadido" */
        this.products.push([ id, title, description, price, thumbnail, code, stock ])
        return "product added with success\n"
    }

    updateProduct = (id, title, description, price, thumbnail, code, stock) => {
        console.log("\nProductManager.updateProduct with id product : " + id)
        id = "producto pruebo"
        let indice = false
        this.products.forEach( (product, index) => {
            if(product[1] === id){
                indice = index
            }
        } )
        if(!indice) return "No se encontro el producto"
        console.log("\nProductManager.updateProduct with value: ")
        this.products[indice] = [id, title, description, price, thumbnail, code, stock]
        console.log("Producto actualizado with value: ")
        return this.products[indice]
        
    }

}

module.exports = ProductManager