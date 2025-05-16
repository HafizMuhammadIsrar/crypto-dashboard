"use client";

import { Card, CardContent } from "@/components/ui/card";
import { PriceInfoCardProps } from "@/types/coin";

const PriceInfoCard = ({ coin }: PriceInfoCardProps) => {
  return (
    <Card className="mb-6">
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Market Cap</p>
            <p className="font-semibold">
              ${coin.market_data.market_cap.usd.toLocaleString()}
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">24h Volume</p>
            <p className="font-semibold">
              ${coin.market_data.total_volume.usd.toLocaleString()}
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Circulating Supply</p>
            <p className="font-semibold">
              {coin.market_data.circulating_supply.toLocaleString()}{" "}
              {coin?.symbol.toUpperCase()}
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Total Supply</p>
            <p className="font-semibold">
              {coin.market_data.total_supply
                ? `${coin.market_data.total_supply.toLocaleString()} ${coin.symbol.toUpperCase()}`
                : "Unlimited"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceInfoCard;
