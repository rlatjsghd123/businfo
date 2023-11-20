import React from 'react';
import { TypeCurrentItem } from '../../../type/type';
import { BusTime, TimeList } from '../busInfoData/style';

interface BusTimeListProps {
  list: TypeCurrentItem;
}

function BusTimeList({ list }: BusTimeListProps) {
  return (
    <BusTime>
      <TimeList>배차 : {list.term._text}분</TimeList>
      <TimeList>
        첫차 : {list.firstBusTm._text.substring(10, 8)}:
        {list.firstBusTm._text.substring(12, 10)}분
      </TimeList>
      <TimeList>
        막차 : {list.lastBusTm._text.substring(10, 8)}:
        {list.lastBusTm._text.substring(12, 10)}분
      </TimeList>
    </BusTime>
  );
}

export default React.memo(BusTimeList);
