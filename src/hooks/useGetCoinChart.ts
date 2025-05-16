// hooks/useGetCoinChart.ts
import { useQuery } from '@tanstack/react-query';
import DASHBOARD from '@/services/cryptoDashboard';

export const useGetCoinChart = (id: string) => {
  return useQuery({
    queryKey: ['coin-chart', id],
    queryFn: () => DASHBOARD.getCoinChart(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
