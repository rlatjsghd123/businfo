import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { GoArrowBoth } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { xml2json } from 'xml-js';
import '../../scss/SearchedMore.scss';

function SearchedMore() {
  const [loading, setLoading] = useState(false);
  const [station, setStation] = useState(null);
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();
  // 버스의 모든 정류장
  const busStationSelector = useSelector(
    (state: any) => state.busInfo.busStation
  );

  //내가 클릭한 버스번호
  const locationSelector = useSelector(
    (state: any) => state.busInfo.ClickValue
  );
  console.log(locationSelector);
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
  const handleLocationClick = (list: any) => {
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

  const busStationArriveInfo = async (list: any) => {
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

  useEffect(() => {
    busStation();
  }, [locationSelector]);

  return (
    <div className='more'>
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
      <div className='station_box'>
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
        <ul className='bus_station'>
          {busStationSelector != null &&
            busStationSelector.ServiceResult.msgBody.itemList.map(
              (list: any, index: number) => (
                <li
                  onClick={() => handleLocationClick(list)}
                  key={index}
                  className={`${selected === list ? 'selected' : ''} ${
                    station === list.direction._text
                      ? 'change_list'
                      : 'station_list'
                  }`}
                >
                  {list.stationNm._text}({list.arsId._text})
                </li>
              )
            )}
        </ul>
      </div>
      {loading && (
        <div className='loading'>
          <img src={process.env.PUBLIC_URL + 'img/1488.gif'} alt='loading' />
          <span>Loading</span>
        </div>
      )}
    </div>
  );
}

export default SearchedMore;
