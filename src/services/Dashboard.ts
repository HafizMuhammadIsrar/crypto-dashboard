// services/Dashboard.ts
import axios from 'axios';

export const authService = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
});

const DASHBOARD = {
  getCoins: async () => {
    const response = await authService.get('/coins/markets', {
      params: { vs_currency: 'usd' },
    });
    return response.data;
  },

  getCoinDetails: async (id: string) => {
    const response = await authService.get(`/coins/${id}`);
    return response.data;
  },

  getCoinChart: async (id: string) => {
    const response = await authService.get(`/coins/${id}/market_chart`, {
      params: { vs_currency: 'usd', days: 7 },
    });
    return response.data;
  },
};

export default DASHBOARD;
