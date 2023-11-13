import React from 'react';
import { TypeUserClick } from 'type/type';
import * as S from './style';

interface BusStationTitleProps {
  UserClickedStationSelector: TypeUserClick;
  HandleClose: () => void;
}

function BusStationTitle({
  UserClickedStationSelector,
  HandleClose,
}: BusStationTitleProps) {
  return (
    <S.StationTitleDiv>
      <S.StationTitleH1>
        {UserClickedStationSelector !== null &&
        UserClickedStationSelector.stationNm
          ? UserClickedStationSelector.stationNm._text
          : UserClickedStationSelector !== null &&
            UserClickedStationSelector.stNm._text}
      </S.StationTitleH1>
      <S.StationTitleSpan onClick={() => HandleClose}>x</S.StationTitleSpan>
    </S.StationTitleDiv>
  );
}

export default React.memo(BusStationTitle);
