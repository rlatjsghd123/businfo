import { StartEnd } from 'component/result/busInfoData/style';
import { Category } from 'component/result/busRouteTypeResult/style';
import * as S from './style';
import { GoArrowBoth } from 'react-icons/go';
import { TypeClickValue } from 'type/type';
import React from 'react';

interface BusNumTypeProps {
  locationSelector: TypeClickValue;
  handleCloseClick: () => void;
}

function BusNumType({ locationSelector, handleCloseClick }: BusNumTypeProps) {
  return (
    <S.BusNumUl>
      <li>
        {locationSelector.routeType._text === '1' ? (
          <Category className="bus_category red">공항</Category>
        ) : locationSelector.routeType._text === '2' ? (
          <Category className="bus_category orange">마을</Category>
        ) : locationSelector.routeType._text === '3' ? (
          <Category className="bus_category blue">간선</Category>
        ) : locationSelector.routeType._text === '4' ? (
          <Category className="bus_category green">지선</Category>
        ) : locationSelector.routeType._text === '5' ? (
          <Category className="bus_category yellow">순환</Category>
        ) : (
          locationSelector.routeType._text === '6' && (
            <Category className="bus_category red">광역</Category>
          )
        )}
        {locationSelector.busRouteNm._text}
        <StartEnd>
          ({locationSelector.stStationNm._text} <GoArrowBoth />
          {locationSelector.edStationNm._text})
        </StartEnd>
      </li>
      <S.Close onClick={handleCloseClick}>x</S.Close>
    </S.BusNumUl>
  );
}

export default React.memo(BusNumType);
