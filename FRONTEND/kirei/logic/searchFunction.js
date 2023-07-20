export function searchProducts(event) {
    event.preventDefault();

    const searchTerm = event.target.querySelector("#Searchbar").value;

    const products = JSON.parse(sessionStorage.getItem('products'));

    const foundProductIds = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).map(product => product.id);

    if(foundProductIds.length > 0) {
        sessionStorage.setItem('search', JSON.stringify(foundProductIds));
    }

    console.log(JSON.parse(sessionStorage.getItem('search')));

    window.location.href = "/userinterface/html/gallery.html";
}