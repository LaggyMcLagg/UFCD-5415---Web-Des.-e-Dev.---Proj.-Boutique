
import { loadProductsMain } from '../JSMAIN/main.js';
import { initializeSidePanelControl } from '../../Logic/sidePanelControl.js';

async function createNavbar() {
    const navbar = `
    <header>
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
    </header>`;
    document.body.innerHTML += navbar;
}

async function createSidePanel() {
    const sidePanel = `
    <div class="side-panel" id="Side-Panel">
        <div class="side-panel-content">
            <h2>Side Panel Content</h2>
            <p>This is the side panel content.</p>
            <p>It works</p>
            <span style='font-size:100px;'>&#9889;</span>
            <span style='font-size:100px;'>&#9889;</span>
            <span style='font-size:100px;'>&#9889;</span>
            <span style='font-size:100px;'>&#9889;</span>
        </div>
    </div>`;
    document.body.innerHTML += sidePanel;
}

export function Footer() {
    return `
    <footer className="footerdesktop-class">
        <div>
            <a href="https://facebook.com">FB</a>
            <a href="https://twitter.com/">Twitter</a>
            <a href="https://www.instagram.com/">Instagram</a>
        </div>
    </footer>>`;
}

//!!! ATENÇÂO REMOVER CÓDIGO COMENTADO ANTES DE ENTREGA MANTENHO PARA FACILITAR DEBUG CASO NECESSÀRIO !!!
console.log('Load init');
window.onload = async function() {
    console.log('Product loading');
    await loadProductsMain();
    console.log('Navbar loading');
    await createNavbar();
    console.log('SidePanel loading');
    await createSidePanel();
    console.log('SidePanel controlador init');
    await initializeSidePanelControl();
    console.log('Load complete products and cart report:');
    console.log(JSON.parse(sessionStorage.getItem('products')));
    console.log(JSON.parse(sessionStorage.getItem('cart')));
};