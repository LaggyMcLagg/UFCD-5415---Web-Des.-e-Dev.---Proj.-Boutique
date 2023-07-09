export function table() {

    const prodEl = document.getElementById('Product');
    const tableEl = document.createElement('table');
  
    tableEl.innerHTML = `
      <div class="small-container cart-page">
          <table id="Product-Table" class="product-table">
              <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>SubTotal</th>
              </tr>
              
              <tr>
                  <td><div id="itemInfo"></div></td>
                  <td><button id="queiko" type="button">queiko</button></td>
              </tr>
          </table>
      </div>
    `;
  
    prodEl.appendChild(tableEl);
  }
  

export function searchCupons() {

    const cupEl = document.getElementById('Coupon');

    cupEl.innerHTML = `
    <div class="coupon-position">
        <label>I have a coupon</label>
        <input title="Coupon" tiid="Coupon" type="text">
    </div>

    <div class="total-price">
        <table id="Price-table">
            <tr>
                <td>Total</td>
                <td id="Total-Price">€40.00</td>
            </tr>
        </table>
    </div>
    `;
}

export function checkButton() {

    const checkEl = document.getElementById('Checkout');

    checkEl.innerHTML = `<button id="Checkout-Button" type="button">Checkout</button>`;

}