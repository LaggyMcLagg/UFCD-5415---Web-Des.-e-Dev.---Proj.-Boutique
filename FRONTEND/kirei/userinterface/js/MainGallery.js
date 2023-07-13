/**
* MAINGALLERY.JS DOC BLOC
*
* Este script irá criar e formatar a página de galeria da loja.
* 
* IMPORTS--------------------------------------------------------
* @module loadProductsMain: importado de '../JSMAIN/main.js', função para carregar os produtos para variável local on page load requisito de avaliação.
* @module initializeModalControl: importado de '../../Logic/modalControl.js', função para funcionalidade do modal.
* @module initializeSidePanelControl: importado de '../../Logic/sidePanelControl.js', função para funcionalidade do painel lateral.
* --------------------------------------------------------------- 
*
* CREATE NAVBAR--------------------------------------------------
* @async @function createNavbar: função para criar a barra de navegação e adicioná-la ao corpo do documento.
* @const {string} navbar: variável que contém a estrutura HTML da barra de navegação.
* @returns {Promise} uma promise que, quando resolvida, cria a barra de navegação.
* ---------------------------------------------------------------
*
* CREATE HIGHLIGHTS AREA-----------------------------------------
* @async @function createHighlightsArea: função para criar a secção de destaques.
* @const {string} highlights: variável que contém a estrutura HTML da secção de destaques.
* ---------------------------------------------------------------
*
* CREATE ARTICLES------------------------------------------------
* @async @function createArticles: função para criar a secção de artigos.
* @const {Array} productsLoad: array de produtos carregados a partir da local storage.
* @var {string} articlesHTML: variável que contém a estrutura HTML dos artigos.
* --------------------------------------------------------------- 
*
* LOAD HIGLIGHTS-------------------------------------------------
* @async @function loadHighlights: função para carregar os produtos destacados na secção de destaques.
* @const {Array} productsLoad: array de produtos carregados a partir da local storage.
* @var {Array} highlightedProducts: array de produtos destacados.
* ---------------------------------------------------------------
*
* CREATE SIDEPANEL-----------------------------------------------
* @async @function createSidePanel: função para criar o painel lateral e adicioná-lo ao corpo do documento.
* @const {string} sidePanel: variável que contém a estrutura HTML do painel lateral.
* @returns {Promise} uma promise que, quando resolvida, cria o painel lateral.
* --------------------------------------------------------------- 
*
* CREATE MODAL---------------------------------------------------
* @async @function createModal: função para criar o modal e adicioná-lo ao corpo do documento.
* @const {string} modal: variável que contém a estrutura HTML do modal.
* @returns {Promise} uma promise que, quando resolvida, cria o modal.
* --------------------------------------------------------------- 
*
* WINDOW ONLOAD--------------------------------------------------
* @async @event window.onload: evento que acciona várias funções quando a janela é totalmente carregada.
* NOTA: ORDEM DE LOAD TEM DE SER AQUELA
* @returns {Promise} uma promise que, quando resolvida, inicializa vários componentes do site e carrega os produtos.
* ---------------------------------------------------------------
*/

import { loadProductsMain } from './main.js';
import { initializeModalControl } from '../../logic/modalControl.js';
import { initializeSidePanelControl } from '../../logic/sidePanelControl.js';

