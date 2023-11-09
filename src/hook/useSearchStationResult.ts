import React, { useState } from 'react';
import { TypeStaitionList } from '../type/type';
import { AppDispatch } from '../store/store';
import { useDispatch } from 'react-redux';

function useSearchStationResult() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  // 정류장 클릭 시 해당 정류장으로 이동 및 버스도착정보
  const stationInfo = (list: TypeStaitionList) => {
    // 버스정류장위치
    dispatch({
      type: 'busInfoReducer/BusLocation',
      payload: {
        lat: list.tmY._text,
        lng: list.tmX._text,
      },
    });
    // map의 크기 확대
    dispatch({
      type: 'busInfoReducer/MapLevel',
      payload: 3,
    });
    // 정류장클릭시 정보element가 보이기
    dispatch({
      type: 'busInfoReducer/StationMoreOpen',
    });
    // list값
    dispatch({
      type: 'busInfoReducer/UserClickedStation',
      payload: list,
    });
    busStationArriveInfo(list);
  };
  const busStationArriveInfo = async (list: TypeStaitionList) => {
    setLoading(true);
    dispatch({
      type: 'busInfoReducer/StationArriveInfo',
      //   payload: json,
    });
    setLoading(false);
  };
  return {};
}

export default useSearchStationResult;
