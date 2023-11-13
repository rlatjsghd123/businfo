import React from 'react';
import * as S from './style';
import { TypeCurrentItem } from '../../../type/type';

interface BusRouteTypeResultProps {
  list: TypeCurrentItem;
  fc: () => void;
}

function BusRouteTypeResult({ list, fc }: BusRouteTypeResultProps) {
  return (
    <>
      <S.CategoryTitle>
        {list.routeType._text === '1' && (
          <S.Category className="red">공항</S.Category>
        )}
        {list.routeType._text === '2' && (
          <S.Category className="orange">마을</S.Category>
        )}
        {list.routeType._text === '3' && (
          <S.Category className="blue">간선</S.Category>
        )}
        {list.routeType._text === '4' && (
          <S.Category className="green">지선</S.Category>
        )}
        {list.routeType._text === '5' && (
          <S.Category className="yellow">순환</S.Category>
        )}
        {list.routeType._text === '6' && (
          <S.Category className="red">광역</S.Category>
        )}
        <S.Category onClick={fc}>{list.busRouteNm._text}</S.Category>
      </S.CategoryTitle>
    </>
  );
}

export default React.memo(BusRouteTypeResult);
