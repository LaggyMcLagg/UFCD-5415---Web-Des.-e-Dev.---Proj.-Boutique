
import { loadProductsMain } from '../JSMAIN/main.js';
import { postCheckout } from '../JSMAIN/main.js';
import { postCoupon } from '../JSMAIN/main.js';
import { initializeSidePanelControl } from '../../Logic/sidePanelControl.js';


//!!!! FOR TESTING !!!!
const cart = {
    "1": 2,
    "2": 1,
    "3": 5
  };
  sessionStorage.setItem('cart', JSON.stringify(cart));
//--------------------------------------------------------

async function createNavbar() {
    const navbar = `
    <header>
        <nav class="navbar-class">
            <div class="container">
                <a href="index.html" class="logo-class">logo</a>
                <div class="searchbar-class">
                    <input type="text" class="searchinput-class" placeholder="Search">
                    &#128269;
                </div>
                <div class="cartandmenu-class"></div>
                <a href="checkout.html" class="cart-class">cart</a>
                <div class="hamburger-class">
                    <button id="Hamburger-Button">&#9776;</button>
                </div>
            </div>
        </nav>
    </header>`;
    document.body.innerHTML += navbar;
}

async function createSidePanel() {
    const sidePanel = `
    <div class="side-panel" id="Side-Panel">
        <div class="side-panel-content">
            <h2>Side Panel Content</h2>
            <p>This is the side panel content.</p>
            <p>It works</p>
            <span style='font-size:100px;'>&#9889;</span>
            <span style='font-size:100px;'>&#9889;</span>
            <span style='font-size:100px;'>&#9889;</span>
            <span style='font-size:100px;'>&#9889;</span>
        </div>
    </div>`;
    document.body.innerHTML += sidePanel;
}

async function createCart() {

    const products = JSON.parse(sessionStorage.getItem('products'));
    const cart = JSON.parse(sessionStorage.getItem('cart'));

    let cartContainer = `
        <div class="item product" id="Product">
            <div class="small-container cart-page">
                <table id="Product-Table" class="product-table">
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>SubTotal</th>
                    </tr>`;


    for (const [productId, quantity] of Object.entries(cart)) {

        const product = products.find(p => p.id == productId);

        if (product) {
            let cartItem = `
                <tr id="product-row-${product.id}">
                    <td>
                        <div id="Cart-Info" class="cart-info">
                            <img id="Shirt-Image" title="shirt-img" src="${product.imgSrc}">
                            <div>
                                <p>${product.name}</p>
                                <small id="Price">Price: €${product.price.toFixed(2)}</small>
                                <a id="Remove" href="">Remove</a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <button id="Sub-Button-${product.id}" type="button">-</button>
                        <label id="Quantity-Label-${product.id}">${quantity}</label>
                        <button id="Add-button-${product.id}" type="button">+</button>
                    </td>
                    <td id="Price-tag-${product.id}">€${(product.price * quantity).toFixed(2)}</td>
                </tr>`;

            cartContainer += cartItem;
        }
    }

    // Close tags
    cartContainer += `
                </table>
            </div>
        </div>`;

    // Append to body
    document.body.innerHTML += cartContainer;
}

//!!! DEPOIS VER FORMA DE EXTRAIR FUNÇÔES PARA A LOGIC LAYER !!!
// CART LOGIC
function updateCart(productId, quantity) {
    let cart = JSON.parse(sessionStorage.getItem('cart'));
    if (quantity > 0) {
        cart[productId] = quantity;
    } else {
        delete cart[productId];
    }
    sessionStorage.setItem('cart', JSON.stringify(cart));
}

function updateQuantity(productId, quantity, price) {
    document.getElementById(`Quantity-Label-${productId}`).textContent = quantity;
    document.getElementById(`Price-tag-${productId}`).textContent = `€${(price * quantity).toFixed(2)}`;
}

function removeProduct(productId) {
    let productRow = document.getElementById(`product-row-${productId}`);
    productRow.parentNode.removeChild(productRow);
}

document.getElementById(`Sub-Button-${product.id}`).addEventListener('click', function() {
    let quantity = cart[product.id];
    if (quantity > 0) {
        quantity--;
        updateCart(product.id, quantity);
        updateQuantity(product.id, quantity, product.price);
        if (quantity == 0) {
            removeProduct(product.id);
        }
    }
});

document.getElementById(`Add-button-${product.id}`).addEventListener('click', function() {
    let quantity = cart[product.id];
    let productInStock = products.find(p => p.id == product.id).quantity;
    if (quantity < productInStock) {
        quantity++;
        updateCart(product.id, quantity);
        updateQuantity(product.id, quantity, product.price);
    }
});
//------------------------------------------------------------------------------------------------



//!!! ATENÇÂO REMOVER CÓDIGO COMENTADO ANTES DE ENTREGA MANTENHO PARA FACILITAR DEBUG CASO NECESSÀRIO !!!
console.log('Load init');
window.onload = async function() {
    console.log('Product loading');
    await loadProductsMain();
    console.log(JSON.parse(sessionStorage.getItem('products')));
    console.log('Navbar loading');
    await createNavbar();
    console.log('Products loading');
    await createCart();
    console.log('SidePanel loading');
    await createSidePanel();
    console.log('SidePanel cont init');
    await initializeSidePanelControl();
    console.log('Load complete');
    console.log(JSON.parse(sessionStorage.getItem('products')));
    console.log(JSON.parse(sessionStorage.getItem('cart')));
};