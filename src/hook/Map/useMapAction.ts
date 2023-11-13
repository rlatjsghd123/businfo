import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';

function useMapAction() {
  const dispatch = useDispatch<AppDispatch>();
  // 버스의 모든 정류장

  const busStationSelector = useSelector(
    (state: RootState) => state.search.busStation,
  );
  // 버스정류장 클릭시 LocationMore 컴포넌트 보이기
  const StationMoreSelector = useSelector(
    (state: RootState) => state.more.stationMore,
  );

  // 내가 클릭한 버스의 정류장의 가운데 위치
  const busLocationSelector = useSelector(
    (state: RootState) => state.map.location,
  );
  // 지도의 크기설정
  const MapLevelSelector = useSelector((state: RootState) => state.map.level);

  const busLocation = () => {
    const mapLocation = busStationSelector.ServiceResult.msgBody.itemList
      .slice()
      .sort((a, b) => Number(a) - Number(b));
    const lat = mapLocation[Math.floor(mapLocation.length / 2)].gpsY._text;
    const lng = mapLocation[Math.floor(mapLocation.length / 2)].gpsX._text;
    dispatch({
      type: 'LocationMapReducer/BusLocation',
      payload: {
        lat: lat,
        lng: lng,
      },
    });

    dispatch({
      type: 'LocationMapReducer/MapLevel',
      payload: 8,
    });
  };

  return {
    busLocation,
    MapLevelSelector,
    busLocationSelector,
    StationMoreSelector,
    busStationSelector,
  };
}

export default useMapAction;
