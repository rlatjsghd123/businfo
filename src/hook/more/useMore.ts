import { instance } from 'api';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store/store';
import { TypeLocationList } from 'type/type';
import { xml2json } from 'xml-js';

function useMore() {
  const [station, setStation] = useState<string>('');
  const [selected, setSelected] = useState<TypeLocationList>();
  const dispatch = useDispatch<AppDispatch>();

  //내가 클릭한 버스번호
  const locationSelector = useSelector(
    (state: RootState) => state.more.ClickValue,
  );

  const HandleClose = () => {
    // 정류장클릭시 정보element 끄기
    dispatch({
      type: 'moreReducer/StationMoreClose',
    });
  };

  // 버스 정류장정보
  const busStation = async () => {
    dispatch({
      type: 'loadingReducer/IsLoading',
      payload: true,
    });
    const response = await instance.get(
      `busRouteInfo/getStaionByRoute?ServiceKey=${process.env.REACT_APP_SEOUL_BUS_API_KEY}&busRouteId=${locationSelector?.busRouteId?._text}`,
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
        type: 'searchReducer/BusStationInfo',
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

  // 창 끄기
  const handleCloseClick = () => {
    dispatch({
      type: 'moreReducer/MoreClose',
    });
  };
  //정류장클릭시 해당 버스정류장 위치로 지도 이동
  const handleLocationClick = (list: TypeLocationList) => {
    if (list.arsId._text === '0' || list.arsId._text === undefined) {
      window.confirm('arsId가 없습니다.');
      return;
    }

    setSelected(list);
    // 버스정류장위치
    dispatch({
      type: 'LocationMapReducer/BusLocation',
      payload: {
        lat: list.gpsY._text,
        lng: list.gpsX._text,
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
      type: 'resultReducer/UserClickedStation',
      payload: list,
    });
    // 해당 정류장의 정보
    busStationArriveInfo(list);
  };
  const busStationArriveInfo = async (list: { arsId: { _text: string } }) => {
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

  const HandleStationClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const currentValue = e.currentTarget.innerText;
    const startStation = locationSelector?.stStationNm?._text;
    const endStation = locationSelector?.edStationNm?._text;
    console.log(currentValue);
    if (currentValue === startStation) {
      setStation(startStation);
    } else {
      setStation(endStation);
    }
  };

  return {
    HandleClose,
    handleCloseClick,
    handleLocationClick,
    busStation,
    selected,
    HandleStationClick,
    station,
  };
}

export default useMore;
