import React from 'react';
import * as S from './style';
import { TypebusStationList } from '../../../type/type';

function BusLocationTitle({ list }: TypebusStationList) {
  return <S.LocationTitle>{list.stationNm._text}</S.LocationTitle>;
}

export default React.memo(BusLocationTitle);
