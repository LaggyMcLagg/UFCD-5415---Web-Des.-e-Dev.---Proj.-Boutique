import {initializeHamburgerMenu} from '../../logic/initHamburgerMenu.js'
import { createCardUser } from '../../logic/randomContacts.js'
import { searchProducts } from '../../logic/searchFunction.js';


async function createNavbar() {
    const navbar = `
        <div class="item navbar" id="Navbar">
            <nav>
                <div class="navbar">
                    <div class="hamburger">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                    <ul class="horizontal-nav">
                        <li><a href="../../index.html">
                        <svg id="Logo" class="logo-fill logo" width="155" height="53" viewBox="0 0 155 53"
                        fill="none" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path d="M124 16H155V47H124V16Z" fill="url(#pattern0)" />
                        <path d="M60 16H112V45H60V16Z" fill="#FFD52E" />
                        <path d="M121 0H155V13H121V0Z" fill="#FFD52E" />
                        <mask id="path-4-outside-1_0_1" maskUnits="userSpaceOnUse" x="0.919998" y="14.776"
                            width="135" height="38" fill="black">
                            <rect fill="white" x="0.919998" y="14.776" width="135" height="38" />
                            <path
                                d="M1.92 51.144V49.944L2.88 49.848C4 49.72 4.848 49.56 5.424 49.368C6.032 49.144 6.448 48.696 6.672 48.024C6.896 47.32 7.008 46.184 7.008 44.616V23.304C7.008 21.704 6.896 20.568 6.672 19.896C6.448 19.224 6.032 18.792 5.424 18.6C4.848 18.376 4 18.2 2.88 18.072L1.92 17.976V16.776L9.024 16.92L15.408 16.776V18.024L14.448 18.12C13.488 18.216 12.752 18.392 12.24 18.648C11.728 18.904 11.376 19.384 11.184 20.088C10.992 20.792 10.896 21.864 10.896 23.304V36.168L21.936 23.256C22.608 22.456 23.088 21.768 23.376 21.192C23.696 20.616 23.856 20.12 23.856 19.704C23.856 18.84 23.12 18.328 21.648 18.168L20.112 18.024V16.776L26.256 16.92L32.064 16.776V17.976L30.432 18.168C29.472 18.296 28.56 18.68 27.696 19.32C26.864 19.96 25.984 20.824 25.056 21.912L17.568 30.744L26.784 42.792C27.872 44.2 28.848 45.416 29.712 46.44C30.608 47.464 31.504 48.264 32.4 48.84C33.328 49.384 34.368 49.72 35.52 49.848L36.528 49.944V51.144L29.232 51L22.128 51.144V49.944L22.848 49.896C24.384 49.8 25.152 49.336 25.152 48.504C25.152 47.864 24.72 46.984 23.856 45.864L14.736 34.104L10.896 38.616V44.616C10.896 46.184 10.992 47.32 11.184 48.024C11.408 48.696 11.792 49.144 12.336 49.368C12.88 49.56 13.664 49.72 14.688 49.848L15.552 49.944V51.144L9.072 51H9.024L1.92 51.144Z" />
                            <path
                                d="M37.4981 51.144V49.944L38.4581 49.848C39.5781 49.72 40.4261 49.56 41.0021 49.368C41.6101 49.144 42.0261 48.696 42.2501 48.024C42.4741 47.32 42.5861 46.184 42.5861 44.616V23.304C42.5861 21.704 42.4741 20.568 42.2501 19.896C42.0261 19.224 41.6101 18.792 41.0021 18.6C40.4261 18.376 39.5781 18.2 38.4581 18.072L37.4981 17.976V16.776L44.6021 16.92H44.6501L51.7541 16.776V17.976L50.7941 18.072C49.7061 18.2 48.8581 18.376 48.2501 18.6C47.6421 18.792 47.2261 19.224 47.0021 19.896C46.7781 20.568 46.6661 21.704 46.6661 23.304V44.616C46.6661 46.184 46.7781 47.32 47.0021 48.024C47.2261 48.696 47.6421 49.144 48.2501 49.368C48.8581 49.56 49.7061 49.72 50.7941 49.848L51.7541 49.944V51.144L44.6501 51H44.6021L37.4981 51.144Z" />
                            <path
                                d="M82.8079 51.528C81.0479 51.528 79.7359 50.936 78.8719 49.752C78.0399 48.536 77.4959 47.048 77.2399 45.288C77.0799 44.008 76.8239 42.728 76.4719 41.448C76.1519 40.168 75.6239 39 74.8879 37.944C74.1839 36.856 73.1759 35.992 71.8639 35.352C70.5839 34.712 68.9039 34.392 66.8239 34.392H64.7599V44.616C64.7599 46.184 64.8719 47.32 65.0959 48.024C65.3199 48.696 65.7359 49.144 66.3439 49.368C66.9519 49.56 67.7999 49.72 68.8879 49.848L69.8479 49.944V51.144L62.7439 51H62.6959L55.5919 51.144V49.944L56.5519 49.848C57.6719 49.72 58.5199 49.56 59.0959 49.368C59.7039 49.144 60.1199 48.696 60.3439 48.024C60.5679 47.32 60.6799 46.184 60.6799 44.616V23.304C60.6799 21.704 60.5679 20.568 60.3439 19.896C60.1199 19.224 59.7039 18.792 59.0959 18.6C58.5199 18.376 57.6719 18.2 56.5519 18.072L55.5919 17.976V16.776L62.6959 16.92H69.4159C71.5919 16.92 73.6079 17.176 75.4639 17.688C77.3199 18.168 78.8079 19.016 79.9279 20.232C81.0799 21.448 81.6559 23.144 81.6559 25.32C81.6559 27.24 81.2239 28.808 80.3599 30.024C79.5279 31.208 78.4079 32.12 76.9999 32.76C75.6239 33.368 74.1199 33.8 72.4879 34.056C74.8559 34.216 76.7759 35.032 78.2479 36.504C79.7519 37.944 80.7119 40.072 81.1279 42.888C81.4159 44.68 81.7679 46.088 82.1839 47.112C82.6319 48.104 83.1119 48.808 83.6239 49.224C84.1679 49.608 84.7119 49.8 85.2559 49.8C85.6079 49.8 85.9439 49.736 86.2639 49.608C86.6159 49.48 86.9199 49.352 87.1759 49.224L87.5119 50.424C86.9999 50.68 86.3119 50.92 85.4479 51.144C84.5839 51.4 83.7039 51.528 82.8079 51.528ZM69.5119 18.168H64.7599V33.096H68.7919C71.8639 33.096 74.0079 32.472 75.2239 31.224C76.4719 29.976 77.0959 28.104 77.0959 25.608C77.0959 23.24 76.5359 21.416 75.4159 20.136C74.2959 18.824 72.3279 18.168 69.5119 18.168Z" />
                            <path
                                d="M88.9669 51.144V49.944L89.9269 49.848C91.0469 49.72 91.8949 49.56 92.4709 49.368C93.0789 49.144 93.4949 48.696 93.7189 48.024C93.9429 47.32 94.0549 46.184 94.0549 44.616V23.304C94.0549 21.704 93.9429 20.568 93.7189 19.896C93.4949 19.224 93.0789 18.792 92.4709 18.6C91.8949 18.376 91.0469 18.2 89.9269 18.072L88.9669 17.976V16.776L96.0709 16.92H114.695L114.791 20.376L115.175 24.792H114.023C113.799 23.352 113.495 22.2 113.111 21.336C112.759 20.472 112.247 19.832 111.575 19.416C110.903 18.968 109.991 18.68 108.839 18.552C107.719 18.392 106.263 18.312 104.471 18.312H98.1349V32.376H103.511C104.151 32.376 104.711 32.232 105.191 31.944C105.671 31.624 106.055 31.048 106.343 30.216C106.663 29.384 106.855 28.184 106.919 26.616H108.119L107.975 33.048L108.119 40.152H106.919C106.919 37.816 106.631 36.168 106.055 35.208C105.479 34.216 104.631 33.72 103.511 33.72H98.1349V45.864C98.1349 47.4 98.4709 48.424 99.1429 48.936C99.8149 49.416 101.063 49.656 102.887 49.656H107.351C109.207 49.656 110.647 49.448 111.671 49.032C112.727 48.616 113.511 47.784 114.023 46.536C114.535 45.256 114.887 43.384 115.079 40.92H116.279L115.943 46.68L115.799 51H96.0709L88.9669 51.144Z" />
                            <path
                                d="M120.139 51.144V49.944L121.099 49.848C122.219 49.72 123.067 49.56 123.643 49.368C124.251 49.144 124.667 48.696 124.891 48.024C125.115 47.32 125.227 46.184 125.227 44.616V23.304C125.227 21.704 125.115 20.568 124.891 19.896C124.667 19.224 124.251 18.792 123.643 18.6C123.067 18.376 122.219 18.2 121.099 18.072L120.139 17.976V16.776L127.243 16.92H127.291L134.395 16.776V17.976L133.435 18.072C132.347 18.2 131.499 18.376 130.891 18.6C130.283 18.792 129.867 19.224 129.643 19.896C129.419 20.568 129.307 21.704 129.307 23.304V44.616C129.307 46.184 129.419 47.32 129.643 48.024C129.867 48.696 130.283 49.144 130.891 49.368C131.499 49.56 132.347 49.72 133.435 49.848L134.395 49.944V51.144L127.291 51H127.243L120.139 51.144Z" />
                        </mask>
                        <path
                            d="M1.92 51.144V49.944L2.88 49.848C4 49.72 4.848 49.56 5.424 49.368C6.032 49.144 6.448 48.696 6.672 48.024C6.896 47.32 7.008 46.184 7.008 44.616V23.304C7.008 21.704 6.896 20.568 6.672 19.896C6.448 19.224 6.032 18.792 5.424 18.6C4.848 18.376 4 18.2 2.88 18.072L1.92 17.976V16.776L9.024 16.92L15.408 16.776V18.024L14.448 18.12C13.488 18.216 12.752 18.392 12.24 18.648C11.728 18.904 11.376 19.384 11.184 20.088C10.992 20.792 10.896 21.864 10.896 23.304V36.168L21.936 23.256C22.608 22.456 23.088 21.768 23.376 21.192C23.696 20.616 23.856 20.12 23.856 19.704C23.856 18.84 23.12 18.328 21.648 18.168L20.112 18.024V16.776L26.256 16.92L32.064 16.776V17.976L30.432 18.168C29.472 18.296 28.56 18.68 27.696 19.32C26.864 19.96 25.984 20.824 25.056 21.912L17.568 30.744L26.784 42.792C27.872 44.2 28.848 45.416 29.712 46.44C30.608 47.464 31.504 48.264 32.4 48.84C33.328 49.384 34.368 49.72 35.52 49.848L36.528 49.944V51.144L29.232 51L22.128 51.144V49.944L22.848 49.896C24.384 49.8 25.152 49.336 25.152 48.504C25.152 47.864 24.72 46.984 23.856 45.864L14.736 34.104L10.896 38.616V44.616C10.896 46.184 10.992 47.32 11.184 48.024C11.408 48.696 11.792 49.144 12.336 49.368C12.88 49.56 13.664 49.72 14.688 49.848L15.552 49.944V51.144L9.072 51H9.024L1.92 51.144Z"
                            stroke="black" stroke-width="1" />
                        <path
                            d="M37.4981 51.144V49.944L38.4581 49.848C39.5781 49.72 40.4261 49.56 41.0021 49.368C41.6101 49.144 42.0261 48.696 42.2501 48.024C42.4741 47.32 42.5861 46.184 42.5861 44.616V23.304C42.5861 21.704 42.4741 20.568 42.2501 19.896C42.0261 19.224 41.6101 18.792 41.0021 18.6C40.4261 18.376 39.5781 18.2 38.4581 18.072L37.4981 17.976V16.776L44.6021 16.92H44.6501L51.7541 16.776V17.976L50.7941 18.072C49.7061 18.2 48.8581 18.376 48.2501 18.6C47.6421 18.792 47.2261 19.224 47.0021 19.896C46.7781 20.568 46.6661 21.704 46.6661 23.304V44.616C46.6661 46.184 46.7781 47.32 47.0021 48.024C47.2261 48.696 47.6421 49.144 48.2501 49.368C48.8581 49.56 49.7061 49.72 50.7941 49.848L51.7541 49.944V51.144L44.6501 51H44.6021L37.4981 51.144Z"
                            stroke="black" stroke-width="1" />
                        <path
                            d="M82.8079 51.528C81.0479 51.528 79.7359 50.936 78.8719 49.752C78.0399 48.536 77.4959 47.048 77.2399 45.288C77.0799 44.008 76.8239 42.728 76.4719 41.448C76.1519 40.168 75.6239 39 74.8879 37.944C74.1839 36.856 73.1759 35.992 71.8639 35.352C70.5839 34.712 68.9039 34.392 66.8239 34.392H64.7599V44.616C64.7599 46.184 64.8719 47.32 65.0959 48.024C65.3199 48.696 65.7359 49.144 66.3439 49.368C66.9519 49.56 67.7999 49.72 68.8879 49.848L69.8479 49.944V51.144L62.7439 51H62.6959L55.5919 51.144V49.944L56.5519 49.848C57.6719 49.72 58.5199 49.56 59.0959 49.368C59.7039 49.144 60.1199 48.696 60.3439 48.024C60.5679 47.32 60.6799 46.184 60.6799 44.616V23.304C60.6799 21.704 60.5679 20.568 60.3439 19.896C60.1199 19.224 59.7039 18.792 59.0959 18.6C58.5199 18.376 57.6719 18.2 56.5519 18.072L55.5919 17.976V16.776L62.6959 16.92H69.4159C71.5919 16.92 73.6079 17.176 75.4639 17.688C77.3199 18.168 78.8079 19.016 79.9279 20.232C81.0799 21.448 81.6559 23.144 81.6559 25.32C81.6559 27.24 81.2239 28.808 80.3599 30.024C79.5279 31.208 78.4079 32.12 76.9999 32.76C75.6239 33.368 74.1199 33.8 72.4879 34.056C74.8559 34.216 76.7759 35.032 78.2479 36.504C79.7519 37.944 80.7119 40.072 81.1279 42.888C81.4159 44.68 81.7679 46.088 82.1839 47.112C82.6319 48.104 83.1119 48.808 83.6239 49.224C84.1679 49.608 84.7119 49.8 85.2559 49.8C85.6079 49.8 85.9439 49.736 86.2639 49.608C86.6159 49.48 86.9199 49.352 87.1759 49.224L87.5119 50.424C86.9999 50.68 86.3119 50.92 85.4479 51.144C84.5839 51.4 83.7039 51.528 82.8079 51.528ZM69.5119 18.168H64.7599V33.096H68.7919C71.8639 33.096 74.0079 32.472 75.2239 31.224C76.4719 29.976 77.0959 28.104 77.0959 25.608C77.0959 23.24 76.5359 21.416 75.4159 20.136C74.2959 18.824 72.3279 18.168 69.5119 18.168Z"
                            stroke="black" stroke-width="1" />
                        <path
                            d="M88.9669 51.144V49.944L89.9269 49.848C91.0469 49.72 91.8949 49.56 92.4709 49.368C93.0789 49.144 93.4949 48.696 93.7189 48.024C93.9429 47.32 94.0549 46.184 94.0549 44.616V23.304C94.0549 21.704 93.9429 20.568 93.7189 19.896C93.4949 19.224 93.0789 18.792 92.4709 18.6C91.8949 18.376 91.0469 18.2 89.9269 18.072L88.9669 17.976V16.776L96.0709 16.92H114.695L114.791 20.376L115.175 24.792H114.023C113.799 23.352 113.495 22.2 113.111 21.336C112.759 20.472 112.247 19.832 111.575 19.416C110.903 18.968 109.991 18.68 108.839 18.552C107.719 18.392 106.263 18.312 104.471 18.312H98.1349V32.376H103.511C104.151 32.376 104.711 32.232 105.191 31.944C105.671 31.624 106.055 31.048 106.343 30.216C106.663 29.384 106.855 28.184 106.919 26.616H108.119L107.975 33.048L108.119 40.152H106.919C106.919 37.816 106.631 36.168 106.055 35.208C105.479 34.216 104.631 33.72 103.511 33.72H98.1349V45.864C98.1349 47.4 98.4709 48.424 99.1429 48.936C99.8149 49.416 101.063 49.656 102.887 49.656H107.351C109.207 49.656 110.647 49.448 111.671 49.032C112.727 48.616 113.511 47.784 114.023 46.536C114.535 45.256 114.887 43.384 115.079 40.92H116.279L115.943 46.68L115.799 51H96.0709L88.9669 51.144Z"
                            stroke="black" stroke-width="1" />
                        <path
                            d="M120.139 51.144V49.944L121.099 49.848C122.219 49.72 123.067 49.56 123.643 49.368C124.251 49.144 124.667 48.696 124.891 48.024C125.115 47.32 125.227 46.184 125.227 44.616V23.304C125.227 21.704 125.115 20.568 124.891 19.896C124.667 19.224 124.251 18.792 123.643 18.6C123.067 18.376 122.219 18.2 121.099 18.072L120.139 17.976V16.776L127.243 16.92H127.291L134.395 16.776V17.976L133.435 18.072C132.347 18.2 131.499 18.376 130.891 18.6C130.283 18.792 129.867 19.224 129.643 19.896C129.419 20.568 129.307 21.704 129.307 23.304V44.616C129.307 46.184 129.419 47.32 129.643 48.024C129.867 48.696 130.283 49.144 130.891 49.368C131.499 49.56 132.347 49.72 133.435 49.848L134.395 49.944V51.144L127.291 51H127.243L120.139 51.144Z"
                            stroke="black" stroke-width="1" />
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                height="1">
                                <use xlink:href="#image0_0_1"
                                    transform="translate(-0.0846154) scale(0.00769231)" />
                            </pattern>
                            <image id="image0_0_1" width="152" height="130"
                                xlink:href="data:image/png;base64,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" />
                        </defs>
                    </svg>
                        </a></li>
                        <li>
                        <form id="Search-Form">
                            <input type="text" id="Searchbar" class="searchbar" placeholder="Search">
                            <input type="submit" value="Submit">
                        </form>
                        </li>
                        <li><a class="cart" href="checkout.html">Cart</a></li>
                    </ul>
                    <ul class="menu">
                        <li><a href="gallery.html">Galeria</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                        <li><a href="#">Item 3</a></li>
                        <li><a href="#">Item 4</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </nav>
    </div>
    `;

    document.body.innerHTML += navbar;
}

