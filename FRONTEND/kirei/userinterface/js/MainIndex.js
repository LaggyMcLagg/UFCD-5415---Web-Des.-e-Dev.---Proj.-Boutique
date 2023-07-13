/**
* MAININDEX.JS DOC BLOC
*
* Este script irá criar e formatar a página de index da loja.
*
* IMPORTS--------------------------------------------------------
* @module loadProductsMain: Importado de './main.js', função para carregar produtos para a variável local no load da página, requisito de avaliação.
* @module initializeSidePanelControl: Importado de '../../logic/sidePanelControl.js', função para funcionalidade do painel lateral.
* @module applyBackgroundHero: Importado de '../../logic/cylceTroughPhotosFunction.js'.
* --------------------------------------------------------------- 
*
* CREATE NAVBAR--------------------------------------------------
* @async @function createNavbar: função para criar a barra de navegação e adicioná-la ao corpo do documento.
* @const {string} navbar: variável que contém a estrutura HTML da barra de navegação.
* @returns {Promise} uma promise que, quando resolvida, cria a barra de navegação.
* ---------------------------------------------------------------
*
* CREATE SIDEPANEL-----------------------------------------------
* @async @function createSidePanel: função para criar o painel lateral e adicioná-lo ao corpo do documento.
* @const {string} sidePanel: variável que contém a estrutura HTML do painel lateral.
* @returns {Promise} uma promise que, quando resolvida, cria o painel lateral.
* --------------------------------------------------------------- 
*
* CREATE FOOTER--------------------------------------------------
* @function Footer: Função para criar o rodapé.
* @returns {Promise} uma promise que, quando resolvida, cria o footer.
* --------------------------------------------------------------- 
*
* WINDOW ONLOAD--------------------------------------------------
* @async @event window.onload: evento que acciona várias funções quando a janela é totalmente carregada.
* NOTA: ORDEM DE LOAD TEM DE SER AQUELA
* @returns {Promise} uma promise que, quando resolvida, inicializa vários componentes do site e carrega os produtos.
* ---------------------------------------------------------------
*/
import { loadProductsMain } from './main.js';
import { initializeSidePanelControl } from '../../logic/sidePanelControl.js';
import { applyBackgroundHero } from '../../logic/cylceTroughPhotosFunction.js';

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
                <a href="./userinterface/html/checkout.html" class="cart-class">cart</a>
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
            <p>This will be the side panel content:</p>
            <a href="./userinterface/html/gallery.html" class="cart-class">Gallery</a>
            <a href="" class="cart-class">Contact us</a>
            <p>It works</p>
            <span style='font-size:100px;'>&#9889;</span>
            <span style='font-size:100px;'>&#9889;</span>
            <span style='font-size:100px;'>&#9889;</span>
            <span style='font-size:100px;'>&#9889;</span>
        </div>
    </div>`;
    document.body.innerHTML += sidePanel;
}

export async function createFooter() {
    const footer = `
    <footer class="footer-class">
        <div>
            <a href="https://facebook.com">FB</a>
            <a href="https://twitter.com/">Twitter</a>
            <a href="https://www.instagram.com/">Instagram</a>
        </div>
    </footer>>`;
    document.body.innerHTML += footer;
}

//!!! ATENÇÂO REMOVER CÓDIGO COMENTADO ANTES DE ENTREGA MANTENHO PARA FACILITAR DEBUG CASO NECESSÀRIO !!!
console.log('Load init');
window.onload = async function() {
    console.log('Product loading');
    await loadProductsMain();
    console.log('Hero loading');
    await applyBackgroundHero();
    console.log('Navbar loading');
    await createNavbar();
    console.log('Footer loading');
    await createFooter();
    console.log('SidePanel loading');
    await createSidePanel();
    console.log('SidePanel controlador init');
    await initializeSidePanelControl();
    console.log('Load complete products and cart report:');
    console.log(JSON.parse(sessionStorage.getItem('products')));
    console.log(JSON.parse(sessionStorage.getItem('cart')));
};