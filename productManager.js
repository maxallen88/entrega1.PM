// clase de ProductManager que gestiones un conjunto de productos

// debe crearse desde su constructor con el elemento produucts, el cual sera una arreglo vacio.

// definir la clase ProductManager

//metodo addproducts // getproducts // getproductsbyid 

class ProductManager{
    constructor( ){
        this.products = [];
        // defino el constructor "products" de
        //va a tener un arreglo vacio => para  que el listado de productos me aparezca vacio

    }


getProducts = () => {
    return this.products;
}

addProduct = (title, description, price, thumbnail, code, stock) => {
    const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        products:[] // nos pide products vacio
        }
        if (this.products.length === 0){
            product.id = 1
        } else {
            product.id = this.products [this.products.length - 1 ] .id+1 
        }

// push producto
 this.products.push(product)
 }

 // metodo getProductsById 

 getProductsById = (idProduct) => {
    const productIndex = this.products.findIndex(product => product.id === idProduct );
    if (productIndex === -1){
        console.log( "not found");
        return;
        }
        const productAdd = this.products[productIndex].products.includes(idProduct);
        if (productAdd){
            console.log( " el producto se agrego correcto")
            return;
        }
        this.products[productIndex].products.push(idProduct)
}
}

const manejadorProductos = new ProductManager ();
manejadorProductos.addProduct ("regla", "trasparente", 80, "sin Imagen", "ABC123", 35);
manejadorProductos.addProduct ("Lapiz", "trasparente", 30, "sin Imagen", "ABC124", 36);
manejadorProductos.addProduct ("Goma", "trasparente", 10, "sin Imagen", "ABC125", 37);

manejadorProductos.getProductsById(1);
manejadorProductos.getProductsById(2);
manejadorProductos.getProductsById(3);

console.log(manejadorProductos.getProducts());