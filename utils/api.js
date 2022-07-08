import { get } from 'axios';

const api = {
  async getUser(userResponses) {
    try { let response = await get(`https://api.github.com/users/${userResponses.username}`);
        return response.data;

      } catch (error) {
        console.log(error);
      }
  }
};

export default api;