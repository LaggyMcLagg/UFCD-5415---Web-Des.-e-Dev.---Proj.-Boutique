/**
 * APPLYBACKGROUNDHERO DOC BLOCK
 * 
 * Esta função aplica uma imagem de fundo aleatória ao corpo do documento.
 * Ela seleciona uma imagem de um array pré-definido de imagens e define-a como imagem de fundo.
 * Posteriormente, uma nova imagem aleatória é selecionada e aplicada a cada 7 segundos.
 * 
 * @function applyBackgroundHero
 * 
 * @const {Array} images: Array de caminhos para as imagens de fundo.
 * 
 * @function applyBackground: Esta função seleciona uma imagem aleatória do array de imagens,
 * define a imagem de fundo.
 * 
 * @fires setInterval: A função applyBackground é chamada a cada 7000 ms (7 segundos).
 */

export function applyBackgroundHero() 
{
    
    const images = [
        '../userinterface/photos/imagesHero/img1.jpg', 
        '../userinterface/photos/imagesHero/img2.jpg', 
        '../userinterface/photos/imagesHero/img3.jpg', 
        '../userinterface/photos/imagesHero/img4.jpg', 
        '../userinterface/photos/imagesHero/img5.jpg'
    ];

    function applyBackground() 
    {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        // console.log('Random Image:', randomImage);

        document.body.style.backgroundImage = `url(${randomImage})`;
        // console.log('Applied background image:', document.body.style.backgroundImage);
    }

    setInterval(applyBackground, 7000);
}