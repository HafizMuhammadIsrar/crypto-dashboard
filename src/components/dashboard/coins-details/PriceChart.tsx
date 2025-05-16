"use client";

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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InfoIcon, DollarSignIcon } from "lucide-react";
import { ChartFormattedDataProps } from "@/types/coin";

interface PriceChartProps {
  chartFormattedData: ChartFormattedDataProps[];
}

const PriceChart = ({ chartFormattedData }: PriceChartProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <DollarSignIcon className="mr-2 h-5 w-5" />
          Price Chart
        </CardTitle>
      </CardHeader>

      <CardContent className=" px-0 md:px-6 " >
        <div className="w-full overflow-auto h-64">
          <ResponsiveContainer
            className="overflow-auto"
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
  );
};

export default PriceChart;
