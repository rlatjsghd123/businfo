import { useQuery } from '@tanstack/react-query';
import { getStationByName } from '../../api/name';

const useGetStationByName = (busRouteId: any) => {
  const { data: station } = useQuery({
    queryKey: ['stationName', busRouteId],
    queryFn: () => getStationByName(busRouteId),
  });
  return station;
};

export default useGetStationByName;
