/**
 * A function that initializes a hamburger menu functionality on page load.
 *
 * @param {Event} event - The DOMContentLoaded event.
 */
document.addEventListener('DOMContentLoaded', function(event) {
  /**
   * Selects the hamburger element.
   *
   * @type {HTMLElement}
   */
  var hamburger = document.querySelector('.hamburger');

  /**
   * Selects the menu element.
   *
   * @type {HTMLElement}
   */
  var menu = document.querySelector('.menu');
  
  /**
   * Toggles the visibility of the menu element when the hamburger is clicked.
   *
   * @param {Event} event - The click event on the hamburger.
   */
  function toggleMenu(event) {
    menu.classList.toggle('open');
  }

  // Attaches the toggleMenu function as a click event listener to the hamburger element.
  hamburger.addEventListener('click', toggleMenu);
});