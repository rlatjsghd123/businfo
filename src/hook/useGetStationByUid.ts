import { useQuery } from '@tanstack/react-query';
import { getStationByUid } from '../api/uid';
import { xml2json } from 'xml-js';

const useGetStationByUid = (arsId: any) => {
  const { data: uid } = useQuery({
    queryKey: ['stationUid', arsId],
    queryFn: () => getStationByUid(arsId),
  });

  const options = {
    compact: true,
    ignoreComment: true,
    spaces: 4,
  };
  const jsonData = xml2json(uid, options);
  const json = JSON.parse(jsonData);

  return json;
};

export default useGetStationByUid;
