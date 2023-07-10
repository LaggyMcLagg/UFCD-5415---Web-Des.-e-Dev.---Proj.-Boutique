 /**
* MODAL CONTROL
*
* Esta função serve como um controlador geral para modais. Abre e fecha o modal através de event listeners.
* Apenas precisa de um modal de destino trocancando a foto que o utilizador quer vizualizar
* ATENÇÃO: 
* - utilizar os IDs definidos e CLASSES CSS para correcta utilização deste controlador
* - carregar este .js depois de criados/gerados todos os elementos HTML
*
* @var openModalElements: Vai receber uma lista de todos os elementos que foram criados com o id Open-Modal-Element
* para depois ser utilizada para atribuir a cada um deles o seu próprio event listner para abrir um modal com a sua foto
****************************************************************
*ATENÇÃO NO HTML usar id="Open-Modal-Element" na div que encapsular o elemento que abre o modal
****************************************************************
*
* @var modal: aponta para o elemento html que encapsula o modal
****************************************************************
*ATENÇÃO NO HTML usar id="Modal" na div que encapsular o modal
****************************************************************
*
* @var closeElement: aponta para o elemento html que dá a ordem de fecho do modal a cruz no canto superior direito
****************************************************************
*ATENÇÃO NO HTML usar id="Close" no elemento que dá a ordem de fecho do modal
****************************************************************
*
* @var modalContent: aponta para o elemento html que encapsula o conteudo do modal
****************************************************************
*ATENÇÃO NO HTML usar id="Modal-Content" na div que encapsular o conteudo do modal
****************************************************************
*
*
* @function openModal: torna visivel o modal esta função é activada por um click event listener
* indo buscar a imagem em que o utilizador carreguou atravez da prop css bg-image atribuindo-a no modal
*
* @function closeModal: torna invisivel o modal esta função é activada por um click event listener
*
*
* @class "modal": IMPLEMENTAR esta classe css com o elemento div que contem o modal.
* propriedades css iportantes:
*   - "display" tem de ser definido com o valor none por defeito
*   - restantes é com o design
// .modal {
//     display: none;
//   }
*
* @return: N/A
*/
// UTILIZAR DO LADO DO HTML A QUANDO DA SUA CRIAÇÂO:
// <script type="module">
// import { initializeModalControl } from './modalControl.js';
// initializeModalControl();
// </script>

import { addToCart } from './addToCartFunctions.js';

//DESCONMENTAR PARA IMPLEMENTAR (modulo ES6)
export async function initializeModalControl() {
  const openModalElements = document.querySelectorAll("#Open-Modal-Element");

  const modal = document.getElementById("Modal");
  
  //aqui teve mesmo de ser com o qureyselector o getElementById nao funciona
  const closeElement = modal.querySelector("#Close");

  const modalContent = modal.querySelector("#Modal-Content");

  const modalAddCart = modal.querySelector("#Modal-Add-Cart");

  function openModal(event) {
    modal.style.display = "block";

    const card = event.currentTarget;
    const backgroundImage = card.style.backgroundImage;
    const dataId = card.getAttribute("data-id");
 
    modalContent.style.backgroundImage = backgroundImage;
    modalAddCart.setAttribute("data-id", dataId);

    modalAddCart.addEventListener('click', function() {
      const productId = this.getAttribute('data-id');
      addToCart(productId);
  });
 }

function closeModal() {
  modal.style.display = "none";
}

openModalElements.forEach((element) => {
  element. addEventListener("click", openModal);
})

closeElement.addEventListener("click", closeModal);

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// DESCONMENTAR PARA IMPLEMENTAR (modulo ES6)
}