export function searchProducts(event) {
    event.preventDefault();

    const searchTerm = event.target.querySelector("#Searchbar").value;

    const products = JSON.parse(sessionStorage.getItem('products'));
    
    let search = []; //store the ids
    if (searchTerm) {
        let words = [];
        let inputValueWords = [];


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