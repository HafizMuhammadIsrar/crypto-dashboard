// hooks/useGetCoins.ts
import DASHBOARD from '@/services/Dashboard';
import { useQuery } from '@tanstack/react-query';
import { Coin } from '@/types/coin'; // adjust the path as needed

const GET_COINS_QUERY_KEY = ['coins'];

export const useGetCoins = () => {
  return useQuery<Coin[]>({
    queryKey: GET_COINS_QUERY_KEY,
    queryFn: () => DASHBOARD.getCoins(),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchInterval: 1000 * 60,
  });
};
