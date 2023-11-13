import React from 'react';
import { TypeCurrentItem } from '../../../type/type';
import BusTimeList from '../busTimeList';
import BusRouteTypeResult from '../busRouteTypeResult';
import { GoArrowBoth } from 'react-icons/go';
import { v4 as uuidv4 } from 'uuid';
import { BusInfoBox, CorpNm, StartEnd } from '../busInfoData/style';

interface BusSearchDataProps {
  currentItems: TypeCurrentItem[];
  busStationLocation: (list: TypeCurrentItem) => void;
}

function BusSearchData({
  currentItems,
  busStationLocation,
}: BusSearchDataProps) {
  return (
    <>
      {currentItems.map((list: TypeCurrentItem) => (
        <li key={uuidv4()}>
          <BusInfoBox>
            <BusRouteTypeResult
              list={list}
              fc={() => busStationLocation(list)}
            />
            <StartEnd>
              {list.stStationNm._text} <GoArrowBoth />
              {list.edStationNm._text}
            </StartEnd>
            <CorpNm>{list.corpNm._text}</CorpNm>
            <BusTimeList list={list} />
          </BusInfoBox>
        </li>
      ))}
    </>
  );
}

export default React.memo(BusSearchData);
