import { instance } from 'api';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store/store';
import { xml2json } from 'xml-js';

function useSearch() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const stationSelector = useSelector(
    (state: RootState) => state.search.station,
  );
  const busNumSelector = useSelector((state: RootState) => state.search.busNum);

  const getSearch = async (e: any) => {
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

    const response = await instance.get(
      `stationinfo/getStationByName?serviceKey=${process.env.REACT_APP_SEOUL_BUS_API_KEY}&stSrch=${search}`,
    );
    try {
      const options = {
        compact: true,
        ignoreComment: true,
        spaces: 4,
      };
      const jsonData = xml2json(response.data, options);
      const json = JSON.parse(jsonData);
      dispatch({
        type: 'searchReducer/StationSearched',
        payload: json,
      });
    } catch (error) {
      console.log(error);
    }
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
    const busNumResponse = await instance.get(
      `busRouteInfo/getBusRouteList?serviceKey=${process.env.REACT_APP_SEOUL_BUS_API_KEY}&strSrch=${search}`,
    );
    try {
      const options = {
        compact: true,
        ignoreComment: true,
        spaces: 4,
      };
      const jsonData = xml2json(busNumResponse.data, options);
      const json = JSON.parse(jsonData);
      dispatch({
        type: 'searchReducer/BusNumSearched',
        payload: json,
      });
    } catch (error) {
      console.log(error);
    }

    dispatch({
      type: 'loadingReducer/IsLoading',
      payload: false,
    });

    setSearch('');
  };
  return {
    search,
    setSearch,
    getSearch,
  };
}

export default useSearch;
