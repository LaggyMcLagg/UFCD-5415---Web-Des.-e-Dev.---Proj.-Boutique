import {initializeHamburgerMenu} from '../../logic/initHamburgerMenu.js'
import { createCardUser } from '../../logic/randomContacts.js'

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
                            <form>
                                <input type="text" class="searchbar" placeholder="Search">
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
    `;

    document.body.innerHTML += navbar;
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
};