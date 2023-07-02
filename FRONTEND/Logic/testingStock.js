function StockVerification(quantity) {
    let productStock = 3; // trocar isto para a quantidade de stock da API
    return quantity <= productStock; // retorna a quantia menor ou igual ao stock
  }
  
  // atualiza a quantityLabel com a quantia dada
  function updateQuantityLabel(quantityLabel, quantity) {
    quantityLabel.textContent = quantity.toString();
  }
  
  const checkoutButton = document.getElementById('Checkout-Button');
  checkoutButton.addEventListener('click', () => {
    const quantityLabel = document.getElementById('Quantity-Label');
    const quantity = parseInt(quantityLabel.textContent);

    // chama o StockVerification e verificar se a quantidade é valida
    if (StockVerification(quantity)) { 
      console.log("Checkout successful!");
    } else {
      console.log("Product quantity exceeds stock!");
    }
  });

  // evento para cada click que é dado, remove 1
  const subButtons = document.querySelectorAll('#Sub-Button');
  subButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const quantityLabel = button.nextElementSibling;
      let quantity = parseInt(quantityLabel.textContent);
      if (quantity > 1) {
        quantity -= 1;
        updateQuantityLabel(quantityLabel, quantity);
      }
    });
  });
  
  // evento para cada click que é dado, adiciona 1
  const addButtons = document.querySelectorAll('#Add-button');
  addButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const quantityLabel = button.previousElementSibling;
      let quantity = parseInt(quantityLabel.textContent);
      quantity += 1;
      updateQuantityLabel(quantityLabel, quantity);
    });
  });
  
  // evento para remover o produto
  const removeButtons = document.querySelectorAll('#Remove');
  removeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const cartInfo = button.parentNode.parentNode;
      cartInfo.parentNode.parentNode.remove();
    });
  });