import { stockVerification } from "../../Logic/checkout.js"

const checkoutButton = document.getElementById('Checkout-Button');

checkoutButton.addEventListener('click', stockVerification);

const htmlCode = `
<tr>
  <td>
    <div id="Cart-Info-{id}" class="cart-info">
      <img id="Shirt-Image" title="shirt-img" src="../../../LAYOUT_DESGIN/IMG-PHOTOS/woman-shirt-01.jpg">
      <div>
        <p>Plain White Shirt</p>
        <small id="Price">Price: €20.00</small>
        <a id="Remove" href="">Remove</a>
      </div>
    </div>
  </td>
  <td>
    <button class="Sub-Button" type="button">-</button>
    <label class="Quantity-Label">1</label>
    <button class="Add-button" type="button">+</button>
  </td>
  <td class="Price-tag">€20.00</td>
</tr>
`;

const btn = document.getElementById('queiko');
let x = 0;

btn.addEventListener("click", function() {
  const productTable = document.getElementById('Product-Table');
  const row = document.createElement('tr');
  row.innerHTML = htmlCode.replace('{id}', x);
  productTable.appendChild(row);
  x += 1;
});

// Event listener for dynamically added remove buttons
document.addEventListener('click', (event) => {
  if (event.target && event.target.id === 'Remove') {
    event.preventDefault();
    const cartItem = event.target.closest('tr');
    cartItem.remove();
  }
});

// Event listener for dynamically added subtract buttons
document.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('Sub-Button')) {
      const quantityLabel = event.target.nextElementSibling;
      let quantity = parseInt(quantityLabel.textContent);
      if (quantity > 1) {
        quantity--;
        quantityLabel.textContent = quantity.toString();
      }
    }
  });
  
  // Event listener for dynamically added add buttons
  document.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('Add-button')) {
      const quantityLabel = event.target.previousElementSibling;
      let quantity = parseInt(quantityLabel.textContent);
      quantity++;
      quantityLabel.textContent = quantity.toString();
    }
  });



///DO NOT TOUCH///
//   let container = document.getElementById("container");

//   function removeElement(event) {
//     let div = event.target.parentNode;
//     container.removeChild(div);
//   }

//   for (let i = 0; i < x; i++) {
//     var div = document.createElement("div");
//     div.className = "box";
//     div.textContent = "Elemento " + (i + 1);
//     var removeButton = document.createElement("button");
//     removeButton.textContent = "Remover";
//     removeButton.className = "remove-button";
//     removeButton.addEventListener("click", removeElement);
//     div.appendChild(removeButton);
//     container.appendChild(div);