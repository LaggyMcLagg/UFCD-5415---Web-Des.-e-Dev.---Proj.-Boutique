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
* @var modalAddCart: aponta para o elemento html botão para adicionar ao carrinho
****************************************************************
*ATENÇÃO NO HTML usar id="Modal-Add-Cart" no botão para adicionar ao carrinho
****************************************************************
*
* @var ratingStars: aponta para o elemento span das estrelas para depois adicionar um event listener que de acordo com
* a estrea em que o user carregar irá buscar o valor data-set dessa estrela e guardalo em memória local com o data-id 
* do produto correspondente.
****************************************************************
*ATENÇÃO NO HTML usar class="star" nas span da estrela
****************************************************************
*
* @function openModal: torna visivel o modal esta função é activada por um click event listener
* indo buscar a imagem em que o utilizador carreguou atravez da prop css bg-image atribuindo-a ao modal
* atribui ao botão add to cart o id do artigo atravez do data-id
* em caso de click faz executa a função addToCart 
* e caso esteja fora de stock ao carregar no botão faz disable e display da info correta
*
* @function closeModal: torna invisivel o modal esta função é activada por um click event listener
*
* @function updateStarColors: recebe por parametro o valor de rating do artigo e preenche as estrelas conforme
*
* @class "modal": IMPLEMENTAR esta classe css com o elemento div que contem o modal.
* propriedades css iportantes:
*   - "display" tem de ser definido com o valor 'none' por defeito
*   - restantes é com o design
// .modal {
//     display: none;
//   }
*
* @classes sugestão implementação do modal consultar ficheiro ./userinterface/css/CssGallery.css lines'460 - 532'
*
* @return: N/A
*/

import { addToCart } from './addToCartFunctions.js';

export async function initializeModalControl() {
    const openModalElements = document.querySelectorAll("#Open-Modal-Element");
  
    const modal = document.getElementById("Modal");
  
    const closeElement = modal.querySelector("#Close");
  
    const modalContent = modal.querySelector("#Modal-Content");
  
    const modalAddCart = modal.querySelector("#Modal-Add-Cart");

    const ratingStars = modal.querySelectorAll(".star");
  
    function updateStarColors(rating) {
      ratingStars.forEach((star) => {
          if (star.dataset.star <= rating) {
              star.classList.remove('gray');
              star.classList.add('normal');
          } else {
              star.classList.remove('normal');
              star.classList.add('gray');
          }
      });
    }

    function verifyStockModal(productId) {
      const inStock = addToCart(productId);
      if (!inStock) {
        modalAddCart.setAttribute("disabled", "disabled");
        modalAddCart.textContent = "Out of stock";
      } else {
        modalAddCart.removeAttribute("disabled");
        modalAddCart.textContent = "Add to Cart";
      }
    }
    
    function openModal(event) {
      modal.style.display = "flex";
    
      const card = event.currentTarget;
      const backgroundImage = card.style.backgroundImage;
      const dataId = card.getAttribute("data-id");
    
      modalContent.style.backgroundImage = backgroundImage;
      modalAddCart.setAttribute("data-id", dataId);
    
      const productId = this.getAttribute('data-id');
      verifyStockModal(productId);
    
      modalAddCart.addEventListener('click', function() {
        verifyStockModal(productId);
      });
      
      const rating = localStorage.getItem(`productRating-${dataId}`) || 0;
      updateStarColors(rating);
    }
    
  
    function closeModal() {
      modal.style.display = "none";
    }
  
    openModalElements.forEach((element) => {
      element.addEventListener("click", openModal);
    })
  
    closeElement.addEventListener("click", closeModal);
  
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  
    ratingStars.forEach((star) => {
      star.addEventListener('click', function() {
          const rating = this.dataset.star;
          localStorage.setItem(`productRating-${modalAddCart.getAttribute("data-id")}`, rating);
          updateStarColors(rating);
      });
    });
}