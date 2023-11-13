import { instance } from './index';

export const getStaionByRoute = async (busRouteId: string) => {
  const response = await instance.get(
    `busRouteInfo/getStaionByRoute?ServiceKey=${process.env.REACT_APP_SEOUL_BUS_API_KEY}&busRouteId=${busRouteId}`
  );
  return response.data;
};
