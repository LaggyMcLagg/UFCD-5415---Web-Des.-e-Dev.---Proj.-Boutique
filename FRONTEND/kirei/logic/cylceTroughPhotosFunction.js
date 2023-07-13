//poe esta funcção dentro do teu script que está a gerar a página e adapta
export async function applyBackgroundHero() {
    
    // existe uma forma mais simples mas não podemos importar módulos tem de ser a unha
    const portraitImages = ['../userinterface/photos/portrait/img1.jpg', '../userinterface/photos/portrait/img2.jpg', '../userinterface/photos/portrait/img3.jpg', '../userinterface/photos/portrait/img4.jpg', '../userinterface/photos/portrait/img5.jpg'];
    const landscapeImages = ['../userinterface/photos/landscape/img1.jpg', '../userinterface/photos/landscape/img2.jpg', '../userinterface/photos/landscape/img3.jpg', '../userinterface/photos/landscape/img4.jpg', '../userinterface/photos/landscape/img5.jpg'];

    function applyBackground() {
        const isLandscape = window.innerWidth > window.innerHeight;
        const images = isLandscape ? landscapeImages : portraitImages;
        const randomImage = images[Math.floor(Math.random() * images.length)];
        console.log('Random Image:', randomImage);

        //Ainda tem bugs mas dps vemos a melhor forma
        //o principal é ir alterando e estar funcional
        document.body.style.backgroundImage = `url(${randomImage})`;
        console.log('Applied background image:', document.body.style.backgroundImage);
    }

    // Switch a cada 7 seconds
    setInterval(applyBackground, 7000);

    // Aplica no load
    window.addEventListener('load', applyBackground());

    // Aplica imagem no resize com um delay of 2 seconds
    window.addEventListener('resize', function() {
        setTimeout(applyBackground, 2000);
    });
}

//para executar a função com o primeiro load da página
console.log('Load init');
window.onload = async function() {
    console.log('Hero loading');
    await applyBackgroundHero();
}
