
import { loadProductsMain } from './main.js';
import { postCheckout } from './main.js';
import { postCoupon } from './main.js';
import { initializeSidePanelControl } from '../../logic/sidePanelControl.js';


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
                <a href="../../index.html" class="logo-class">logo</a>
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

    if(Object.keys(cart).length === 0) {
        const emptyCartMessage = `
        <div class="item product" id="Product">
            <div class="small-container cart-page">
                <h1>Empty Cart, no Items selected</h1>
            </div>
        </div>`;

        document.body.innerHTML += emptyCartMessage;
        return;
    }

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
                                <small id="Price">Price: €${Number(product.price).toFixed(2)}</small>
                                <a id="Remove-${productId}" href="">Remove</a>
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

    cartContainer += `
                </table>
            </div>
        </div>`;

    document.body.innerHTML += cartContainer;
}

async function createCouponAndCheckout() {
    let couponContainer = `
        <div class="item coupon">
            <div class="coupon-position">
                <label>I have a coupon</label>
                <input title="Coupon" id="Coupon" type="text">
            </div>

            <div class="total-price">
                <table id="Price-table">
                    <tr>
                        <td>Total</td>
                        <td id="Total-Price">€0.00</td>
                    </tr>
                </table>
            </div>
        </div>

        <button id="Checkout-Button" disabled>Checkout</button>
        <label id="Feedback"></label>`;

    document.body.innerHTML += couponContainer;
}

//!!! DEPOIS VER FORMA DE EXTRAIR FUNÇÔES PARA A LOGIC LAYER !!!
async function setUpEventListeners() {
    const cart = JSON.parse(sessionStorage.getItem('cart'));
    const products = JSON.parse(sessionStorage.getItem('products'));
    const productIds = Object.keys(cart);

    productIds.forEach(productId => {
        const product = products.find(p => p.id == productId);

        if (!product) {
            return;
        }

        const addButton = document.getElementById(`Add-button-${productId}`);
        const subButton = document.getElementById(`Sub-Button-${productId}`);
        const removeAnchor = document.getElementById(`Remove-${productId}`);

        addButton.addEventListener('click', function() {
            let currentQuantity = cart[productId];
            let productInStock = product.quantity;
            if (currentQuantity < productInStock) {
                currentQuantity++;
                updateCart(productId, currentQuantity);
                updateQuantity(productId, currentQuantity, product.price);
            }
        });

        subButton.addEventListener('click', function() {
            let currentQuantity = cart[productId];
            if (currentQuantity > 0) {
                currentQuantity--;
                updateCart(productId, currentQuantity);
                updateQuantity(productId, currentQuantity, product.price);
                if (currentQuantity == 0) {
                    removeProduct(productId);
                }
            }
        });

        removeAnchor.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default link click action
            removeProduct(productId);
            updateCart(productId, 0);
        });
    });

    const couponInput = document.getElementById('Coupon');
    const feedbackLabel = document.getElementById('Feedback');
    const checkoutButton = document.getElementById('Checkout-Button');

    couponInput.addEventListener("input", async () => {
        const coupon = couponInput.value;
        if (coupon) {
            const response = await postCoupon(coupon);
            if (response.success) {
                checkoutButton.disabled = false;
                const totalPrice = document.getElementById('Total-Price');
                const originalPrice = parseFloat(totalPrice.textContent.substring(1)); 
                const discount = response.discount / 100;
                totalPrice.textContent = '€' + (originalPrice - originalPrice * discount).toFixed(2);
            } else {
                checkoutButton.disabled = true;
                feedbackLabel.textContent = response.error;
            }
        } else {
            checkoutButton.disabled = false;
        }
    });

    checkoutButton.addEventListener("click", async () => {
        const response = await postCheckout(products, couponInput.value);

        if (response.success) {
            feedbackLabel.textContent = response.message;
            sessionStorage.removeItem('cart');
        } else {
            feedbackLabel.textContent = response.error;
        }
    });
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
    console.log('SidePanel loading');
    await createSidePanel();
    console.log('SidePanel cont init');
    await initializeSidePanelControl();
    console.log('Event listeners setup');
    await setUpEventListeners();
    console.log('Load complete');
    console.log(JSON.parse(sessionStorage.getItem('products')));
    console.log(JSON.parse(sessionStorage.getItem('cart')));
};