import React from 'react';
import * as S from './style';

function BusArriveInfoTitle() {
  return (
    <S.ArriveTr>
      <S.ArriveTh>곧도착</S.ArriveTh>
      <S.ArriveTh colSpan={4}>곧도착하는버스</S.ArriveTh>
    </S.ArriveTr>
  );
}

export default BusArriveInfoTitle;
