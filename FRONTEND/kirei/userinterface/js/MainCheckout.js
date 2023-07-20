/**
* CHECKOUT.JS DOCUMENTAÇÃO
*
* Este script irá criar e formatar a página de checkout da loja.
* 
* IMPORTAÇÕES----------------------------------------------------
* @module loadProductsMain: importado de './main.js', função para carregar os produtos para session storage ao carregar a página.
* @module handleAdd: importado de '../../logic/checkoutLogic.js', função para adicionar produtos ao carrinho.
* @module handleRemove: importado de '../../logic/checkoutLogic.js', função para remover produtos do carrinho.
* @module handleSubtract: importado de '../../logic/checkoutLogic.js', função para subtrair produtos do carrinho.
* @module handleCoupon: importado de '../../logic/checkoutLogic.js', função para pré-validar cupões.
* @module updateTotalPrice: importado de '../../logic/checkoutLogic.js', função para atualizar o preço total em fumção de eventos na página.
* @module handleCheckout: importado de '../../logic/checkoutLogic.js', função para lidar com o processo de checkout.
* @module initializeHamburgerMenu: importado de '../../logic/initHamburgerMenu.js', função para inicializar o painel lateral.
* ----------------------------------------------------------------
*
* CREATE NAVBAR--------------------------------------------------
* @async @function createNavbar: função para criar a barra de navegação e adicioná-la ao corpo do documento.
* @const {string} navbar: variável que contém a estrutura HTML da barra de navegação.
* @returns {Promise} uma promise que, quando resolvida, cria a barra de navegação.
* ---------------------------------------------------------------
*
* CREATE CART----------------------------------------------------
* @async @function createCart: função para criar a estrutura do carrinho e adicioná-la ao container de checkout.
* @const {object} cart: objeto que armazena os itens no carrinho recuperados da sessionStorage.
* @const {Array} products: array de produtos recuperados da sessionStorage.
* ----------------------------------------------------------------
*
* ATTACH EVENT LISTENERS CART-------------------------------------
* @async @function attachEventListenersCart: função para configurar event listeners aos botões de adição, remoção e subtração do carrinho.
* ----------------------------------------------------------------
*
* CREATE COUPON AND CHECKOUT--------------------------------------
* @async @function createCouponAndCheckout: função para criar a área de validação de cupão e checkout e adicioná-la ao container de checkout.
* ----------------------------------------------------------------
*
* TTACH EVENT LISTENERS CHECKOUT------------------------------
* @async @function attachEventListenersCheckout: função para configurar event listeners ao campo de cupão e ao botão de checkout.
* ----------------------------------------------------------------
*
* WINDOW ONLOAD---------------------------------------------------
* @async @event window.onload: evento que aciona várias funções quando a janela é totalmente carregada.
* NOTA: A ORDEM DE CARREGAMENTO DEVE SER AQUELA
* @returns {Promise} uma promise que, quando resolvida, inicializa os vários componentes do site, carrega os produtos, e configura os event listeners.
* ----------------------------------------------------------------
*/

import { loadProductsMain } from './main.js';
import {handleAdd} from '../../logic/checkoutLogic.js';
import {handleRemove} from '../../logic/checkoutLogic.js';
import {handleSubtract} from '../../logic/checkoutLogic.js';
import {handleCoupon} from '../../logic/checkoutLogic.js';
import {updateTotalPrice} from '../../logic/checkoutLogic.js';
import {handleCheckout} from '../../logic/checkoutLogic.js';
import {initializeHamburgerMenu} from '../../logic/initHamburgerMenu.js'


//!!!! FOR TESTING !!!!
// const cart = {
//     "1": 2,
//     "2": 1,
//     "3": 5
//   };
//   sessionStorage.setItem('cart', JSON.stringify(cart));
//--------------------------------------------------------

async function createNavbar() {
    const navbar = `
    <div class="item navbar" id="Navbar">
    <nav>
        <div class="navbar">
            <div class="hamburger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <ul class="horizontal-nav">
                <li><a href="../../index.html">LOGO</a></li>
                <li>
                    <form>
                        <input type="text" class="searchbar" placeholder="Search">
                        <input type="submit" value="Submit">
                    </form>
                </li>
                <li><a href="checkout.html">Cart</a></li>
            </ul>
            <ul class="menu">
                <li><a href="gallery.html">Galeria</a></li>
                <li><a href="contact.html">Contact Us</a></li>
                <li><a href="#">Item 3</a></li>
                <li><a href="#">Item 4</a></li>
            </ul>
        </div>
    </nav>
</div>`;
document.getElementById("Checkout-Container").innerHTML += navbar;
}

