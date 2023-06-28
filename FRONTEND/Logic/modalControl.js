/**
* MODAL CONTROL
*
* Esta função serve como um controlador geral para modais. Abre e fecha o modal através de event listeners.
* ATENÇÃO: 
* - utilizar os IDs definidos e CLASSES CSS para correcta utilização deste controlador
* - carregar este .js depois de criados/gerados todos os elementos HTML
*
* @var modal: aponta para o elemento html que encapsula o conteudo do modal
*ATENÇÃO NO HTML usar id="Modal" na div que encapsular o conteudo do modal
*
* @var openModalElement: aponta para o elemento html que dá a ordem para abrir o modal
*ATENÇÃO NO HTML usar id="Open-Modal-Element" na div que encapsular o elemento que abre
*
* @var closeElement: aponta para o elemento html que dá a ordem de fecho do modal
*
* @function openModal: torna visivel o modal esta função é activada por um click event listener
*
* @function closeModal: torna invisivel o modal esta função é activada por um click event listener
*
* @class "close": Esta classe de css deverá ser colocada no elemento que se utilizar como CRUZ para encerrar.
*Sendo utilizada dentro desta função para apontar para esse elemento e adicionar a funcionalidade para fechar o modal.
*
* @class "modal": IMPLEMENTAR esta classe css com o elemento div que contem o modal.
// .modal {
//     display: none;
//     position: fixed;
//     z-index: 1;
//     left: 0;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     overflow: auto;
//     background-color: rgba(0, 0, 0, 0.5);
//   }
*
* @return: N/A
*/

const modal = document.getElementById("Modal");

const openModalElement = document.getElementById("Open-Modal-Element");

const closeElement = modal.querySelector(".close");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

openModalElement.addEventListener("click", openModal);
closeElement.addEventListener("click", closeModal);
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});