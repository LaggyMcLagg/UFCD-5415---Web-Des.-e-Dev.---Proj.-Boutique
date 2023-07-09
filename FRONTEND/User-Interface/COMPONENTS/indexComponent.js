export function navbar() {

    const headerEl = document.querySelector("header");
    const navbarEl = document.createElement("navbar");

    navbarEl.innerHTML = `
        <nav class="navbar-class">
            <div class="container">
                <a href="index.html" class="logo-class">logo</a>
                <div class="searchbar-class">
                    <input type="text" class="searchinput-class" placeholder="Search">
                    &#128269;
                </div>
                <div class="cartandmenu-class"></div>
                <a href="checkout.html" class="cart-class">cart</a>
                <div class="hamburger-class">
                    <button id="Hamburger-Button">&#9776;</button>
                </div>
            </div>
        </nav>
        `;

    headerEl.appendChild(navbarEl);

}

export function sidebar() {
    const divEl = document.getElementById('Side-Panel');
    divEl.innerHTML = `
        <div class="side-panel-content">
          <h2>Side Panel Content</h2>
          <p>This is the side panel content.</p>
          <p>It works</p>
          <span style='font-size:100px;'>&#9889;</span>
          <span style='font-size:100px;'>&#9889;</span>
          <span style='font-size:100px;'>&#9889;</span>
          <span style='font-size:100px;'>&#9889;</span>
        </div>
    `;

}

export function footer() {
    const footerEl = document.querySelector('footer');

    footerEl.innerHTML = `
        <a href="https://facebook.com">FB</a>
        <a href="https://twitter.com/">Twitter</a>
        <a href="https://www.instagram.com/">Instagram</a>
    `;

}


// codigo de html ja que n tinha a certeza em que ficheiro deveria por este html para n estragar trabalho que esteja feito por outros
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="..\CSS\css-index.css">
//     <script src="../COMPONENTS/indexComponent.js" type="module" defer></script>
//     <script src="\FRONTEND\Logic\sidePanelControl.js" defer></script>
//     <title>Document</title>
// </head>

// <body>
//     <header>
//         <script type="module">
//             import { navbar } from '../COMPONENTS/indexComponent.js';
//             navbar(); 
//         </script>

//     </header>

//     <div class="side-panel" id="Side-Panel">
//         <script type="module">
//             import { sidebar } from '../COMPONENTS/indexComponent.js';
//             sidebar(); 
//         </script>
//     </div>

//     <footer class="footerdesktop-class">
//         <script type="module">
//             import { footer } from '../COMPONENTS/indexComponent.js';
//             footer(); 
//         </script>
//     </footer>

// </body>

// </html>