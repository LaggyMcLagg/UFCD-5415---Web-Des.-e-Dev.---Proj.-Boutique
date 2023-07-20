export function searchProducts(event) {
    event.preventDefault();

    const searchTerm = event.target.querySelector("#Searchbar").value;

    const products = JSON.parse(sessionStorage.getItem('products'));
    
    let words = [];
    let inputValueWords = [];

    let search = [];
    
    if (searchTerm) {

        inputValueWords = searchTerm.toLowerCase().split(" ")

        products.forEach(product => {

            words = product.name.toLowerCase().split(" ");

            let i = 0;
            let j = 0;

            words.forEach(word => {
                
                inputValueWords.map(input => {

                    if (input == words[j]) {
                        
                        if (!search.includes(product.id)) {
                            search.push(product.id);
                            console.log(search)
                        }

                    }
                    i++; 
                });
                j++
            });
            
        });
    }

    if(search.length > 0) {
        sessionStorage.setItem('search', JSON.stringify(search));
    }

    console.log(JSON.parse(sessionStorage.getItem('search')));

    window.location.href = "../userinterface/html/gallery.html";
}