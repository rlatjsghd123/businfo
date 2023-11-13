import useGetStationBySearch from 'hook/@query/useGetStationBySearch';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store/store';

function useSearch() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const stationSelector = useSelector(
    (state: RootState) => state.search.station,
  );
  const busNumSelector = useSelector((state: RootState) => state.search.busNum);

  const getSearch = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: 'loadingReducer/IsLoading',
      payload: true,
    });
    if (search === '') {
      return alert('검색어를 입력해주세요.');
    }
    if (stationSelector) {
      dispatch({
        type: 'searchReducer/StationSearched',
      });
    }

    dispatch({
      type: 'searchReducer/StationSearched',
      payload: useGetStationBySearch(search),
    });
  };
  if (busNumSelector) {
    // 버스번호 초기화
    dispatch({
      type: 'searchReducer/BusNumSearched',
      payload: null,
    });
    // 버스번호 클릭시 더보기 끄기
    dispatch({
      type: 'moreReducer/MoreClose',
    });
    // 지도에 표시된 마커
    dispatch({
      type: 'searchReducer/BusStationInfo',
    });
    // 정류장클릭시 정보element 끄기
    dispatch({
      type: 'moreReducer/StationMoreClose',
    });
  }

  dispatch({
    type: 'searchReducer/BusNumSearched',
    payload: useGetStationBySearch(search),
  });

  setSearch('');
  dispatch({
    type: 'loadingReducer/IsLoading',
    payload: false,
  });

  return {
    getSearch,
    setSearch,
    search,
  };
}

export default useSearch;
