import { useQuery } from '@tanstack/react-query';
import { xml2json } from 'xml-js';
import { getStaionByRoute } from 'api/more';

const useGetStationByRoute = (RouteId: any) => {
  const { data: Route } = useQuery({
    queryKey: ['stationRouteId', RouteId],
    queryFn: () => getStaionByRoute(RouteId),
  });

  const options = {
    compact: true,
    ignoreComment: true,
    spaces: 4,
  };
  const jsonData = xml2json(Route, options);
  const json = JSON.parse(jsonData);

  return json;
};

export default useGetStationByRoute;
