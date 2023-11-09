import React, { useCallback } from 'react';
import { TypeCurrentItem } from '../type/type';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';

function useSearchResult() {
  const dispatch = useDispatch<AppDispatch>();
  const busNumSelector = useSelector(
    (state: RootState) => state.busInfo.busNum
  );

  const moreList = busNumSelector.ServiceResult.msgBody.itemList;
  const moreSelector = useSelector((state: RootState) => state.busInfo.more);

  const busStationLocation = useCallback((list: TypeCurrentItem) => {
    dispatch({
      type: 'busInfoReducer/MoreOpen',
    });
    dispatch({
      type: 'busInfoReducer/MoreLocation',
      payload: list,
    });
    // 정류장클릭시 정보element 끄기
    dispatch({
      type: 'busInfoReducer/StationMoreClose',
    });
  }, []);

  const busStationLocationFalse = useCallback((moreList: TypeCurrentItem) => {
    dispatch({
      type: 'busInfoReducer/MoreLocation',
      payload: moreList,
    });
    dispatch({
      type: 'busInfoReducer/MoreOpen',
    });
  }, []);

  return {
    busStationLocation,
    moreSelector,
    busNumSelector,
    busStationLocationFalse,
    moreList,
  };
}

export default useSearchResult;
