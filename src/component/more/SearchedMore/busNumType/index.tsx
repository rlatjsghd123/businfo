import { StartEnd } from 'component/result/busInfoData/style';
import {
  Blue,
  Gray,
  Green,
  Orange,
  Red,
  Yellow,
} from 'component/result/busRouteTypeResult/style';
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
        {locationSelector?.routeType?._text === '1' ? (
          <Red>공항</Red>
        ) : locationSelector?.routeType?._text === '2' ? (
          <Orange>마을</Orange>
        ) : locationSelector?.routeType?._text === '3' ? (
          <Blue>간선</Blue>
        ) : locationSelector?.routeType?._text === '4' ? (
          <Green>지선</Green>
        ) : locationSelector?.routeType?._text === '5' ? (
          <Yellow>순환</Yellow>
        ) : (
          locationSelector?.routeType?._text === '6' && <Red>광역</Red>
        )}
        {locationSelector?.routeType?._text === '7' && <Blue>인천</Blue>}
        {locationSelector?.routeType?._text === '8' && <Green>경기</Green>}
        {locationSelector?.routeType?._text === '9' && <Gray>폐지</Gray>}
        {locationSelector?.routeType?._text === '0' && <Orange>공용</Orange>}
        {locationSelector.busRouteNm._text}
        <StartEnd>
          ({locationSelector?.stStationNm?._text} <GoArrowBoth />
          {locationSelector?.edStationNm?._text})
        </StartEnd>
      </li>
      <S.Close onClick={handleCloseClick}>x</S.Close>
    </S.BusNumUl>
  );
}

export default React.memo(BusNumType);
