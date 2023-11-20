import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import Loding from '../../../component/Loading';
import BusNumType from '../../../component/more/SearchedMore/busNumType';
import useMore from 'hook/more/useMore';
import BusDisPatchTime from '../../../component/more/SearchedMore/busDisPatchTime';
import BusStation from '../../../component/more/SearchedMore/busStation';
import * as S from './style';

function SearchedMore() {
  // 버스의 모든 정류장
  const busStationSelector = useSelector(
    (state: RootState) => state.search.busStation,
  );
  //내가 클릭한 버스번호
  const locationSelector = useSelector(
    (state: RootState) => state.more.ClickValue,
  );
  const loading = useSelector((state: RootState) => state.loading.loading);
  const {
    handleCloseClick,
    handleLocationClick,
    busStation,
    selected,
    HandleStationClick,
    station,
  } = useMore();

  useEffect(() => {
    busStation();
  }, [locationSelector]);

  return (
    <S.SearchedMore>
      <BusNumType
        locationSelector={locationSelector}
        handleCloseClick={handleCloseClick}
      />
      <div>
        <BusDisPatchTime
          HandleStationClick={HandleStationClick}
          locationSelector={locationSelector}
          station={station}
        />
        <BusStation
          busStationSelector={busStationSelector}
          station={station}
          handleLocationClick={handleLocationClick}
          selected={selected}
        />
      </div>
      {loading && <Loding />}
    </S.SearchedMore>
  );
}

export default SearchedMore;
