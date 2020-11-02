import axios from 'axios';

class CardService {
  public API_URL: string;

  constructor() {
    this.API_URL = 'http://localhost:8080/api';
  }

  public async fetchCards() {
    const response = await axios.get(`${this.API_URL}/cards`);

    if (response.data) {
      return response.data;
    } else {
      return {};
    }
  }
}

export default new CardService();
