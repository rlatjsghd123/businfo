import { instance } from './index';

export const getStationByUid = async (arsId: string) => {
  const response = await instance.get(
    `stationinfo/getStationByUid?ServiceKey=${process.env.REACT_APP_SEOUL_BUS_API_KEY}&arsId=${arsId}`
  );
  return response.data;
};
