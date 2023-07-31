import axios from 'axios';
import React, { useMemo, useState } from 'react';
import { GoArrowBoth } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { xml2json } from 'xml-js';
import '../../scss/SearchedMore.scss';
import type { RootState, AppDispatch } from '../../store/store';
import { TypeLocationList } from '../../type/type';
import Loding from '../Loding';
import { v4 as uuidv4 } from 'uuid';

function SearchedMore() {
  const [loading, setLoading] = useState(false);
  const [station, setStation] = useState<string>('');
  const [selected, setSelected] = useState<TypeLocationList | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  // 버스의 모든 정류장
  const busStationSelector = useSelector(
    (state: RootState) => state.busInfo.busStation
  );
  //내가 클릭한 버스번호
  const locationSelector = useSelector(
    (state: RootState) => state.busInfo.ClickValue
  );

  console.log('버스검색결과더보기 컴포넌트');
  // 버스 정류장정보
  const busStation = async () => {
    setLoading(true);

    if (locationSelector) {
      const stationRes = await axios.get(
        `http://ws.bus.go.kr/api/rest/busRouteInfo/getStaionByRoute?ServiceKey=${process.env.REACT_APP_SEOUL_BUS_API_KEY}&busRouteId=${locationSelector.busRouteId._text}`
      );
      try {
        const options = {
          compact: true,
          ignoreComment: true,
          spaces: 4,
        };
        const jsonData = xml2json(stationRes.data, options);
        const json = JSON.parse(jsonData);

        dispatch({
          type: 'busInfoReducer/BusStationInfo',
          payload: json,
        });
      } catch (error) {
        console.log(error);
      }
    }
    setLoading(false);
  };

  // 창 끄기
  const handleCloseClick = () => {
    dispatch({
      type: 'busInfoReducer/MoreClose',
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
      type: 'busInfoReducer/BusLocation',
      payload: {
        lat: list.gpsY._text,
        lng: list.gpsX._text,
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
    // 해당 정류장의 정보
    busStationArriveInfo(list);
  };
  const busStationArriveInfo = async (list: { arsId: { _text: string } }) => {
    setLoading(true);
    if (locationSelector) {
      const stationArriveRes = await axios.get(
        `http://ws.bus.go.kr/api/rest/stationinfo/getStationByUid?ServiceKey=${process.env.REACT_APP_SEOUL_BUS_API_KEY}&arsId=${list.arsId._text}`
      );
      try {
        const options = {
          compact: true,
          ignoreComment: true,
          spaces: 4,
        };
        const jsonData = xml2json(stationArriveRes.data, options);
        const json = JSON.parse(jsonData);

        dispatch({
          type: 'busInfoReducer/StationArriveInfo',
          payload: json,
        });
      } catch (error) {
        console.log(error);
      }
    }
    setLoading(false);
  };

  useMemo(() => {
    busStation();
  }, [locationSelector]);

  return (
    <div className='more'>
      {locationSelector !== null && (
        <>
          <ul className='bus_num'>
            <li className='type_list'>
              {locationSelector.routeType._text === '1' ? (
                <span className='bus_category red'>공항</span>
              ) : locationSelector.routeType._text === '2' ? (
                <span className='bus_category orange'>마을</span>
              ) : locationSelector.routeType._text === '3' ? (
                <span className='bus_category blue'>간선</span>
              ) : locationSelector.routeType._text === '4' ? (
                <span className='bus_category green'>지선</span>
              ) : locationSelector.routeType._text === '5' ? (
                <span className='bus_category yellow'>순환</span>
              ) : (
                locationSelector.routeType._text === '6' && (
                  <span className='bus_category red'>광역</span>
                )
              )}
              {locationSelector.busRouteNm._text}
              <span className='st_ed'>
                ({locationSelector.stStationNm._text} <GoArrowBoth />
                {locationSelector.edStationNm._text})
              </span>
            </li>

            <li onClick={handleCloseClick} className='close'>
              x
            </li>
          </ul>
        </>
      )}
      <div className='station_box'>
        {locationSelector !== null && (
          <ul className='st_ed_list'>
            <li
              onClick={() => setStation(locationSelector.stStationNm._text)}
              className={
                station === locationSelector.stStationNm._text
                  ? ''
                  : 'current_station'
              }
            >
              {locationSelector.stStationNm._text}
            </li>
            <li
              onClick={() => setStation(locationSelector.edStationNm._text)}
              className={
                station === locationSelector.stStationNm._text
                  ? 'current_station'
                  : ''
              }
            >
              {locationSelector.edStationNm._text}
            </li>
          </ul>
        )}
        <ul className='bus_station'>
          {busStationSelector != null &&
            busStationSelector.ServiceResult.msgBody.itemList
              // 중복값 제거
              .filter(
                (list, index: number) =>
                  busStationSelector.ServiceResult.msgBody.itemList.indexOf(
                    list
                  ) === index
              )
              .map((list) => (
                <li
                  onClick={() => handleLocationClick(list)}
                  key={uuidv4()}
                  className={`${selected === list ? 'selected' : ''} ${
                    station === list.direction._text
                      ? 'change_list'
                      : 'station_list'
                  }`}
                >
                  {list.stationNm._text}({list.arsId._text})
                </li>
              ))}
        </ul>
      </div>
      {loading && <Loding />}
    </div>
  );
}

export default SearchedMore;
