// hooks/useGetCoins.ts
import DASHBOARD from '@/services/Dashboard';
import { useQuery } from '@tanstack/react-query';

const GET_COINS_QUERY_KEY = ['coins'];

export const useGetCoins = () => {
  return useQuery({
    queryKey: GET_COINS_QUERY_KEY,
    queryFn: () => DASHBOARD.getCoins(),
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
    refetchInterval: 1000 * 60, // Poll every 60 seconds
  });
};
