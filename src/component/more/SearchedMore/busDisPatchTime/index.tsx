import React from 'react';
import { TypeClickValue } from 'type/type';
import * as S from './style';

interface BusDisPatchTimeProps {
  locationSelector: TypeClickValue;
  HandleStationClick: (e: any) => void;
  station: string;
}

function BusDisPatchTime({
  locationSelector,
  HandleStationClick,
  station,
}: BusDisPatchTimeProps) {
  return (
    <S.BusStartEndUl>
      <S.BusStartEndLi
        onClick={HandleStationClick}
        station={station === locationSelector.stStationNm._text}
      >
        {locationSelector.stStationNm._text}
      </S.BusStartEndLi>
      <S.BusStartEndLi
        onClick={HandleStationClick}
        station={station === locationSelector.edStationNm._text}
      >
        {locationSelector.edStationNm._text}
      </S.BusStartEndLi>
    </S.BusStartEndUl>
  );
}

export default React.memo(BusDisPatchTime);
