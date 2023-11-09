import React from 'react';
import BusRouteTypeResult from '../busRouteTypeResult';
import { GoArrowBoth } from 'react-icons/go';
import { TypeCurrentItem } from '../../../type/type';

interface StationSearchDataProps {
  busStationLocationFalse: (moreList: TypeCurrentItem) => void;
  moreList: TypeCurrentItem;
}

function BusInfoData({
  moreList,
  busStationLocationFalse,
}: StationSearchDataProps) {
  return (
    <li>
      <div className='bus_info_box'>
        <BusRouteTypeResult
          list={moreList}
          fc={() => busStationLocationFalse(moreList)}
        />

        <p className='start_end_point'>
          {moreList.stStationNm._text}
          <GoArrowBoth />
          {moreList.edStationNm._text}
        </p>
        <p className='corp'>{moreList.corpNm._text}</p>
        <ul className='bus_time'>
          <li>배차 :{moreList.term._text}분</li>
          <li>
            첫차 :{moreList.firstBusTm._text?.substring(8, 2)}:
            {moreList.firstBusTm._text.substring(10, 2)}분
          </li>
          <li>
            막차 :{moreList.lastBusTm._text.substring(8, 2)}:
            {moreList.lastBusTm._text.substring(10, 2)}분
          </li>
        </ul>
      </div>
    </li>
  );
}

export default React.memo(BusInfoData);
