import {initializeHamburgerMenu} from '../../logic/initHamburgerMenu.js'
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
                        <li><a href="../../index.html">LOGO</a></li>
                        <li>
                        <form id="Search-Form">
                            <input type="text" id="Searchbar" class="searchbar" placeholder="Search">
                            <input type="submit" value="Submit">
                        </form>
                        </li>
                        <li><a href="checkout.html">Cart</a></li>
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

async function createContact() {
    const contact = `
        <div class="item contact">
            <div class="contact-body">
                <section>
                    <div class="contact-container">
                        <div class="form-container">
                            <h3>Contact Us</h3>
                            <form action="" class="contact-form">
                                <input type="text" placeholder="Your Name" required>
                                <input type="email" name="" id="" placeholder="name@email.com" required>
                                <textarea name="" id="" cols="30" rows="10" placeholder="Write your message here..."
                                    required></textarea>
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



window.onload = async function (event) {
    console.log('Navbar loading');
    await createNavbar();
    console.log('Banner loading');
    await createBanner();
    console.log('about us loading');
    await createAboutUs();
    console.log('contact loading');
    await createContact();
    console.log('Hamburger init');
    await initializeHamburgerMenu();
    console.log('Attach EventListner Search');
    await attachEventListenersSearch();
};

