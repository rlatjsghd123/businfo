import React from 'react';
import * as S from './style';
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
      <S.BusInfoBox>
        <BusRouteTypeResult
          list={moreList}
          fc={() => busStationLocationFalse(moreList)}
        />
        <S.StartEnd>
          {moreList?.stStationNm?._text}
          <GoArrowBoth />
          {moreList?.edStationNm?._text}
        </S.StartEnd>
        <S.CorpNm>{moreList?.corpNm?._text}</S.CorpNm>
        <S.BusTime>
          <S.TimeList>배차 :{moreList?.term?._text}분</S.TimeList>
          <S.TimeList>
            첫차 :{moreList?.firstBusTm?._text?.substring(8, 2)}:
            {moreList?.firstBusTm?._text.substring(10, 2)}분
          </S.TimeList>
          <S.TimeList>
            막차 :{moreList?.lastBusTm?._text.substring(8, 2)}:
            {moreList?.lastBusTm?._text.substring(10, 2)}분
          </S.TimeList>
        </S.BusTime>
      </S.BusInfoBox>
    </li>
  );
}

export default React.memo(BusInfoData);
