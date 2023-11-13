import React from 'react';
import { TypeStaitionList } from 'type/type';

interface BusStationInfoDataProps {
  stationInfo: (stationMoreList: TypeStaitionList) => void;
  stationMoreList: TypeStaitionList;
}

function BusStationInfoData({
  stationInfo,
  stationMoreList,
}: BusStationInfoDataProps) {
  return (
    <li onClick={() => stationInfo(stationMoreList)}>
      {stationMoreList.stNm._text}({stationMoreList.arsId._text})
    </li>
  );
}

export default React.memo(BusStationInfoData);
