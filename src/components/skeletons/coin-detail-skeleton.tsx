import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const CoinDetailSkeleton = () => {
  return (
    <div className="space-y-6 p-4">
      <div className="">
        <Skeleton className="h-44 w-full" />
      </div>
      <Skeleton className="h-64 w-full" />
    </div>
  );
};

export default CoinDetailSkeleton;
