import React from 'react';
import { TypeStationArriveList } from 'type/type';
import * as S from './style';
import { ArriveTr } from '../busArriveInfoTitle/style';

interface BusArriveInfoProps {
  arriveMore: TypeStationArriveList;
}
function BusArriveInfo({ arriveMore }: BusArriveInfoProps) {
  return (
    <ArriveTr>
      <S.ArriveTd>
        <strong>{arriveMore.busRouteAbrv._text}</strong>
      </S.ArriveTd>
      <S.ArriveTd>
        {arriveMore.busType1._text === '0' && '[일반]'}
        {arriveMore.busType1._text === '1' && '[저상]'}
        {arriveMore.busType1._text === '2' && '[굴절]'}
      </S.ArriveTd>
      <S.ArriveTd>{arriveMore.arrmsg1._text}</S.ArriveTd>
      <S.ArriveTd>
        {arriveMore.busType2._text === '0' && '[일반]'}
        {arriveMore.busType2._text === '1' && '[저상]'}
        {arriveMore.busType2._text === '2' && '[굴절]'}
      </S.ArriveTd>
      <S.ArriveTd>{arriveMore.arrmsg2._text}</S.ArriveTd>
    </ArriveTr>
  );
}

export default React.memo(BusArriveInfo);
