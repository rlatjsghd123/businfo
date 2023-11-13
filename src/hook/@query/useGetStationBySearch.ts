import { useQuery } from '@tanstack/react-query';
import { xml2json } from 'xml-js';
import { getStationBySearch } from 'api/search';

const useGetStationBySearch = (searchWord: string) => {
  const { data: search } = useQuery({
    queryKey: ['stationRouteId', searchWord],
    queryFn: () => getStationBySearch(searchWord),
  });

  const options = {
    compact: true,
    ignoreComment: true,
    spaces: 4,
  };
  const jsonData = xml2json(search, options);
  const json = JSON.parse(jsonData);

  return json;
};

export default useGetStationBySearch;
