// import { loadProductsMain } from '../User-Interface/JSMAIN/main.js'


{
    // formEl.onsubmit('submit', (event) => {
    //     event.preventDefault();

    //     const input = formEl.getElementById("searchInput");

    //     console.log(input);

    // });

    // function formsub(event) {

    //     const input = document.querySelector("#searchInput");

    //     console.log(input);
    // }

    // formEl.onsubmit = (event) => {
    //     event.preventDefault();

    //     const input = document.querySelector("#searchInput").value;

    //     console.log(input);
    // }
}

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

const formEl = document.getElementById("formSearchbar");

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputValue = document.querySelector("#searchInput").value;


    // loadProductsMain();

    // JSON.parse(sessionStorage.getItem('products'))
    // console.log(JSON.parse(sessionStorage.getItem('products')))

    let word = [];

    names.forEach(name => {
        word += name.name.split(' ');
        word += ";";
    });

    console.log(names);
    console.log(word.split(';'));
})


// < form id = "formSearchbar" >
//     <input type="text" id="searchInput" class="searchbar" placeholder="Search">
//     <input type="submit" value="Submit">
// </form>

// <script type="module" src="../JSMAIN/main.js"></script>
// <script type="module" src="../../Logic/contactusSearchbar.js"></script>
