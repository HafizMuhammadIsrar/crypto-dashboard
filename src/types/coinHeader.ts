interface CoinImage {
  large: string;
  small: string;
  thumb: string;
}

interface CoinMarketData {
  current_price: {
    usd: number;
  };
}

interface CoinData {
  id: string;
  name: string;
  symbol: string;
  image: CoinImage;
  market_cap_rank: number;
  market_data: CoinMarketData;
}

export interface CoinHeaderProps {
  coin: CoinData;
  priceChange24h: number;
}