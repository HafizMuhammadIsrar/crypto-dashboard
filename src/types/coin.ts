import { LucideIcon } from "lucide-react";

// types/coin.ts
export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null; // or possibly define `roi` type if available
  last_updated: string;
}

export interface CoinCardProps {
  item: Coin;
  index: number;
}

export interface ChartFormattedDataProps {
  date: Date;
  price: number;
}

export interface CoinMarketData {
  market_cap: {
    usd: number;
  };
  total_volume: {
    usd: number;
  };
  circulating_supply: number;
  total_supply: number | null;
}

export interface CoinData {
  id: string;
  symbol: string;
  name: string;
  market_data: CoinMarketData;
}

export interface PriceInfoCardProps {
  coin: CoinData;
}

interface Project {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface NavProjectsProps {
  projects: Project[];
}



