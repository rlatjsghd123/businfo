import React, { useState } from 'react';
import { TypeStaitionList } from '../../type/type';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { xml2json } from 'xml-js';
import { instance } from 'api';

function useSearchStationResult() {
  const dispatch = useDispatch<AppDispatch>();

  // 정류장 클릭 시 해당 정류장으로 이동 및 버스도착정보
  const stationInfo = (list: TypeStaitionList) => {
    // 버스정류장위치
    dispatch({
      type: 'LocationMapReducer/BusLocation',
      payload: {
        lat: list.tmY._text,
        lng: list.tmX._text,
      },
    });
    // map의 크기 확대
    dispatch({
      type: 'LocationMapReducer/MapLevel',
      payload: 3,
    });
    // 정류장클릭시 정보element가 보이기
    dispatch({
      type: 'moreReducer/StationMoreOpen',
    });
    // list값
    dispatch({
      type: 'moreReducer/UserClickedStation',
      payload: list,
    });
    busStationArriveInfo(list);
  };
  const busStationArriveInfo = async (list: TypeStaitionList) => {
    dispatch({
      type: 'loadingReducer/IsLoading',
      payload: true,
    });
    const response = await instance.get(
      `stationinfo/getStationByUid?ServiceKey=${process.env.REACT_APP_SEOUL_BUS_API_KEY}&arsId=${list.arsId._text}`,
    );
    try {
      const options = {
        compact: true,
        ignoreComment: true,
        spaces: 4,
      };
      const jsonData = xml2json(response.data, options);
      const json = JSON.parse(jsonData);

      dispatch({
        type: 'resultReducer/StationArriveInfo',
        payload: json,
      });
    } catch (error) {
      console.log(error);
    }

    dispatch({
      type: 'loadingReducer/IsLoading',
      payload: false,
    });
  };
  return { stationInfo };
}

export default useSearchStationResult;
