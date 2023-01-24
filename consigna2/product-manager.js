const generarUuid = require('./helpers/uuid')

class ProductManager {
    
    constructor() {
        this.products = []
        this.path = "C:\Users\gaston."
    }
    
    getProducts() {
        console.log("ProductManager.getProducts")
        console.log(this.path)
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
        let indice = false
        this.products.forEach( (product, index) => {
            if(product[0] === id){
                indice = index
            }
        } )
        if(!indice) return "No se encontro el producto"
        console.log("\nProductManager.updateProduct with value: ")
        this.products[indice] = [id, title, description, price, thumbnail, code, stock]
        console.log("Producto actualizado with value: ")
        return this.products[indice]
    }

    deleteOneProduct = ( id ) => {
        console.log("productManager.deleteOneProduct with id " + id)
        this.products = this.products.filter( product => product[0] !== id)
        return this.products
    }

    deleteAll = () => {
        console.log("productManager.deleteAll")
        this.products = []
    }

}

module.exports = ProductManager