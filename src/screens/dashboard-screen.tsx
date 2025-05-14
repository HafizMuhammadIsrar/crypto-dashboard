"use client"
import { useState } from "react";
import CoinCard from "@/components/cards/coin-card";
import { useGetCoins } from "@/hooks/useGetCoins";
import { Search } from "lucide-react";
import { Coin } from "@/types/coin";
import { Input } from "@/components/ui/input";

const DashboardScreen = () => {
  const { data, isLoading, isError } = useGetCoins();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter top 20 coins with valid current_price
  const filteredCoins = data
    ?.filter((item) => typeof item.current_price === "number")
    .sort((a, b) => b.current_price - a.current_price)
    .slice(0, 20) // Take only top 20 highest priced
    .filter((item) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        item.name.toLowerCase().includes(searchLower) ||
        item.symbol.toLowerCase().includes(searchLower)
      );
    });

  const handleSearchChange = (e:any) => {
    setSearchTerm(e.target.value);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong while fetching coins.</div>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Top 20 Cryptocurrencies</h2>
      
      {/* Search Bar with shadcn/ui Input */}
      <div className="relative mb-6 w-1/2">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <Input
          type="text"
          className="pl-10"
          placeholder="Search by name or symbol..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      
      {filteredCoins && filteredCoins.length > 0 ? (
        <div className="grid mb-4 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {filteredCoins.map((item: Coin, index: number) => (
            <CoinCard key={item.id} item={item} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500">No cryptocurrencies match your search.</p>
        </div>
      )}
    </div>
  );
};

export default DashboardScreen;