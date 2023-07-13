/**
* CLASS PRODUCT
* 
* Esta classe é usada para criar novos produtos a partir dos dados recebidos da API.
* 
* CONSTRUCTOR----------------------------------------------------
* @class Product: A classe que representa um produto.
* @constructor
* @param {number} id: O ID do produto.
* @param {string} name: O nome do produto.
* @param {string} description: A descrição do produto.
* @param {string} image: A URL da imagem do produto.
* @param {number} price: O preço do produto.
* @param {number} quantity: A quantidade do produto.
* --------------------------------------------------------------- 
* 
* LOG STRING OUTPUT----------------------------------------------
* @method output: Imprime as propriedades do produto via console.log.
* --------------------------------------------------------------- 
* 
* TO OBJECT OUTPUT-----------------------------------------------
* @method toObject: Retorna um objecto que representa o produto.
* @returns {Object} Um objecto que representa o produto.
* --------------------------------------------------------------- 
*/

class Product {
  constructor(id, name, description, image, price, quantity) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.price = price;
    this.quantity = quantity;
  }

  output() {
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Description: ${this.description}`);
    console.log(`Image URL: ${this.image}`);
    console.log(`Price: ${this.price}`);
    console.log(`Quantity: ${this.quantity}`);
  }
  
  toObject() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      image: this.image,
      price: this.price,
      quantity: this.quantity,
    };
  }
}

export { Product };