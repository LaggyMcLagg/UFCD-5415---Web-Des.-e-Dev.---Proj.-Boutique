import { getProducts } from "../User-Interface/JSMAIN/main.js";

export async function stockVerification() {
  try {
    const quantityLabel = document.querySelector('#itemInfo .Quantity-Label');
    const products = await getProducts();

    if (quantityLabel && products && products.length > 0) {
      const quantity = parseInt(quantityLabel.textContent);

      products.forEach(product => {
        if (product.quantity < quantity) {
          console.log("Product quantity exceeds stock!");
        } else {
          console.log("Checkout successful!");
        }
      });
    } else {
      console.log("Failed to retrieve product information.");
    }
  } catch (error) {
    console.error("Failed to retrieve product information:", error);
  }
}
