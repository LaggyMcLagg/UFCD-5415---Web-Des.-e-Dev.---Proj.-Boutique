import getRandomUser from '../services/randomAPI.js';

async function createCardUser() {
  const usersList = await getRandomUser();

  let contContainer = document.querySelector('.about-container');
  
  usersList.forEach(user => {
    let cardUser = ` 
    <div class="card">
      <div class="content">
        <div class="imgBx">
            <img src="${user.picture}" alt="">
        </div>
        <div class="contentBx">
            <h4>${user.name}</h4>
            <h5>Support</h5>
            <h5>${user.email}</h5>
        </div>
        <div class="sci">
            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
    `;
    contContainer.innerHTML += cardUser
  });
}

createCardUser();

export default createCardUser;