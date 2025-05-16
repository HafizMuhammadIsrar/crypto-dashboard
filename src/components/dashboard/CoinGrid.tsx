"use client";
import Link from "next/link";
import { Coin } from "@/types/coin";
import CoinCard from "@/components/cards/CoinCard";

interface CoinGridProps {
  filteredCoins: Coin[] | undefined;
}

const CoinGrid = ({ filteredCoins }: CoinGridProps) => {
  if (!filteredCoins || filteredCoins.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">
          No cryptocurrencies match your search.
        </p>
      </div>
    );
  }

  return (
    <div className="grid mb-4 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filteredCoins.map((coin: Coin, index: number) => (
        <Link href={`/dashboard/${coin.id}`} key={coin.id}>
          <CoinCard item={coin} index={index} />
        </Link>
      ))}
    </div>
  );
};

export default CoinGrid;