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