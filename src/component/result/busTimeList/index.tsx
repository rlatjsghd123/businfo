import React from 'react';
import { TypeCurrentItem } from '../../../type/type';

interface BusTimeListProps {
  list: TypeCurrentItem;
}

function BusTimeList({ list }: BusTimeListProps) {
  return (
    <ul className='bus_time'>
      <li>배차 : {list.term._text}분</li>
      <li>
        첫차 : {list.firstBusTm._text.substring(8, 2)}:
        {list.firstBusTm._text.substring(10, 2)}분
      </li>
      <li>
        막차 : {list.lastBusTm._text.substring(8, 2)}:
        {list.lastBusTm._text.substring(10, 2)}분
      </li>
    </ul>
  );
}

export default BusTimeList;