async function attachEventListenersSearch() {
    document.querySelector("#Search-Form").addEventListener('submit', searchProducts);
}

async function createBanner() {
    const banner = `
        <div class="item banner">
            Our slogan is so good that you want to buy our stuff.
        </div>
    `;

    document.body.innerHTML += banner;
}

async function createAboutUs() {
    const aboutUs = `
        <div class="item about-us">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem corrupti nesciunt unde, ut eius quia
                fugiat labore consequuntur harum sequi illum dolor, molestiae maiores excepturi rem! Laudantium
                provident minima tenetur ipsum quas nobis eius nostrum debitis veniam rerum! Odit non vero dolorum
                reiciendis officia dolore dolorem cum illum quos architecto quas maiores veritatis aut, ratione eos
                aperiam, unde voluptatem eum.</p>

            <br>
            <h3>Follow us on social media:</h3>
            <div class="about-container">

            </div>
    
        </div>
    `;

    document.body.innerHTML += aboutUs;
}

createCardUser();

async function createContact() {
    const contact = `
        <div class="item contact">
            <div class="contact-body">
                <section>
                    <div class="contact-container">
                        <div class="form-container">
                            <h3>Contact Us</h3>
                            <form action="" method="GET" class="contact-form">
                                <label>Name</label>
                                <input class="" type="text" id="Name" placeholder="Your Name">
                                <div class="error-hint hidden">Insert a valid name.</div>
                                <label>Email</label>
                                <input class="" inputmode="email" name="" id="Email" placeholder="name@email.com">
                                <div class="error-hint hidden">Insert a valid email.</div>
                                <label>Message</label>
                                <textarea class="" name="" id="TextBox" cols="30" rows="10" placeholder="Write your message here..."
                                ></textarea>
                                <div class="error-hint hidden">Please type a sentence.</div>
                                <input type="submit" value="Send" class="send-button">
                            </form>
                        </div>
                        <div class="map">
                            <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.0634987829153!2d-8.688463584579383!3d41.220386679279855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2468ec3655d101%3A0x12cab54b20119109!2sATEC%20-%20Academia%20de%20Forma%C3%A7%C3%A3o%20(Matosinhos)!5e0!3m2!1sen!2spt!4v1688343102897!5m2!1sen!2spt"
                            style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    `;

    document.body.innerHTML += contact;
}