async function createCart() {
    const cart = JSON.parse(sessionStorage.getItem('cart'));
    const products = JSON.parse(sessionStorage.getItem('products'));
    
    if (cart === null) {
        document.getElementById("Checkout-Container").innerHTML += `
        <div class="item product" id="Product">
            <div id="Cart-Container" class="small-container cart-page">
                <h1>Cart is empty.</h1>
            </div>
        </div>
        `;
    }else{
        let cartProductsHtml = `
        <div class="item product" id="Product">
        <div id="Cart-Container" class="small-container cart-page">
            <table id="Product-Table" class="product-table">
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>SubTotal</th>
                </tr>
        `;
    
    
        for (let productId in cart) {
            let product = products.find(product => product.id == Number(productId));
        
            if (product) {
                cartProductsHtml += `
                <tr id="Cart-Info-${productId}">
                    <td>
                        <div class="cart-info">
                            <img id="Shirt-Image-${productId}" title="shirt-img" src="${product.image}">
                            <div>
                                <p>${product.name}</p>
                                <small id="Price-${productId}">Price: $${product.price}</small>
                                <a id="Remove-${productId}" class="remove-btn" data-id="${productId}" href="#">Remove</a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <button id="Sub-Button-${productId}" class="subtract-btn" data-id="${productId}" type="button">-</button>
                        <label id="Quantity-Label-${productId}" class="quantity-label" data-id="${productId}">${cart[productId]}</label>
                        <button id="Add-Button-${productId}" class="add-btn" data-id="${productId}" type="button">+</button>
                        <label id="Label-Out-Stock-${productId}"></label>
                    </td>
                    <td id="Price-tag-${productId}">$${(parseFloat(product.price) * cart[productId]).toFixed(2)}</td>
                </tr>`;
            }
        }
        cartProductsHtml += `
                </table>
            </div>
        </div>
        `;
        document.getElementById("Checkout-Container").innerHTML +=  cartProductsHtml;
    }

}

async function attachEventListenersCart() {
    const removeBtns = document.querySelectorAll('.remove-btn');
    removeBtns.forEach(btn => btn.addEventListener('click', handleRemove));

    const addBtns = document.querySelectorAll('.add-btn');
    addBtns.forEach(btn => btn.addEventListener('click', handleAdd));

    const subtractBtns = document.querySelectorAll('.subtract-btn');
    subtractBtns.forEach(btn => btn.addEventListener('click', handleSubtract));
}

async function createCouponAndCheckout() {
    const couponHtml = `
    <div class="item coupon">
        <div class="coupon-position">
            <label>I have a coupon</label>
            <input title="Coupon" id="Coupon" type="text">
            <label id="Coupon-Label"></label>
        </div>
        <div class="total-price">
            <table id="Price-table">
                <tr>
                    <td>Total</td>
                    <td id="Total-Price"></td>
                </tr>
            </table>
        </div>
    </div>
    <div class="item checkout" id="Checkout"> 
        <button id="Checkout-Button" type="button">Checkout</button>
        <div id="Reciept"></div>
    </div>
    `;

    document.getElementById("Checkout-Container").innerHTML +=  couponHtml;
    updateTotalPrice();
}

async function attachEventListenersCheckout() {
    const couponInput = document.querySelector('#Coupon');
    couponInput.addEventListener('input', handleCoupon);

    const checkout = document.querySelector('#Checkout-Button');
    checkout.addEventListener('click', handleCheckout);
}


//!!! ATENÇÂO REMOVER CÓDIGO COMENTADO ANTES DE ENTREGA MANTENHO PARA FACILITAR DEBUG CASO NECESSÀRIO !!!
window.onload = async function() {
    console.log('Product loading');
    await loadProductsMain();
    console.log(JSON.parse(sessionStorage.getItem('products')));
    console.log(JSON.parse(sessionStorage.getItem('cart')));
    console.log('Navbar loading');
    await createNavbar();
    console.log('Cart loading');
    await createCart();
    console.log('Coupon and checkout areas loading');
    await createCouponAndCheckout()
    console.log('SidePanel control init');
    await initializeHamburgerMenu();
    console.log('Event listeners setup');
    await attachEventListenersCart();
    await attachEventListenersCheckout()
    console.log('Load complete');
    console.log(JSON.parse(sessionStorage.getItem('products')));
    console.log(JSON.parse(sessionStorage.getItem('cart')));
};