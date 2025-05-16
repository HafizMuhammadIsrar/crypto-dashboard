"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useGetCoinDetails } from "@/hooks/useGetCoinDetails";
import { useGetCoinChart } from "@/hooks/useGetCoinChart";
import CoinDetailSkeleton from "@/components/skeletons/CoinDetailSkeleton";
import { ChartFormattedDataProps } from "@/types/coin";
import CoinHeader from "@/components/dashboard/coins-details/CoinHeader ";
import PriceInfoCard from "@/components/dashboard/coins-details/PriceInfoCard";
import PriceChart from "@/components/dashboard/coins-details/PriceChart";
import ErrorState from "@/components/dashboard/ErrorState";

export default function CoinDetailSection() {
  const { id } = useParams<{ id: string }>();
  const { data: coin, isLoading: coinLoading, isError } = useGetCoinDetails(id);
  const {
    data: chartData,
    isLoading: chartLoading,
    isError: chartError,
  } = useGetCoinChart(id);
  const [isMounted, setIsMounted] = useState(false);
  const [chartFormattedData, setChartFormattedData] = useState<
    ChartFormattedDataProps[]
  >([]);

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

  if (isError || chartError) return <ErrorState />;
  // Loading skeleton UI
  if (coinLoading || chartLoading) {
    return <CoinDetailSkeleton />;
  }

  return (
    <div className="container   max-w-4xl">
      {/* Back Button */}
      <Link href="/dashboard" className="flex w-fit items-center pb-3 gap-2">
        <ArrowLeft className="w-[15px]" />
        <span>Back to Dashboard</span>
      </Link>

      {/* Coin Header Component */}
      <CoinHeader
        coin={coin}
        priceChange24h={coin?.market_data?.price_change_percentage_24h || 0}
      />

      {/* Price Info Component */}
      <PriceInfoCard coin={coin} />

      {/* Price Chart Component */}
      <PriceChart chartFormattedData={chartFormattedData} />
    </div>
  );
}
