"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  searchTerm: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ searchTerm, handleSearchChange }: SearchBarProps) => {
  return (
    <div className="relative mb-6 lg:w-1/2">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <Input
        type="text"
        className="pl-10 !focus:outline-none !focus:ring-0 "
        placeholder="Search by name or symbol..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;