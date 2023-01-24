class ProductManager {

    constructor(){
        this.products = []
    }

    getProducts = () => {
        //console.log(this.chalk.green('GetProducts'));
        console.log("ProductManager.getProducts")
        return this.products
    }

    addProduct = (id, title, description, price, thumbnail, code, stock) => { 
        console.log("ProductManager.addProduct with id product : " + id)
        // Aca arroja el error si el ID existe pero podria retornar un => " Ese ID ya fue añadido"
        //if(this.products.filter(product => product.id === id)) throw new Error()
        const [product] = this.products.filter(product => product.id === id)
        if( product ) return "El id " + id + " ya fue añadido"
        this.products.push({id, title, description, price, thumbnail, code, stock})
        return this.products
    }

    getProductById = (id) => {
        console.log("ProductManager.getProductById with id : " + id)
        const [ product ] = this.products.filter( product => product.id === id)
        //if(!product) throw new Error
        if(!product) return "El id " + id + " no se encontro"
        return product
    }
}

module.exports = ProductManager