/**
* MÓDULO API DOC BLOC
* 
* Este módulo define um objecto 'api' com métodos para fazer requisições HTTP e a função 'makeRequests' 
* para interagir com a API.
* 
* API CONNECTION-------------------------------------------------
* @constant {Object} api: um objecto com métodos para fazer requisições GET e POST.
* @property {string} baseUrl: a URL base para todas as requisições.
* @method post: faz uma requisição POST para a URL especificada.
* @param {string} url: a URL para a qual a requisição é feita.
* @param {Object} data: os dados a serem enviados com a requisição.
* @returns {Promise} a resposta da API convertida em JSON.
* @method get: faz uma requisição GET para a URL especificada.
* @param {string} url: a URL para a qual a requisição é feita.
* @returns {Promise} a resposta da API convertida em JSON.
* --------------------------------------------------------------- 
* 
* MAKE REQUESTS--------------------------------------------------
* @function makeRequests: função assíncrona que faz requisições GET e POST à API.
* @param {string} endpoint: o endpoint da API para o qual a requisição está a ser feita.
* @param {string} method: o método da requisição (deve ser 'get' ou 'post').
* @param {Object} data: os dados a serem enviados com a requisição POST.
* @returns {Promise} a resposta da API.
* @throws {Error} se o método não for 'get' ou 'post'.
* --------------------------------------------------------------- 
* 
*/
const api = {
    baseUrl: 'http://127.0.0.1:3333',
  
    post: async (url, data) => {
      const response = await fetch(`${api.baseUrl}${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return await response.json();
    },
  
    get: async (url) => {
      const response = await fetch(`${api.baseUrl}${url}`);
      return await response.json();
    },
  };
  

  export async function makeRequests(endpoint, method, data = null) {
    let response;
    if (method.toLowerCase() === 'post') {
      response = await api.post(endpoint, data);
    } else if (method.toLowerCase() === 'get') {
      response = await api.get(endpoint);
    } else {
      throw new Error(`Unsupported method: ${method}`);
    }
    
    return response;
  }
