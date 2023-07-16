import User from '../models/randomClass.js';

async function getRandomUser(totalUsers = 3) {

  const response = await fetch(`https://randomuser.me/api/?results=${totalUsers}`);
  const data = await response.json();
  
  // console.log(data);

  const usersList = data.results.map(userRUAPI => {
    return new User(userRUAPI);   
  });

  return usersList
}
 
export default getRandomUser;