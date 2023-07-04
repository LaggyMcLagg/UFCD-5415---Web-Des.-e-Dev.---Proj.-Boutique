// import { getProduct } from "../../External-Services/testing_API.js"
// import { Product } from "../../Data-Modeling/testing_models.js"

// getProduct().then(product => {
//     const product_ = new Product(product)

//     console.log(product_)
    
//     console.log(product_[1].id)
//     console.log(product_[1].name)
//     console.log(product_[1].description)
// })


// API CONNECTION FUNCIONAL
import { api } from '../../External-Services/API.js';
import { Product } from "../../Data-Modeling/productClass.js"


async function makeRequests(endpoint, method, data = null) {
    let response;
    if (method.toLowerCase() === 'post') {
      response = await api.post(endpoint, data);
    } else if (method.toLowerCase() === 'get') {
      response = await api.get(endpoint);
    } else {
      throw new Error(`Unsupported method: ${method}`);
    }
    
    return response;
  }


// ******************************************
// TESTS FOR API

//POST COUPON
const couponJson = { "couponCode": "IVMUSVV" };

makeRequests('/check-coupon', 'post', couponJson)
  .then(response => {
    console.log(response);
  })
  .catch(console.error);

//GET
makeRequests('/products', 'get')
  .then(response => {
    const products = response.map(
      item => new Product(item.id, item.name, item.description, item.image, item.price, item.quantity)
    );
    products.forEach(product => console.log(product.toObject()));
  })
  .catch(console.error);

//POST CHECKOUT
const checkoutPostJson = {
    "products": [
      {
        "id": 1,
        "quantity": 2
      },
      {
        "id": 2,
        "quantity": 1
      }
    ],
    "coupon": ""
  };
  
  makeRequests('/checkout', 'post', checkoutPostJson)
    .then(response => {
      console.log(response);
    })
    .catch(console.error);

//******************************************************