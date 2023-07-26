import React, { useEffect, useRef } from 'react';
import {
  CustomOverlayMap,
  Map,
  MapMarker,
  MapTypeControl,
  ZoomControl,
} from 'react-kakao-maps-sdk';
import '../scss/BusLocationInfo.scss';
import { useDispatch, useSelector } from 'react-redux';
import LocationMore from './LocationMore';

function BusLocationInfo() {
  const dispatch = useDispatch();
  // 버스의 모든 정류장
  const busStationSelector = useSelector(
    (state: any) => state.busInfo.busStation
  );
  console.log(busStationSelector);
  // 버스정류장 클릭시 LocationMore 컴포넌트 보이기
  const StationMoreSelector = useSelector(
    (state: any) => state.busInfo.stationMore
  );
  // 내가 클릭한 버스의 정류장의 가운데 위치
  const busLocationSelector = useSelector(
    (state: any) => state.busInfo.location
  );
  // 지도의 크기설정
  const MapLevelSelector = useSelector((state: any) => state.busInfo.level);

  useEffect(() => {
    if (busStationSelector != null) {
      const mapLocation = busStationSelector.ServiceResult.msgBody.itemList
        .slice()
        .sort((a: any, b: any) => a - b);

      dispatch({
        type: 'busInfoReducer/BusLocation',
        payload: {
          lat: mapLocation[Math.floor(mapLocation.length / 2)].gpsY._text,
          lng: mapLocation[Math.floor(mapLocation.length / 2)].gpsX._text,
        },
      });
    }
    dispatch({
      type: 'busInfoReducer/MapLevel',
      payload: 8,
    });
  }, [busStationSelector]);
  return (
    <div className='bus_location_info'>
      <div className='inner_bus_location_info'>
        <div className='map'>
          <Map
            center={busLocationSelector}
            level={MapLevelSelector}
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            {busStationSelector != null &&
              busStationSelector.ServiceResult.msgBody.itemList.map(
                (list: any, index: number) => (
                  <>
                    <MapMarker
                      key={index}
                      image={{
                        src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
                        size: {
                          width: 24,
                          height: 35,
                        },
                        options: {
                          offset: {
                            x: 5,
                            y: 36,
                          },
                        },
                      }}
                      position={{ lat: list.gpsY._text, lng: list.gpsX._text }}
                    ></MapMarker>
                    <CustomOverlayMap
                      position={{ lat: list.gpsY._text, lng: list.gpsX._text }}
                      yAnchor={1}
                    >
                      <div className='station_location_title'>
                        {list.stationNm._text}
                      </div>
                    </CustomOverlayMap>
                  </>
                )
              )}

            {StationMoreSelector === false && <LocationMore />}
            <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
            <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT} />
          </Map>
        </div>
      </div>
    </div>
  );
}

export default BusLocationInfo;