import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import CardImage from "../../../public/bitcoin.png";
import type { FC } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { CoinCardProps } from "@/types/coin";

const CoinCard: FC<CoinCardProps> = ({ item, index }) => {
  // Format percentage with sign
  const percentageChange = item.price_change_percentage_24h?.toFixed(2);
  const isPositive = item.price_change_percentage_24h >= 0;

  return (
    <Card key={index} className="gap-3 h-[225px] justify-between">
      <CardHeader>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <Image
              src={item?.image || CardImage}
              width={100}
              height={100}
              className="w-[70px]"
              alt="card-image"
            />
          </div>

          <div className="flex flex-row items-start justify-between space-y-0 mt-4">
            <CardTitle className="text-sm">{item?.name}</CardTitle>
            <span className="uppercase font-semibold text-blue-600">
              {item.symbol}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className=" flex justify-between items-center ">
        <div className="text-2xl font-bold">${item.current_price}</div>

        <div className="flex items-center text-sm font-medium mt-1">
          <span
            className={`flex items-center ${
              isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            {isPositive ? (
              <ArrowUp className="w-4 h-4 mr-1" />
            ) : (
              <ArrowDown className="w-4 h-4 mr-1" />
            )}
            {percentageChange}%
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoinCard;
