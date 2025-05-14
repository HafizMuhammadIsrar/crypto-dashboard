import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import CardImage from "../../../public/bitcoin.png";
import type { FC } from "react";
import { Coin } from "@/types/coin";

interface CoinCardProps {
  item: Coin;
  index: number;
}

const CoinCard: FC<CoinCardProps> = ({ item, index }) => {
  return (
    <Card key={index} className="gap-3">
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

      <CardContent>
        <div className="text-2xl font-bold">${item.current_price}</div>
      </CardContent>
    </Card>
  );
};

export default CoinCard;
