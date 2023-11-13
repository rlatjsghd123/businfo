import React from 'react';
import { TypeClickValue } from 'type/type';
import * as S from './style';

interface BusDisPatchTimeProps {
  locationSelector: TypeClickValue;
  onSationNumber: () => void;
  station: string;
}

function BusDisPatchTime({
  locationSelector,
  onSationNumber,
  station,
}: BusDisPatchTimeProps) {
  return (
    <S.BusStartEndUl>
      <S.BusStartEndLi
        onClick={() => onSationNumber}
        station={station === locationSelector.stStationNm._text}
      >
        {locationSelector.stStationNm._text}
      </S.BusStartEndLi>
      <S.BusStartEndLi
        onClick={() => onSationNumber}
        station={station === locationSelector.stStationNm._text}
      >
        {locationSelector.edStationNm._text}
      </S.BusStartEndLi>
    </S.BusStartEndUl>
  );
}

export default React.memo(BusDisPatchTime);
