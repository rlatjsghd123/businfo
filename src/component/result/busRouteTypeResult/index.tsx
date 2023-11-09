import React from 'react';
import { TypeCurrentItem } from '../../../type/type';

interface BusRouteTypeResultProps {
  list: TypeCurrentItem;
  fc: () => void;
}

function BusRouteTypeResult({ list, fc }: BusRouteTypeResultProps) {
  return (
    <>
      <h4>
        {list.routeType._text === '1' && (
          <span className='bus_category red'>공항</span>
        )}
        {list.routeType._text === '2' && (
          <span className='bus_category orange'>마을</span>
        )}
        {list.routeType._text === '3' && (
          <span className='bus_category blue'>간선</span>
        )}
        {list.routeType._text === '4' && (
          <span className='bus_category green'>지선</span>
        )}
        {list.routeType._text === '5' && (
          <span className='bus_category yellow'>순환</span>
        )}
        {list.routeType._text === '6' && (
          <span className='bus_category red'>광역</span>
        )}
        <span onClick={fc}>{list.busRouteNm._text}</span>
      </h4>
    </>
  );
}

export default BusRouteTypeResult;
