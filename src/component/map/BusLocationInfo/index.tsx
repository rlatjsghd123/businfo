import React from 'react';
import {
  CustomOverlayMap,
  Map,
  MapMarker,
  MapTypeControl,
  ZoomControl,
} from 'react-kakao-maps-sdk';
import LocationMore from '../../../content/more/LocationMore';
import { v4 as uuidv4 } from 'uuid';
import BusLocationTitle from '../BusLocationTitle';
import { Location, TypebusStation } from '../../../type/type';

interface BusLocationInfoProps {
  MapLevelSelector: number;
  busLocationSelector: Location;
  StationMoreSelector: boolean;
  busStationSelector: TypebusStation | undefined;
}

function BusLocationInfo({
  MapLevelSelector,
  busLocationSelector,
  StationMoreSelector,
  busStationSelector,
}: BusLocationInfoProps) {
  console.log(busLocationSelector);
  console.log(MapLevelSelector);
  return (
    <Map
      center={busLocationSelector}
      level={MapLevelSelector}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      {busStationSelector?.ServiceResult.msgBody.itemList.map(list => (
        <div key={uuidv4()}>
          <MapMarker
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
            position={{
              lat: Number(list.gpsY._text),
              lng: Number(list.gpsX._text),
            }}
          ></MapMarker>
          <CustomOverlayMap
            position={{
              lat: Number(list.gpsY._text),
              lng: Number(list.gpsX._text),
            }}
            yAnchor={1}
          >
            <BusLocationTitle list={list} />
          </CustomOverlayMap>
        </div>
      ))}
      {StationMoreSelector === false && <LocationMore />}
      <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
      <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT} />
    </Map>
  );
}

export default BusLocationInfo;
