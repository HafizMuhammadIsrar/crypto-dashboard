// hooks/useGetCoinDetails.ts
import { useQuery } from '@tanstack/react-query';
import DASHBOARD from '@/services/cryptoDashboard';

export const useGetCoinDetails = (id: string) => {
  return useQuery({
    queryKey: ['coin', id],
    queryFn: () => DASHBOARD.getCoinDetails(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
