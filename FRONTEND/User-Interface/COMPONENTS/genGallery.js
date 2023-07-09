/**
* GENGALLERY.JS DOC BLOC
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
* CREATE HIGHLIGHTS----------------------------------------------
* @async @function createHighlights: função para criar a secção de destaques, com base nos produtos destacados ou nos primeiros produtos.
* @const {Array} productsLoad: array de produtos carregados a partir do local storage.
* @var {Array} highlightedProducts: array de produtos destacados.
* @var {string} highlights: variável que contém a estrutura HTML dos produtos destacados.
* NOTA: função preparada para possível escalagem, caso do lado da API se comece a querer fazer Highlight dos produtos, caso contrário coloca os
* primeiros encontrados.
* @returns {Promise} uma promise que, quando resolvida, cria a secção de destaques.
* --------------------------------------------------------------- 
*
* CREATE ARTICLES------------------------------------------------
* @async @function createArticles: função para criar a secção de artigos, agrupando-os de quatro em quatro.
* @const {Array} productsLoad: array de produtos carregados a partir do local storage.
* @var {string} articles: variável que contém a estrutura HTML dos artigos.
* @var {string} articleBlock: variável que contém a estrutura HTML de um bloco de artigos.
* @returns {Promise} uma promise que, quando resolvida, cria a secção de artigos.
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
* @async @event window.onload: evento que aciona várias funções quando a janela é totalmente carregada.
* NOTA: ORDEM DE LOAD TEM DE SER AQUELA
* @returns {Promise} uma promise que, quando resolvida, inicializa vários componentes do site e carrega os produtos.
* ---------------------------------------------------------------
*/


import { loadProductsMain } from '../JSMAIN/main.js';
import { initializeModalControl } from '../../Logic/modalControl.js';
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

async function createHighlights() {
    const productsLoad = JSON.parse(localStorage.getItem('products'));

    let highlightedProducts = productsLoad.filter(productData => productData.highlight);

    if (highlightedProducts.length === 0) {
        highlightedProducts = productsLoad.slice(0, 4);
    }

    if (highlightedProducts.length > 0) {
        let highlights = `
            <div class="higghligsttitle-class"><h3>TITULO DESTAQUES</h3></div>
            <div class="highlightsdiv-class">`;

        highlightedProducts.forEach(productData => {
            highlights += `
                <div class="highlight-class" id="Open-Modal-Element" data-id="${productData.id}" style="background-image: url('${productData.image}');">
                </div>`;
        });

        highlights += `</div>`;
        document.body.innerHTML += highlights;
    } else {
        console.log('No products found in local storage.')
    }
}

async function createArticles() {
    const productsLoad = JSON.parse(localStorage.getItem('products'));

    if (productsLoad) {
        let articles = `<div class="articlestitle-class"><h3>TITULO ARTIGOS</h3></div>`;
        let articleBlock = `<div class="articlesdiv-class">`;

        productsLoad.forEach((productData, index) => {
            articleBlock += `
                <div class="article-class" id="Open-Modal-Element" data-id="${productData.id}" style="background-image: url('${productData.image}');">
                </div>`;
            
            // Quando o index fôr multplo de 4, passa para o próximo bloco de até 4 artigos
            // Nota: temos de fazer index + 1 porque aqui começa no 0
            if ((index + 1) % 4 === 0) {
                articleBlock += `</div>`;
                articles += articleBlock;
                articleBlock = `<div class="articlesdiv-class">`;
            }
        });

        // Caso o paço anterior não termine com multiplo de 4 temos de o fechar
        if (articleBlock !== `<div class="articlesdiv-class">`) {
            articleBlock += `</div>`;
            articles += articleBlock;
        }

        document.body.innerHTML += articles;
    } else {
        console.log('No products found in local storage.')
    }
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

async function createModal() {
    const modal = `
    <div id="Modal" class="modal">
        <div id="Modal-Content" class="modal-content">
            <span id="Close" class="close">&times;</span>
            <h2>Modal Title</h2>
            <p>This is the content of the modal.</p>
            <button id="Modal-Add-Cart">Add to Cart</button>
        </div>
    </div>`;
    document.body.innerHTML += modal;
}

//!!! ATENÇÂO REMOVER CÓDIGO COMENTADO ANTES DE ENTREGA MANTENHO PARA FACILITAR DEBUG CASO NECESSÀRIO !!!
// console.log('Load init');
window.onload = async function() {
    // console.log('Product loading');
    await loadProductsMain();
    // console.log('Modal loading');
    await createModal();
    // console.log('Navbar loading');
    await createNavbar();
    // console.log('SidePanel loading');
    await createSidePanel();
    // console.log('Highlights loading');
    await createHighlights();
    // console.log('articles loading');
    await createArticles();
    // console.log('Modal cont init');
    await initializeModalControl();
    // console.log('SidePanel cont init');
    await initializeSidePanelControl();
    // console.log('Load complete');
};