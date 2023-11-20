import React from 'react';
import { TypeStaitionList } from 'type/type';
import { StationList } from '../stationSearchData/style';

interface BusStationInfoDataProps {
  stationInfo: (stationMoreList: TypeStaitionList) => void;
  stationMoreList: TypeStaitionList;
}

function BusStationInfoData({
  stationInfo,
  stationMoreList,
}: BusStationInfoDataProps) {
  return (
    <StationList onClick={() => stationInfo(stationMoreList)}>
      {stationMoreList?.stNm?._text}({stationMoreList?.arsId?._text})
    </StationList>
  );
}

export default React.memo(BusStationInfoData);
