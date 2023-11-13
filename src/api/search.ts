import { instance } from './index';

export const getStationBySearch = async (searchWord: string) => {
  const response = await instance.get(
    `http://ws.bus.go.kr/api/rest/stationinfo/getStationByName?ServiceKey=${process.env.REACT_APP_SEOUL_BUS_API_KEY}&stSrch=${searchWord}`
  );
  return response.data;
};
