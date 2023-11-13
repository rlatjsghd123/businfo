import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import * as S from './style';
import BusArriveArrayInfo from '../../../component/more/LocationMore/busArriveArrayInfo';
import BusArriveInfo from '../../../component/more/LocationMore/busArriveInfo';
import BusArriveInfoTitle from '../../../component/more/LocationMore/busArriveInfoTitle';
import BusStationTitle from '../../../component/more/LocationMore/busStationTitle';
import useMore from 'hook/more/useMore';

function LocationMore() {
  // 현재정류장에 오는 버스,도착정보
  const arriveSelector = useSelector(
    (state: RootState) => state.result.stationArrive
  );

  const UserClickedStationSelector = useSelector(
    (state: RootState) => state.result.userClick
  );
  const arriveMore = arriveSelector.ServiceResult.msgBody.itemList;

  const { HandleClose } = useMore();

  return (
    <S.StationLocation>
      <S.InnerStationLocation>
        <BusStationTitle
          HandleClose={HandleClose}
          UserClickedStationSelector={UserClickedStationSelector}
        />
        <S.StationLocationInfo>
          <S.ArriveInfo>
            <caption className="blind">버스위치정보</caption>
            <BusArriveInfoTitle />
            <tbody>
              {Array.isArray(arriveMore) ? (
                <BusArriveArrayInfo arriveMore={arriveMore} />
              ) : (
                <BusArriveInfo arriveMore={arriveMore} />
              )}
            </tbody>
          </S.ArriveInfo>
        </S.StationLocationInfo>
      </S.InnerStationLocation>
    </S.StationLocation>
  );
}

export default LocationMore;
