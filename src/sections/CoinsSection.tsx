"use client";
import { useState } from "react";
import { useGetCoins } from "@/hooks/useGetCoins";
import CoinGrid from "@/components/dashboard/CoinGrid";
import LoadingState from "@/components/dashboard/LoadingState";
import ErrorState from "@/components/dashboard/ErrorState";
import SearchBar from "@/components/dashboard/SearchBar ";

const CoinsSection = () => {
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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  if (isLoading) return <LoadingState />;
  if (isError) return <ErrorState />;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Top 20 Cryptocurrencies</h2>
      
      <SearchBar 
        searchTerm={searchTerm} 
        handleSearchChange={handleSearchChange} 
      />
      
      <CoinGrid filteredCoins={filteredCoins} />
    </div>
  );
};

export default CoinsSection;