async function createNavbar() {
    const navbar = `
    <header>
        <nav class="navbar-class">
            <div class="container">
                <a href="../../index.html" class="logo-class">logo</a>
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

async function createHighlightsArea(){
    const highlights = `
    <div class="highlights-title-class"><h3>TITULO DESTAQUES</h3></div>
        <div class="highlights-div-class">
            <div class="highlight1-class" id="Open-Modal-Element"></div>
            <div class="highlight2-class" id="Open-Modal-Element"></div>
            <div class="highlight3-class" id="Open-Modal-Element"></div>
            <div class="highlight4-class" id="Open-Modal-Element"></div>
            <div class="highlight5-class" id="Open-Modal-Element"></div>
        </div>
    `
    document.body.innerHTML += highlights;
}

/*!!! NOTA DEV TIAGO
a galeria está a espera disto dentro da sessionStorage 'search', um array de IDs
por exemplo [2, 1, 5]
**/
async function createArticles() {
    const searchIds = JSON.parse(sessionStorage.getItem('search'));
    const productsLoad = JSON.parse(sessionStorage.getItem('products'));

    if (productsLoad) {
        let filteredProducts = productsLoad;

        if (searchIds) {
            filteredProducts = productsLoad.filter(product => Number(searchIds).includes(product.id));
            sessionStorage.removeItem('search');
        }

        let articlesHTML = '<div class="articles-title-class"><h3>TITULO ARTIGOS</h3></div><div class="articles-div-class">';

        for (let i = 0; i < filteredProducts.length; i++) {
            articlesHTML += `
                <div class="article-class" id="Open-Modal-Element" style="background-image: url('${filteredProducts[i].image}');" data-id="${filteredProducts[i].id}">
                </div>
            `;
        }
        
        articlesHTML += '</div>';
        document.body.innerHTML += articlesHTML;
    } else {
        console.log('No products found in local storage.')
    }
}

async function loadHighlights() {
    const productsLoad = JSON.parse(sessionStorage.getItem('products'));
    
    let highlightedProducts = productsLoad.filter(productData => productData.highlight);
    if (highlightedProducts.length === 0) {
        highlightedProducts = productsLoad.slice(0, 5);
    }
    
    if (highlightedProducts.length > 0) {
        highlightedProducts.forEach((productData, index) => {
            const highlightElement = document.querySelector(`.highlight${index + 1}-class`);
            if (highlightElement) {
                highlightElement.style.backgroundImage = `url('${productData.image}')`;
                highlightElement.dataset.id = productData.id;
            }
        });
    } else {
        console.log('No products found in local storage.')
    }
}

async function createSidePanel() {
    const sidePanel = `
    <div class="side-panel" id="Side-Panel">
        <div class="side-panel-content">
            <h2>Side Panel Content</h2>
            <p>This will be the side panel content:</p>
            <a href="./gallery.html" class="cart-class">Gallery</a>
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

async function createModal() {
    const modal = `
    <div id="Modal" class="modal">
        <div id="Modal-Content" class="modal-content">
        <span id="Close" class="close">&times;</span>

        <div id="Modal-End-Container" class="modal-end-container">
            <span class='star' data-star="1">&#11088;</span>
            <span class='star' data-star="2">&#11088;</span>
            <span class='star' data-star="3">&#11088;</span>
            <span class='star' data-star="4">&#11088;</span>
            <span class='star' data-star="5">&#11088;</span>
            <button id="Modal-Add-Cart">Add to Cart</button>
        </div&#11088

        </div>
    </div>`;
    document.body.innerHTML += modal;
}

//!!! ATENÇÂO REMOVER CONSOLE LOGS ANTES DE ENTREGA MANTENHO PARA FACILITAR DEBUG CASO NECESSÀRIO !!!
console.log('Load init');
window.onload = async function() {

    const searchResults = JSON.parse(sessionStorage.getItem('search'));

    console.log('Product loading');
    await loadProductsMain();
    console.log(JSON.parse(sessionStorage.getItem('products')));
    console.log('Navbar loading');
    await createNavbar();
    console.log('Modal loading');
    await createModal();
    console.log('SidePanel loading');
    await createSidePanel();

    if (searchResults === null) {
        console.log('Highlights creating');
        await createHighlightsArea();
        console.log('Highlights loading');
        await loadHighlights();
    }
    
    console.log('Articles creating');
    await createArticles();
    console.log('Modal cont init');
    await initializeModalControl();
    console.log('SidePanel cont init');
    await initializeSidePanelControl();
    console.log('Load complete');
    console.log(JSON.parse(sessionStorage.getItem('products')));
    console.log(JSON.parse(sessionStorage.getItem('cart')));
    console.log(JSON.parse(sessionStorage.getItem('search')));
};