async function attachEventListenerForms() {
    const nome = document.getElementById('Name');
    const email = document.getElementById('Email');
    const textBox = document.getElementById('TextBox');
    const form = document.querySelector('.contact-form');

    nome.addEventListener('input', () => {
        nome.classList.remove('invalid');
        nome.nextElementSibling.classList.add('hidden');
    });
    
    email.addEventListener('input', () => {
        email.classList.remove('invalid');
        email.nextElementSibling.classList.add('hidden');
    });
    
    textBox.addEventListener('input', () => {
        textBox.classList.remove('invalid');
        textBox.nextElementSibling.classList.add('hidden');
    });

    form.addEventListener('submit', (e) => {

        if(!nome.value.match(/^[a-zA-ZÀ-ÿ]+(\s{1}[a-zA-ZÀ-ÿ]+)*$/)) {
            e.preventDefault();
            nome.classList.add('invalid');
            nome.nextElementSibling.classList.remove('hidden');
        }

        if (!email.value.match(/^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/)) {
            e.preventDefault();
            email.classList.add('invalid');
            email.nextElementSibling.classList.remove('hidden');
        }

        if (textBox.value == '' || textBox.value == null) {
            e.preventDefault();
            textBox.classList.add('invalid');
            textBox.nextElementSibling.classList.remove('hidden');
        }     
    });
}

window.onload = async function (event) {
    console.log('Navbar loading');
    await createNavbar();
    console.log('Banner loading');
    await createBanner();
    console.log('about us loading');
    await createAboutUs();
    console.log('contact loading');
    await createContact();
    console.log('attach eventlisteners');
    await attachEventListenerForms();
    console.log('Hamburger init');
    await initializeHamburgerMenu();
    console.log('Attach EventListner Search');
    await attachEventListenersSearch();
};

