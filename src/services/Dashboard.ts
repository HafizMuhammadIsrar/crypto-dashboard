import axios from "axios";

export const authService = axios.create({ baseURL: "https://api.coingecko.com/api/v3" });

const DASHBOARD = {
  getCoins: async () => {
    const response = await authService.get("/coins/markets?vs_currency=usd");
    return response.data;
  },
};

export default DASHBOARD;
