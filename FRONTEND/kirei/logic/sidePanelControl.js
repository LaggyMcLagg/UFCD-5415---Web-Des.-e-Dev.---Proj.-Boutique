/**
* SIDE PANEL CONTROL
*
* Esta função serve como um controlador geral para o side panel. Abre e fecha o side panel através de event listeners.
* È reactiva ao tamanho do side panel caso este mude com o user a fazer resize à janela.
*
****************************************************************
* ATENÇÃO: 
* - utilizar os IDs definidos e CLASSES CSS para correcta utilização deste controlador
* - carregar este .js depois de criados/gerados todos os elementos HTML
****************************************************************
*
* @var sideBarWidth: Irá conter o valor de largura do side panel.
*
* @var sidePanel: aponta para o elemento html do side panel
*
****************************************************************
* ATENÇÃO NO HTML usar id="Side-Panel" na div que encapsular o side panel
****************************************************************
*
* @var isOpen: boolean para saber se o elemento html panel está aberto, atravez da prop css "left"
*
* @var clickedElement: recebe o target element do click, é depois utilizado para percorrer as heranças a nascente
* até encontrar um elemento com ID. É utilizado no ciclo while para verificar se é um elemento que procuramos.
*
* @var isInsideSidebar: boolean para verificar se é a sidebar
*
* @var isHamburger: boolean para verificar se é o icone hamburger
*
****************************************************************
* ATENÇÃO NO HTML usar id="Hamburger-Button" no elemento hamburguer button
****************************************************************
*
* @function updateSideBarWidth: define o valor de width do sidepanel com que o controlador está a trabalhar
* é estabelecido com o carregar da página e actualizado sempre que o user fizer resize. Isto a antever
* responsividade do layout
*
* @function toggleSidePanel: Verifca se o side pannel está aberto atravéz da prop css "left" e faz toggle em concordância
*
* @class "side-panel": IMPLEMENTAR esta classe css com o elemento div que contem o side panel.
* propriedades css iportantes:
*   - "left" tem de ser definido com o valor negativo da width (para as várias media queries)
*   - "transition" permite o slide in, mudar a gosto.
*   - restantes é com o design
  // .side-panel {
  //   position: fixed;
  //   left: -250px;
  //   width: 250px;
  //   height: 100%;
  //   background-color: #333;
  //   color: #fff;
  //   transition: 0.3s;
  // }
*
* @return: N/A
*/
// UTILIZAR DO LADO DO HTML A QUANDO DA SUA CRIAÇÂO:
// <script type="module">
// import { initializeSidePanelControl } from './sidePanelControl.js';
// initializeSidePanelControl();
// </script>

//DESCONMENTAR PARA IMPLEMENTAR (modulo ES6)
export function initializeSidePanelControl() {
let sideBarWidth = '';

const sidePanel = document.getElementById('Side-Panel');

function updateSideBarWidth() {
  sideBarWidth = `-${sidePanel.offsetWidth}px`;
}

document.addEventListener('DOMContentLoaded', () => {
  updateSideBarWidth();
});

window.addEventListener('resize', updateSideBarWidth);


function toggleSidePanel() {

  const isOpen = sidePanel.style.left === '0px';

  if (isOpen) {
    sidePanel.style.left = sideBarWidth;
  } else {
    sidePanel.style.left = '0px';
  }
}

document.addEventListener('click', (event) => {

    let clickedElement = event.target;
    let isInsideSidebar = false;
    let isHamburger = false;
  
    // Tem de ser assim para ele correr as heranças dos elementos 
    // até encontrar os elementos que estamos à procura se estiver-mos no scope
    // e se não encontrar os elentos, chega ao DOM e o clickedElement 
    // fica a NULL e pára pq não há mais parents
    while (clickedElement && !isInsideSidebar && !isHamburger) {
      isInsideSidebar = clickedElement.id === 'Side-Panel';
      isHamburger = clickedElement.id === 'Hamburger-Button';
      clickedElement = clickedElement.parentNode;
    }
  
    const isOpen = sidePanel.style.left === '0px';
  
    if (isHamburger && !isInsideSidebar) {
      toggleSidePanel();
    } else if (!isInsideSidebar && isOpen) {
      toggleSidePanel();
    }

});
// DESCONMENTAR PARA IMPLEMENTAR (modulo ES6)
}