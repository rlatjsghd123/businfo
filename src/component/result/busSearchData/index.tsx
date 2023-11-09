import React from 'react';
import { TypeCurrentItem } from '../../../type/type';
import BusTimeList from '../busTimeList';
import BusRouteTypeResult from '../busRouteTypeResult';
import { GoArrowBoth } from 'react-icons/go';
import { v4 as uuidv4 } from 'uuid';

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
          <div className='bus_info_box'>
            <BusRouteTypeResult
              list={list}
              fc={() => busStationLocation(list)}
            />
            <p className='start_end_point'>
              {list.stStationNm._text} <GoArrowBoth />
              {list.edStationNm._text}
            </p>
            <p className='corp'>{list.corpNm._text}</p>
            <BusTimeList list={list} />
          </div>
        </li>
      ))}
    </>
  );
}

export default React.memo(BusSearchData);
