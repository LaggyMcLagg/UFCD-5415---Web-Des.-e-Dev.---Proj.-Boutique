import { postCoupon } from '../userinterface/js/main.js';
import { postCheckout } from '../userinterface/js/main.js';

export function updateTotalPrice() {
    const cart = JSON.parse(sessionStorage.getItem('cart'));
    const products = JSON.parse(sessionStorage.getItem('products'));

    let totalPrice = 0;
    for (let productId in cart) {
        let product = products.find(product => product.id == Number(productId));
        if (product) {
            totalPrice += parseFloat(product.price) * cart[productId];
        }
    }

    document.querySelector('#Total-Price').innerHTML = `€${totalPrice.toFixed(2)}`;
}

export function handleRemove(event) {
    event.preventDefault();
    const productId = event.target.getAttribute('data-id');
    let cart = JSON.parse(sessionStorage.getItem('cart'));

    delete cart[productId];

    sessionStorage.setItem('cart', JSON.stringify(cart));
    
    document.querySelector(`#Cart-Info-${productId}`).remove();

    updateTotalPrice();
}

export function handleAdd(event) {
    const productId = event.target.getAttribute('data-id');
    const outStockLabel = document.getElementById(`Label-Out-Stock-${productId}`);

    let cart = JSON.parse(sessionStorage.getItem('cart'));
    let products = JSON.parse(sessionStorage.getItem('products'));
    let product = products.find(product => product.id == Number(productId));

    if (product.quantity > cart[productId]) {
        cart[productId]++;

        sessionStorage.setItem('cart', JSON.stringify(cart));
        sessionStorage.setItem('products', JSON.stringify(products));

        document.querySelector(`#Quantity-Label-${productId}`).innerText = cart[productId];
        document.querySelector(`#Price-tag-${productId}`).innerText = `$${(parseFloat(product.price) * cart[productId]).toFixed(2)}`;
    } else {
        event.target.disabled = true;
        outStockLabel.innerText = 'Not enough stock';
    }

    updateTotalPrice();
}

export function handleSubtract(event) {
    const productId = event.target.getAttribute('data-id');
    const addButon = document.getElementById(`Add-Button-${productId}`);
    const outStockLabel = document.getElementById(`Label-Out-Stock-${productId}`);

    let cart = JSON.parse(sessionStorage.getItem('cart'));
    let products = JSON.parse(sessionStorage.getItem('products'));
    let product = products.find(product => product.id == Number(productId));

    if (cart[productId] > 1) {

        if (addButon.disabled){
            addButon.disabled = false;
            outStockLabel.innerText = '';
        }

        cart[productId]--;

        sessionStorage.setItem('cart', JSON.stringify(cart));

        document.querySelector(`#Quantity-Label-${productId}`).innerText = cart[productId];
        document.querySelector(`#Price-tag-${productId}`).innerText = `$${(parseFloat(product.price) * cart[productId]).toFixed(2)}`;

    } else {

        delete cart[productId];
        sessionStorage.setItem('cart', JSON.stringify(cart));
        document.querySelector(`#Cart-Info-${productId}`).remove();
    }

    updateTotalPrice();
}

export async function handleCoupon(event) {
    const coupon = event.target.value;
    const couponLabel = document.querySelector('#Coupon-Label');
    const checkoutButton = document.querySelector('#Checkout-Button');

    if (coupon === '') {
        couponLabel.innerHTML = '';
        checkoutButton.disabled = false;
        return;
    }

    try {
        const data = await postCoupon(coupon);

        if (data.success) {
            couponLabel.innerHTML = `${data.discount}% discount`;
            checkoutButton.disabled = false;
        } else {
            throw new Error(data.error);
        }

    } catch (error) {
        couponLabel.innerHTML = error.message;
        checkoutButton.disabled = true;
    }
}

export function clearCart() {
    const productTable = document.getElementById('Product-Table');
    const cartContainer = document.getElementById('Cart-Container');
    
    sessionStorage.removeItem('cart');
    productTable.remove();

    cartContainer.innerHTML = '<h1>Cart is empty.</h1>';
}

export async function handleCheckout(){
    try {
        const cart = JSON.parse(sessionStorage.getItem('cart') || '{}');
        const coupon = document.querySelector('#Coupon').value;
        const receiptDiv = document.querySelector('#Reciept');
        
        // object entries converte os objecto que estão dentro do cart a a key e o seu valor num array de arrays [["1", 2]["2", 3]]
        // o map pega nestes arrays e transformaos num array de objectos [{id: 1, quantity: 2}{id: 2, quantity: 3}]
        // que é o formato esperado pelo postCheckout para products
        const products = Object.entries(cart).map(([id, quantity]) => ({ id: Number(id), quantity }));

        const data = await postCheckout(products, coupon);

        if (data.success) {
            // isto substitui ter de fazer data.checkout.id  data.checkout.coupon (...) para todos os parametros do objecto checkout
            const { products, coupon, total, discounted_total } = data.checkout;
            const formattedProducts = JSON.parse(products).map(product => `Product ID: ${product.id}, Quantity: ${product.quantity}`).join('<br />');

            const receiptHtml = `
            <h2>Receipt</h2>
            <p>Products:<br />${formattedProducts}</p>
            <p>Coupon: ${coupon || 'None'}</p>
            <p>Total: ${total}</p>
            ${discounted_total ? `<p>Discounted Total: ${(discounted_total).toFixed(2)}</p>` : ''}
            `;

            receiptDiv.innerHTML = receiptHtml;

            clearCart();  
        } else {
            const receiptHtml = `
            <h2>Error</h2>
            <p>${data.error}</p>
            `;

            receiptDiv.innerHTML = receiptHtml;
        }

    } catch (error) {
        console.error(error);
    }
}