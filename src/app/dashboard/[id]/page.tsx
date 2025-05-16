// app/dashboard/coin/[id]/page.tsx
export const metadata: Metadata = {
   title: "Crypto Dashboard | Coin Details",
  description: "View detailed information, market data, and charts for your favorite cryptocurrency. Real-time tracking powered by CoinGecko API.",
};
import CoinDetailClient from "@/screens/coin-detail-screnn";
import { Metadata } from "next";
export default function CoinDetailPage() {
  return <CoinDetailClient />;
}
