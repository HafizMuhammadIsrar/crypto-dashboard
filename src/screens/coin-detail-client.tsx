"use client";

import { useGetCoinDetails } from "@/hooks/useGetCoinDetails";
import { useGetCoinChart } from "@/hooks/useGetCoinChart";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  ArrowUpIcon,
  ArrowDownIcon,
  InfoIcon,
  DollarSignIcon,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import CoinDetailSkeleton from "@/components/skeletons/coin-detail-skeleton";
import { ChartFormattedDataProps } from "@/types/coin";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function CoinDetailClient() {
const { id } = useParams<{ id: string }>();
   console.log("id",id)
  const { data: coin, isLoading: coinLoading } = useGetCoinDetails(id);
  const { data: chartData, isLoading: chartLoading } = useGetCoinChart(id);
  const [isMounted, setIsMounted] = useState(false);
  const [chartFormattedData, setChartFormattedData] = useState<ChartFormattedDataProps[]>([]);

  // Set isMounted to true on client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Process chart data when available
  useEffect(() => {
    if (chartData?.prices) {
      // Format data for chart
      const formatted = chartData.prices.map(
        ([timestamp, price]: [number, number]) => ({
          date: new Date(timestamp).toLocaleDateString(),
          price: price,
        })
      );

      setChartFormattedData(formatted);
    }
  }, [chartData]);

  // Only render on client side
  if (!isMounted) return null;

  // Loading skeleton UI
  if (coinLoading || chartLoading) {
    return <CoinDetailSkeleton />;
  }

  // Price change indicators
  const priceChange24h = coin?.market_data?.price_change_percentage_24h || 0;
  const isPriceUp = priceChange24h >= 0;
  console.log("chartFormattedData", chartFormattedData);

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      {/* Header Card */}
<Link href="/dashboard" className=" flex items-center pb-3 gap-2 " > <ArrowLeft  className=" w-[15px] "  />  </Link>
      
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div className="flex items-center space-x-4">
            <Image
              src={coin?.image.large}
              alt={coin.name}
              width={100}
              height={100}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <CardTitle className="text-2xl">{coin?.name}</CardTitle>
              <CardDescription className="flex items-center">
                <Badge variant="outline" className="mr-2">
                  {coin?.symbol.toUpperCase()}
                </Badge>
                <span className="font-medium">
                  Rank #{coin?.market_cap_rank}
                </span>
              </CardDescription>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">
              ${coin.market_data.current_price.usd.toLocaleString()}
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
              <p className="text-sm text-muted-foreground">
                Circulating Supply
              </p>
              <p className="font-semibold">
                {coin.market_data.circulating_supply.toLocaleString()}{" "}
                {coin.symbol.toUpperCase()}
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

      {/* Price Chart Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <DollarSignIcon className="mr-2 h-5 w-5" />
            Price Chart
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-auto h-64">
            <ResponsiveContainer
              className=" overflow-auto "
              width="100%"
              height="100%"
            >
              <LineChart
                data={chartFormattedData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis
                  domain={["auto", "auto"]}
                  scale="linear"
                  tickFormatter={(value) =>
                    value.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })
                  }
                />
                <Tooltip
                  formatter={(value) => [
                    `${Number(value).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}`,
                    "Price",
                  ]}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="price"
                  name="Price (USD)"
                  stroke="#4f46e5"
                  activeDot={{ r: 8 }}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <InfoIcon className="h-4 w-4" />
            <span>Showing 7 days price history in USD</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
