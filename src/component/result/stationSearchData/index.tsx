import React from 'react';
import { TypeStaitionList } from '../../../type/type';
import * as S from './style';
import { v4 as uuidv4 } from 'uuid';

interface StationSearchDataProps {
  currentItems: TypeStaitionList[];
  stationInfo: (list: TypeStaitionList) => void;
}

function StationSearchData({
  currentItems,
  stationInfo,
}: StationSearchDataProps) {
  return (
    <>
      {currentItems.map((list: TypeStaitionList) => (
        <S.StationList onClick={() => stationInfo(list)} key={uuidv4()}>
          {list.stNm._text}({list.arsId._text})
        </S.StationList>
      ))}
    </>
  );
}

export default React.memo(StationSearchData);
