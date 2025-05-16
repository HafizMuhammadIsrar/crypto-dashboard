"use client";

import Image from "next/image";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CoinHeaderProps } from "@/types/coinHeader";



const CoinHeader = ({ coin, priceChange24h }: CoinHeaderProps) => {
  const isPriceUp = priceChange24h >= 0;

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center px-4 md:px-6 justify-between pb-2">
        <div className="flex items-center space-x-4">
          <Image
            src={coin?.image.large}
            alt={coin?.name}
            width={100}
            height={100}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <CardTitle className=" text-xl md:text-2xl">{coin?.name}</CardTitle>
            <CardDescription className="flex items-center">
              <Badge variant="outline" className="mr-2">
                {coin.symbol.toUpperCase()}
              </Badge>
              <span className="font-medium">Rank #{coin?.market_cap_rank}</span>
            </CardDescription>
          </div>
        </div>

        <div className="text-right">
          <div className=" text-xl md:text-2xl font-bold">
            ${coin?.market_data.current_price.usd.toLocaleString()}
          </div>
          <div
            className={`flex items-center justify-end ${
              isPriceUp ? "text-green-500" : "text-red-500"
            }`}
          >
            {isPriceUp ? (
              <ArrowUpIcon className="h-4 w-4 mr-1" />
            ) : (
              <ArrowDownIcon className="h-4 w-4 mr-1" />
            )}
            {Math.abs(priceChange24h).toFixed(2)}%
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default CoinHeader;