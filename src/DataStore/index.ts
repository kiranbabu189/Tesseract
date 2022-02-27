import Store from 'electron-store';

class DataStore extends Store {
  Products: any;
  constructor (settings: any) {
    super(settings)

    // initialize with Products or empty array
    this.Products = this.get('Products') || []
  }

  saveProducts () {
    // save Products to JSON file
    this.set('Products', this.Products)

    // returning 'this' allows method chaining
    return this
  }

  getProducts () {
    // set object's Products to Products in JSON file
    this.Products = this.get('Products') || []

    return this
  }

  addProduct (todo:any) {
    // merge the existing Products with the new todo
    this.Products = [ ...this.Products, todo ]

    return this.saveProducts()
  }

  deleteProduct (todo:any) {
    // filter out the target todo
    this.Products = this.Products.filter(t => t !== todo)

    return this.saveProducts()
  }
  getPath(){
    return this.path
  }
}

export default DataStore
