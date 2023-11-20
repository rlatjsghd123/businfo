import React from 'react';
import * as S from './style';
import { TypeCurrentItem } from '../../../type/type';

interface BusRouteTypeResultProps {
  list: TypeCurrentItem;
  fc: () => void;
}

function BusRouteTypeResult({ list, fc }: BusRouteTypeResultProps) {
  return (
    <S.CategoryTitle>
      {list?.routeType?._text === '1' && <S.Red>공항</S.Red>}
      {list?.routeType?._text === '2' && <S.Orange>마을</S.Orange>}
      {list?.routeType?._text === '3' && <S.Blue>간선</S.Blue>}
      {list?.routeType?._text === '4' && <S.Green>지선</S.Green>}
      {list?.routeType?._text === '5' && <S.Yellow>순환</S.Yellow>}
      {list?.routeType?._text === '6' && <S.Red>광역</S.Red>}
      {list?.routeType?._text === '7' && <S.Blue>인천</S.Blue>}
      {list?.routeType?._text === '8' && <S.Green>경기</S.Green>}
      {list?.routeType?._text === '9' && <S.Gray>폐지</S.Gray>}
      {list?.routeType?._text === '0' && <S.Orange>공용</S.Orange>}
      <S.BusNum onClick={fc}>{list?.busRouteNm?._text}</S.BusNum>
    </S.CategoryTitle>
  );
}

export default React.memo(BusRouteTypeResult);
