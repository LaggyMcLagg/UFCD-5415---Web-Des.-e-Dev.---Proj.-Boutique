import getRandomUser from '../services/randomAPI.js';

export async function createCardUser() {
  const usersList = await getRandomUser();

  let contContainer = document.querySelector('.about-container');

  let i = 1;

  usersList.forEach(user => {
    let userRole;

    if (i === 1) {
      userRole = 'Sales';

    } else if (i === 2) {
      userRole = 'Support';
    }

    const cardUser = ` 
      <div class="content">
        <div class="imgBx">
        <div class="border-circle">
            <img src="${user.picture}" alt="">
        </div>
        </div>
        <div class="contentBx">
            <h4>${user.name}</h4>
            <h5>${userRole}</h5>
            <h5>${user.email}</h5>
            <p class="team-about">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="sci">
            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
    `;

    i++;

    contContainer.innerHTML += cardUser;
  });
}