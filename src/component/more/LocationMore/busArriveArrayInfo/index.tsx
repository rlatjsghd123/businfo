import React from 'react';
import { TypeStationArriveList } from 'type/type';
import { v4 as uuidv4 } from 'uuid';
import { ArriveTd } from '../busArriveInfo/style';
import { ArriveTr } from '../busArriveInfoTitle/style';

interface BusArriveInfoProps {
  arriveMore: TypeStationArriveList[];
}
function BusArriveArrayInfo({ arriveMore }: BusArriveInfoProps) {
  return (
    <>
      {arriveMore.map((list: TypeStationArriveList) => (
        <ArriveTr key={uuidv4()}>
          <ArriveTd>
            <strong>{list.busRouteAbrv._text}</strong>
          </ArriveTd>
          <ArriveTd>
            {list.busType1._text === '0' && '[일반]'}
            {list.busType1._text === '1' && '[저상]'}
            {list.busType1._text === '2' && '[굴절]'}
          </ArriveTd>
          <ArriveTd>{list.arrmsg1._text}</ArriveTd>
          <ArriveTd>
            {list.busType2._text === '0' && '[일반]'}
            {list.busType2._text === '1' && '[저상]'}
            {list.busType2._text === '2' && '[굴절]'}
          </ArriveTd>
          <ArriveTd>{list.arrmsg2._text}</ArriveTd>
        </ArriveTr>
      ))}
    </>
  );
}

export default React.memo(BusArriveArrayInfo);
