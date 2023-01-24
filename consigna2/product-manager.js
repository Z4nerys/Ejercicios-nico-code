const generarUuid = require('./helpers/uuid')
const { guardarArchivo, readFile } = require("./helpers/guardar-archivo")

class ProductManager {
    
    constructor() {
        this.path = "C:/Users/gaston.fleitas/Desktop/Gasty/node/Ejercicios-nico-code/consigna2/data.txt"
    }
    
    getProducts() {
        console.log("ProductManager.getProducts")
        const productsFile = readFile(this.path)
        return productsFile
    }

    getProductById(id) {
        console.log('\ngetProductById with id ' + id)
        const productsFile = readFile(this.path)
        const product = productsFile.find( product => product.id === id)
        if(product) return product
        return "No se encontro el producto con el ID + " + id + "\n"
    }
    
    addProduct = (title, description, price, thumbnail, code, stock) => {
        const id = generarUuid()
        console.log("\nProductManager.addProduct with id product : " + id)
        const productsFile = readFile(this.path)
        productsFile.push({ id, title, description, price, thumbnail, code, stock })
        guardarArchivo(this.path, productsFile)
        return "product added with success\n"
    }

    updateProduct = (id, title, description, price, thumbnail, code, stock) => {
        console.log("\nProductManager.updateProduct with id product : " + id)
        let indice = false
        const productsFile = readFile(this.path)
        productsFile.forEach( (product, index) => {
            if(product.id === id){
                return indice = index
            }
        } )
        if(!indice) return "No se encontro el producto"
        console.log("\nProductManager.updateProduct with value: ")
        productsFile[indice] = [{id, title, description, price, thumbnail, code, stock}]
        console.log("Producto actualizado with value: ")
        guardarArchivo(this.path, productsFile)
        return productsFile[indice]
    }

    deleteOneProduct = ( id ) => {
        console.log("productManager.deleteOneProduct with id " + id)
        const productsFile = readFile(this.path)
        const products = productsFile.filter( product => product.id !== id)
        guardarArchivo(this.path, products)
        return productsFile
    }

    deleteAll = () => {
        console.log("productManager.deleteAll")
        guardarArchivo(this.path, [])
        return []
    }

}

module.exports = ProductManager