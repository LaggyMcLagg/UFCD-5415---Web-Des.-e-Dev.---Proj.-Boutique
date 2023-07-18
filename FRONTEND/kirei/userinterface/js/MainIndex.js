/**
* MAININDEX.JS DOC BLOC
*
* Este script irá criar e formatar a página de index da loja.
*
* IMPORTS--------------------------------------------------------
* @module loadProductsMain: Importado de './main.js', função para carregar produtos para a variável local no load da página, requisito de avaliação.
* @module initializeHamburgerMenu: Importado de '../../logic/sidePanelControl.js', função para funcionalidade do painel lateral.
* @module applyBackgroundHero: Importado de '../../logic/cylceTroughPhotosFunction.js'.
* --------------------------------------------------------------- 
*
* CREATE NAVBAR--------------------------------------------------
* @async @function createNavbar: função para criar a barra de navegação e adicioná-la ao corpo do documento.
* @const {string} navbar: variável que contém a estrutura HTML da barra de navegação.
* @returns {Promise} uma promise que, quando resolvida, cria a barra de navegação.
* ---------------------------------------------------------------
*
* CREATE FOOTER--------------------------------------------------
* @function Footer: Função para criar o rodapé.
* @returns {Promise} uma promise que, quando resolvida, cria o footer.
* --------------------------------------------------------------- 
*
*/

import '../css/CssIndex.css';
import { loadProductsMain } from './main.js';
import { applyBackgroundHero } from '../../logic/cylceTroughPhotosFunction.js';
import { initializeHamburgerMenu } from '../../logic/initHamburgerMenu.js'

function createNavbar() {
    document.getElementById('Navbar').innerHTML = `
    <nav>
        <div class="navbar">
            <div class="hamburger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <ul class="horizontal-nav">
                <li><a href="index.html">LOGO</a></li>
                <li>
                    <form>
                        <input type="text" class="searchbar" placeholder="Search">
                        <input type="submit" value="Submit">
                    </form>
                </li>
                <li><a href="./userinterface/html/checkout.html">Cart</a></li>
            </ul>
            <ul class="menu">
                <li><a href="./userinterface/html/gallery.html">Galeria</a></li>
                <li><a href="./userinterface/html/contact.html">Contact Us</a></li>
                <li><a href="#">Item 3</a></li>
                <li><a href="#">Item 4</a></li>
            </ul>
        </div>
    </nav>`;
}

export function createFooter() {
    document.getElementById('Footer').innerHTML = `
        <div>
            <a href="https://facebook.com">FB</a>
            <a href="https://twitter.com/">Twitter</a>
            <a href="https://www.instagram.com/">Instagram</a>
        </div>`;
}

//IIFE (Immediatly Invoked Function Expression)
(async () => {
    console.log('Navbar loading');
    createNavbar();
    console.log('Footer loading');
    createFooter();
    console.log('Hero loading');
    applyBackgroundHero(); // If this function returns a Promise it should be awaited
    console.log('SidePanel controlador init');
    initializeHamburgerMenu();
    console.log('Product loading');
    await loadProductsMain();
    console.log('Load complete products and cart report:');
    console.log(JSON.parse(sessionStorage.getItem('products')));
    console.log(JSON.parse(sessionStorage.getItem('cart')));
})();