/**
* MAIN.JS DOC BLOC
*
* IMPORTS--------------------------------------------------------
* @module makeRequests: importado de '../../External-Services/API.js', função para fazer requisições GET e POST para a API.
* @module Product: importado de '../../Data-Modeling/productClass.js', class 'Product' que serve para 
* a instaciação de objectos (produto) com base na informação retornada pela API. 
* --------------------------------------------------------------- 
*
* POST COUPON----------------------------------------------------
* @function postCoupon: função que envia um código de cupão para a API e regista a resposta.
* @param {string} couponCode: o código do cupão a ser enviado.
* @returns {Promise} uma promise que, quando resolvida, regista a resposta da API.
* --------------------------------------------------------------- 
*
* GET PRODUCTS---------------------------------------------------
* @function getProducts: função que solicita uma lista de produtos à API e retorna os produtos como instâncias da classe Product.
* @returns {Promise} uma promise que, quando resolvida, retorna um array de instâncias da classe Product.
* --------------------------------------------------------------- 
*
* POST CHECKOUT--------------------------------------------------
* @function postCheckout: função que envia uma lista de produtos e um cupão para a API e regista a resposta.
* @param {Array} products: a lista de produtos a ser enviada.
* @param {string} coupon: o cupão a ser enviado.
* @returns {Promise} uma promise que, quando resolvida, regista a resposta da API.
* --------------------------------------------------------------- 
*
*/

//API CONNECTION AND PRODUCT CLASS
import { makeRequests } from '../../External-Services/API.js';
import { Product } from "../../Data-Modeling/productClass.js"


  //POST COUPON
  function postCoupon(couponCode) {
    const couponJson = { "couponCode": couponCode };
  
    return makeRequests('/check-coupon', 'post', couponJson)
      .then(response => {
        return response;
      })
      .catch(console.error);
  }
  
  //GET PRODUCTS
  function getProducts() {
    return makeRequests('/products', 'get')
      .then(response => {
        return response.map(
          item => new Product(item.id, item.name, item.description, item.image, item.price, item.quantity)
        );
      })
      .catch(console.error);
  }
  
  //POST CHECKOUT
  function postCheckout(products, coupon) {
    const checkoutPostJson = {
      "products": products,
      "coupon": coupon
    };
  
    return makeRequests('/checkout', 'post', checkoutPostJson)
      .then(response => {
        return response;
      })
      .catch(console.error);
  }

//******************************************
// TEST CALLS FOR API
async function testApiConnection() {
  console.log('Teste post postCoupon...');
  const couponResponse = await postCoupon("IVMUSVV");
  console.log(couponResponse);

  console.log('Teste getProducts...');
  const products = await getProducts();
  products.forEach(product => product.output());

  console.log('Teste postCheckout...');
  const checkoutResponse = await postCheckout([
    {
      "id": 1,
      "quantity": 2
    },
    {
      "id": 2,
      "quantity": 1
    }
  ], "");
  console.log(checkoutResponse);
}

testApiConnection();
//******************************************************