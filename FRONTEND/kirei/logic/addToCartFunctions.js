/**
 * ADDTOCART DOC BLOC
 *
 * Esta função adiciona um produto ao carrinho de compras em local storage, ou incrementa a sua quantidade se já estiver no carrinho.
 * Verifica se o produto está em stock antes de adicioná-lo ao carrinho e/ou aumentar a quantidade.
 * 
 * @function addToCart:
 * @param {string|number} productId: recebe por parametro o ID do produto a ser adicionado ao carrinho.
 * @var {Object} cart: objeto que representa o carrinho de compras, onde as chaves são IDs de produto e os valores são quantidades.
 * @const {Object} product: objeto que representa o produto a ser adicionado ao carrinho.
 * @returns {boolean} Caso exista stock ou não.
 * 
 * Nota: Este é um exemplo de como o carrinho se parece:
 * {
 *     "1": 2,  // ID do produto : Quantidade
 *     "2": 1,
 *     "3": 5
 * }
 */

export function addToCart(productId) {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || {};
    const products = JSON.parse(sessionStorage.getItem('products'));
    const product = products.find(product => Number(productId) === product.id);

    if (!product) {
        console.log(`Product with ID ${productId} not found.`);
        return false;
    }

    if (cart[productId] < product.quantity) {
        cart[productId] += 1;
    } else if (!cart[productId] && product.quantity > 0) {
        cart[productId] = 1;
    } else {
        console.log(`Out of stock product ID ${productId}.`);
        return false;
    }

    sessionStorage.setItem('cart', JSON.stringify(cart));

    return true;
}