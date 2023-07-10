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
* @async @function postCoupon: função que envia um código de cupão para a API e regista a resposta.
* @param {string} couponCode: o código do cupão a ser enviado.
* @returns {Promise} uma promise que, quando resolvida, regista a resposta da API.
* --------------------------------------------------------------- 
*
* GET PRODUCTS---------------------------------------------------
* @async @function getProducts: função que solicita uma lista de produtos à API e retorna os produtos como json.
* @returns {Promise} uma promise que, quando resolvida, retorna um array de produtos em formato json.
* nota: tem de ser assim pois o fetch à API tem de ser feito com o load do site e guardado localmente.
* --------------------------------------------------------------- 
*
* POST CHECKOUT--------------------------------------------------
* @async @function postCheckout: função que envia uma lista de produtos e um cupão para a API e regista a resposta.
* @param {Array} products: a lista de produtos a ser enviada.
* @param {string} coupon: o cupão a ser enviado.
* @returns {Promise} uma promise que, quando resolvida, regista a resposta da API.
* --------------------------------------------------------------- 
*
* LOAD AND STORE PRODUCTS----------------------------------------
* @function loadProducts: função assíncrona que carrega os produtos da API e armazena-os na localStorage como uma string json.
* nota: para ser armazenado loclamente o formato de objecto era perdido, logo tem de ser guardado como string json.
* @returns {void} Nenhum valor de retorno.
* ---------------------------------------------------------------
*/

//API CONNECTION AND PRODUCT CLASS
import { makeRequests } from '../../External-Services/API.js';
import { Product } from "../../Data-Modeling/productClass.js"


  //POST COUPON
  export function postCoupon(couponCode) {
    const couponJson = { "couponCode": couponCode };
  
    return makeRequests('/check-coupon', 'post', couponJson)
      .then(response => {
        return response;
      })
      .catch(console.error);
  }
  
  //GET PRODUCTS
  export function getProducts() {
    return makeRequests('/products', 'get')
      .then(response => {
        return response
      })
      .catch(console.error);
  }
  
  //POST CHECKOUT
  export function postCheckout(products, coupon) {
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

  //LOAD AND STORE PRODUCTS
  export async function loadProductsMain(){
    const products = await getProducts();
    localStorage.setItem('products', JSON.stringify(products));
  }

//******************************************
// TEST CALLS FOR MAIN

// loadProductsMain()

// async function testApiConnection() {
//   console.log('Teste post postCoupon...');
//   const couponResponse = await postCoupon("IVMUSVV");
//   console.log(couponResponse);

//   console.log('Teste getProducts...');
//   const products = await getProducts();
//   console.log(products);

//   console.log('Teste postCheckout...');
//   const checkoutResponse = await postCheckout([
//     {
//       "id": 1,
//       "quantity": 2
//     },
//     {
//       "id": 2,
//       "quantity": 1
//     }
//   ], "");
//   console.log(checkoutResponse);

//   console.log('Teste loadProducts...');
//   const productsLoad = JSON.parse(localStorage.getItem('products'));
//   if(productsLoad) {
//     productsLoad.forEach(productData => {
//       const product = new Product(
//         productData.id, 
//         productData.name, 
//         productData.description, 
//         productData.image, 
//         productData.price, 
//         productData.quantity
//       );
//       product.output();
//     });
//   } else {
//     console.log('No products found in local storage.')
//   }
// }

// testApiConnection();
//******************************************************