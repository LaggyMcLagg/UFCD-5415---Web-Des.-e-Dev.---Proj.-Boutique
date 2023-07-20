// import { loadProductsMain } from '../User-Interface/JSMAIN/main.js'

let names = [
    {
        id: 1,
        name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats"
    },
    {
        id: 2,
        name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket"
    },
    {
        id: 3,
        name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats"
    },
    {
        id: 4,
        name: "MBJ Women's Solid Short Sleeve Boat Neck V"
    },
    {
        id: 5,
        name: "Opna Women's Short Sleeve Moisture"
    },
    {
        id: 6,
        name: "DANVOUY Womens T Shirt Casual Cotton Short"
    },
]

//this goes to models.
const formEl = document.getElementById("formSearchbar");

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputValue = document.querySelector("#searchInput").value.toLowerCase();

    searchbar(inputValue);

});



function searchbar(inputValue) {

    // const products = JSON.parse(sessionStorage.getItem('products'));

    // console.log(products);
    
    if (inputValue) {
        let words = [];
        let inputValueWords = [];

        let search = []; //store the ids

        inputValueWords = inputValue.toLowerCase().split(" ")

        names.forEach(product => {

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

        // if(search.length > 0) {
        //     sessionStorage.setItem('search', JSON.stringify(search));
        // }
    
        // console.log(JSON.parse(sessionStorage.getItem('search')));
    
        // window.location.href = "../userinterface/html/gallery.html";

        
        
        
            // const foundProductIds = products.filter(product => 
            //     product.name.toLowerCase().includes(searchTerm.toLowerCase())
            // ).map(product => product.id);
        

        //guardar ids para session storage
        //search.add(ids...)
        //chamar galeria
        console.log(search);

    }
}


// < form id = "formSearchbar" >
//     <input type="text" id="searchInput" class="searchbar" placeholder="Search">
//     <input type="submit" value="Submit">
// </form>

// <script type="module" src="../JSMAIN/main.js"></script>
// <script type="module" src="../../Logic/contactusSearchbar.js"></script>
