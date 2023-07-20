/**
 * INICIALIZAR MENU HAMBURGUER--------------------------------------
 *
 * Esta função serve como um controlador geral para o side panel. Abre e fecha o side panel através de event listeners.
 *
 *  @async @returns {Promise} Uma Promise que é resolvida quando o listener de eventos é configurado para o menu hamburguer.
 *
 * @description Esta função realiza as seguintes ações:
 * - Procura os elementos DOM para o icon hamburguer e menu.
 * - Se ambos os elementos forem encontrados, configura um listener de eventos no icon hamburguer.
 *   Quando ouver um click no icon hamburguer, a classe 'open' é alternada no menu,
 *   o que deve mostrar ou ocultar o menu dependendo de seu estado atual.
 * - Se o user clicar fora do menu lateral fecha caso esteja aberto.
 *
 * ****Atenção*****
 * @class css importantes para funcionalidade reunidas no final do CssIndex.css 
 *
 */

export async function initializeHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    if (hamburger && menu) {
        hamburger.addEventListener('click', toggleMenu);
    }

    function toggleMenu(event) {
        menu.classList.toggle('open');
    }

    window.addEventListener('click', function(event) {
        if (menu.classList.contains('open') && !menu.contains(event.target) && !hamburger.contains(event.target)) {
            menu.classList.remove('open');
        }
    });

    window.addEventListener('scroll', function() {
        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
        }
    });
}