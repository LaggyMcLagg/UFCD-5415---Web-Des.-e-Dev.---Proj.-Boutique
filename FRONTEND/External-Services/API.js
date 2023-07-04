// api.js
export const api = {
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
  